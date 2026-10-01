// Crawl every row of the Redirect Map (docs/content/RPC_Sitemap_Redirect_Map_v2.xlsx, sheet "Redirect Map") against a
// deployment and check it behaves as the map says (DECISIONS-2026-10-01 extras). Re-run after DNS against the real domain.
//
//   node scripts/crawl-redirect-map.mjs [base-url]      default https://rego-park-counseling.vercel.app
//
// Sends VERCEL_AUTOMATION_BYPASS_SECRET (from the env or .env) as x-vercel-protection-bypass. Reads the sheet through
// python3 + openpyxl (already used by scripts/import-wp-posts.py). Writes docs/REDIRECT-CRAWL.md and prints a summary.
//
// Expected per action:  301 → ends on `target` with 200, first hop a 301/308, ideally 1 hop
//                       410 → 410 · KEEP → 200 on the same path · 404 → 404 (410 also accepted)
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const BASE = (process.argv[2] || 'https://rego-park-counseling.vercel.app').replace(/\/$/, '');
let secret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
if (!secret && fs.existsSync('.env')) secret = fs.readFileSync('.env', 'utf8').match(/^VERCEL_AUTOMATION_BYPASS_SECRET=(.+)$/m)?.[1]?.trim();
const headers = secret ? { 'x-vercel-protection-bypass': secret } : {};

const rows = JSON.parse(execFileSync('python3', ['-c', `
import openpyxl, json
ws = openpyxl.load_workbook('docs/content/RPC_Sitemap_Redirect_Map_v2.xlsx', data_only=True)['Redirect Map']
out = []
for r in list(ws.iter_rows(values_only=True))[1:]:
    if r and r[2]: out.append({'phase': r[0], 'action': str(r[1]), 'path': str(r[2]).strip(), 'target': (str(r[3]).strip() if r[3] else None), 'clicks': r[6] or 0, 'impr': r[7] or 0})
print(json.dumps(out))
`], { encoding: 'utf8' }));

const norm = (p) => (p ? decodeURI(new URL(p, BASE).pathname).replace(/\/?$/, '/') : p);
async function walk(path) {
  const hops = [];
  let url = new URL(path, BASE).href;
  for (let i = 0; i < 6; i++) {
    const res = await fetch(url, { redirect: 'manual', headers });
    const loc = res.headers.get('location');
    hops.push({ status: res.status, url: new URL(url).pathname, loc });
    if (res.status >= 300 && res.status < 400 && loc) url = new URL(loc, url).href;
    else break;
  }
  return hops;
}

const results = [];
const queue = [...rows];
await Promise.all(Array.from({ length: 8 }, async () => {
  while (queue.length) {
    const r = queue.shift();
    let hops;
    try { hops = await walk(r.path); } catch (e) { hops = [{ status: 0, url: r.path, loc: String(e.message) }]; }
    const last = hops[hops.length - 1];
    const redirects = hops.filter((h) => h.status >= 300 && h.status < 400).length;
    let ok, note = '';
    if (r.action === '301') {
      ok = last.status === 200 && norm(last.url) === norm(r.target);
      if (ok && redirects > 1) note = `${redirects} hops`;
      if (!ok) note = `ends ${last.status} at ${last.url}${norm(last.url) !== norm(r.target) ? ` (map: ${r.target})` : ''}`;
    } else if (r.action === '410') {
      ok = last.status === 410;
      if (!ok) note = `got ${last.status}${redirects ? ` after ${redirects} redirect(s) → ${last.url}` : ''}`;
    } else if (r.action === 'KEEP') {
      ok = last.status === 200 && norm(last.url) === norm(r.target || r.path);
      if (!ok) note = `got ${last.status} at ${last.url}`;
      else if (redirects) note = 'trailing-slash hop';
    } else if (r.action === '404') {
      ok = last.status === 404 || last.status === 410;
      if (!ok) note = `got ${last.status} at ${last.url}`;
    } else { ok = false; note = `unknown action ${r.action}`; }
    results.push({ ...r, ok, note, chain: hops.map((h) => h.status).join('→') });
  }
}));

// Build counts (vercel.json) next to the map counts
const vj = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const goneRewrites = (vj.rewrites ?? []).filter((r) => /\/api\/gone/.test(r.destination)).length;
const mapCount = (a) => rows.filter((r) => r.action === a).length;
const by = (a) => results.filter((r) => r.action === a);
const fails = results.filter((r) => !r.ok).sort((a, b) => b.clicks - a.clicks || b.impr - a.impr);
const multi = results.filter((r) => r.ok && /hops/.test(r.note));
const mapSources = new Set(rows.filter((r) => r.action === '301').map((r) => norm(r.path)));
const extraInBuild = vj.redirects.filter((r) => !mapSources.has(norm(r.source.replace(/:.*$/, ''))) && !r.source.includes(':'));
const lines = [
  `# Redirect Map crawl — ${new Date().toISOString().slice(0, 10)}`,
  '',
  `Base: ${BASE} · ${results.length} rows from RPC_Sitemap_Redirect_Map_v2.xlsx ("Redirect Map") · bypass token ${secret ? 'sent' : 'NOT sent'}.`,
  '',
  '## Counts',
  '',
  '| | Map v2 | Build (vercel.json) | Crawl OK | Crawl failing |',
  '|---|---|---|---|---|',
  `| 301 | ${mapCount('301')} | ${vj.redirects.length} redirect rules | ${by('301').filter((r) => r.ok).length} | ${by('301').filter((r) => !r.ok).length} |`,
  `| 410 | ${mapCount('410')} | ${goneRewrites} rewrites to /api/gone/ | ${by('410').filter((r) => r.ok).length} | ${by('410').filter((r) => !r.ok).length} |`,
  `| KEEP | ${mapCount('KEEP')} | — | ${by('KEEP').filter((r) => r.ok).length} | ${by('KEEP').filter((r) => !r.ok).length} |`,
  `| 404 | ${mapCount('404')} | — | ${by('404').filter((r) => r.ok).length} | ${by('404').filter((r) => !r.ok).length} |`,
  '',
  `Build rules whose source is not a 301 row of the map (variants without slash, decisions of 2026-10-01, legacy links): ${extraInBuild.length}.`,
  '',
  `## Failing rows (${fails.length}), most clicks first`,
  '',
  '| Action | Old path | Map target | Chain | Problem | Clicks / impr. |',
  '|---|---|---|---|---|---|',
  ...fails.map((r) => `| ${r.action} | \`${r.path}\` | ${r.target ? `\`${r.target}\`` : '—'} | ${r.chain} | ${r.note} | ${r.clicks} / ${r.impr} |`),
  '',
  `## 301s that work but take more than one hop (${multi.length})`,
  '',
  ...multi.map((r) => `- \`${r.path}\` → \`${r.target}\` (${r.chain})`),
  '',
];
fs.writeFileSync('docs/REDIRECT-CRAWL.md', lines.join('\n'));
console.log(lines.slice(0, 14).join('\n'));
console.log(`\nFailing: ${fails.length} · multi-hop 301s: ${multi.length} · report: docs/REDIRECT-CRAWL.md`);
