// Noindex by host (DECISIONS-2026-10-01 §7.2): every host that is not www.regoparkcounseling.com answers with
// X-Robots-Tag: noindex, nofollow; the real domain never does. The rule lives in vercel.json and depends only on the
// request host (no manual flag), so the preview can't be indexed and launch day needs no code change.
//
//   npm run test:noindex                  → checks the vercel.json rule against sample hosts (no network)
//   npm run test:noindex -- <url> [...]   → also requests each URL (with VERCEL_AUTOMATION_BYPASS_SECRET from .env when
//                                           set) and checks the header: present on any host but www.regoparkcounseling.com,
//                                           absent there
import fs from 'node:fs';

const PROD = 'www.regoparkcounseling.com';
const cfg = JSON.parse(fs.readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
let failed = 0;
const ok = (cond, msg) => { console.log(`${cond ? '✓' : '✗'} ${msg}`); if (!cond) failed++; };

// Minimal evaluator for Vercel's has/missing host conditions (exact string values only, which is all we use).
const robotsRules = (cfg.headers ?? []).filter((r) => r.headers.some((h) => h.key.toLowerCase() === 'x-robots-tag'));
const appliesTo = (rule, host) =>
  (rule.has ?? []).every((c) => c.type !== 'host' || c.value === host) &&
  (rule.missing ?? []).every((c) => c.type !== 'host' || c.value !== host);
const noindexFor = (host) => robotsRules.some((r) => r.source === '/(.*)' && appliesTo(r, host) && r.headers.some((h) => /noindex/i.test(h.value)));

ok(robotsRules.length === 1, 'exactly one X-Robots-Tag rule in vercel.json');
ok(robotsRules.every((r) => (r.missing ?? []).some((c) => c.type === 'host' && c.value === PROD)), `the rule is conditioned on the host (missing ${PROD})`);
ok(!noindexFor(PROD), `${PROD} → no noindex`);
for (const h of ['rego-park-counseling.vercel.app', 'rego-park-counseling-abc123-elizabeth-s-projects20.vercel.app', 'regoparkcounseling.com', 'localhost:4321']) ok(noindexFor(h), `${h} → noindex`);

const urls = process.argv.slice(2);
if (urls.length) {
  let secret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
  if (!secret && fs.existsSync('.env')) secret = fs.readFileSync('.env', 'utf8').match(/^VERCEL_AUTOMATION_BYPASS_SECRET=(.+)$/m)?.[1]?.trim();
  for (const u of urls) {
    const res = await fetch(u, { redirect: 'manual', headers: secret ? { 'x-vercel-protection-bypass': secret } : {} });
    const tag = res.headers.get('x-robots-tag') || '';
    const host = new URL(u).host;
    // A redirect isn't indexed and Vercel sends redirects before custom headers; its target is what gets checked.
    if (res.status >= 300 && res.status < 400) { console.log(`- live ${u} (${res.status} → ${res.headers.get('location')}) redirect, not checked`); continue; }
    if (host === PROD) ok(!/noindex/i.test(tag), `live ${u} (${res.status}) has no noindex header`);
    else ok(/noindex/i.test(tag), `live ${u} (${res.status}) has X-Robots-Tag "${tag}"`);
  }
}
process.exit(failed ? 1 : 0);
