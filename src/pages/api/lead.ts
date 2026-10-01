import type { APIRoute } from 'astro';

// Server-side proxy to CallTrackingMetrics FormReactor (same pattern as the Sunview build).
// Credentials live in env vars only (CTM_FORMREACTOR_ENDPOINT / CTM_FORMREACTOR_KEY), never in the browser.
// Custom fields sent: preferred_clinic, help_with, sms_opt_in, sms_consent_version (need creating on the reactor;
// PENDING 5.1/5.9) and the reactor's original membership_policy_id / insurance_carrier (backfilled). The page and
// form location travel in CTM's visitor/attribution data.
export const prerender = false;

const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 8;
const hits = new Map<string, number[]>();

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });
const str = (v: FormDataEntryValue | null, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || clientAddress || 'unknown';
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS).concat(now);
  hits.set(ip, recent);
  if (recent.length > RATE_MAX) return json(429, { ok: false, error: 'Too many requests. Please wait a few minutes.' });

  let fd: FormData;
  try { fd = await request.formData(); } catch { return json(400, { ok: false, error: 'We couldn’t read that request.' }); }
  if (str(fd.get('hp_field'))) return json(200, { ok: true }); // honeypot

  const name = str(fd.get('name'), 80);
  const digits = str(fd.get('phone'), 30).replace(/\D/g, '');
  if (name.length < 2) return json(400, { ok: false, error: 'Please tell us your name.' });
  if (digits.length < 10 || digits.length > 15) return json(400, { ok: false, error: 'Please enter a valid phone number.' });
  // E.164: a 10-digit number is US (+1); longer numbers already carry their country code. Never send country_code.
  const e164 = digits.length === 10 ? `+1${digits}` : `+${digits}`;

  // process.env only: import.meta.env would inline the value into the server bundle at build time, so a prebuilt
  // deploy would ship the local key and rotating the Vercel variable would change nothing (forms-ctm §2).
  const endpoint = process.env.CTM_FORMREACTOR_ENDPOINT;
  const key = process.env.CTM_FORMREACTOR_KEY;
  if (!endpoint || !key) {
    console.error('[lead] CTM_FORMREACTOR_ENDPOINT / CTM_FORMREACTOR_KEY not set');
    return json(503, { ok: false, error: 'This form is not connected yet.' });
  }

  const params = new URLSearchParams();
  params.set('phone_number', e164);
  params.set('caller_name', name);
  // Preferred clinic + "I need help with" (brand manual / Home brief). Only listed values pass; blank → "Not sure".
  // They need matching select fields on the reactor (PENDING 5.1). The reactor's older policy/carrier fields are no
  // longer asked (brand manual: no insurance ID); backfilled so a still-required field can't reject the lead.
  const pick = (v: string, list: string[]) => (list.includes(v) ? v : 'Not sure');
  params.set('custom_fields[preferred_clinic]', pick(str(fd.get('preferred_clinic'), 40), ['Rego Park', 'Fresh Meadows', 'Telehealth', 'Yonkers', 'Not sure']));
  params.set('custom_fields[help_with]', pick(str(fd.get('help_with'), 40), ['Mental health', 'Substance use', 'An evaluation', 'Not sure']));
  params.set('custom_fields[membership_policy_id]', 'Not provided');
  params.set('custom_fields[insurance_carrier]', 'Not provided');
  // SMS consent record (privacy-consent §4): yes/no + which wording they saw. CTM stores the lead's timestamp.
  // Needs the fields sms_opt_in and sms_consent_version on the reactor, or CTM drops them silently (PENDING 5.9).
  params.set('custom_fields[sms_opt_in]', str(fd.get('sms_opt_in'), 3) === 'yes' ? 'yes' : 'no');
  params.set('custom_fields[sms_consent_version]', str(fd.get('sms_consent_version'), 40).replace(/[^\w.-]/g, '') || 'none');
  const sid = str(fd.get('visitor_sid'), 120);
  if (/^[A-Za-z0-9_-]+$/.test(sid)) params.set('visitor_sid', sid);
  // Click ids → CTM paid_attribution (known keys only; URL aliases mapped to CTM's names)
  const ATTR: Record<string, string> = {
    gclid: 'gclid', gbraid: 'gbraid', wbraid: 'wbraid', msclkid: 'msclkid', fbclid: 'fbclid',
    campaignid: 'campaign_id', campaign_id: 'campaign_id', adgroupid: 'adgroup_id', adgroup_id: 'adgroup_id',
    creative: 'creative_id', creative_id: 'creative_id',
  };
  for (const [from, to] of Object.entries(ATTR)) {
    const v = str(fd.get(`attribution[${from}]`), 200);
    if (/^[\w.~-]+$/.test(v) && !params.has(`paid_attribution[${to}]`)) params.set(`paid_attribution[${to}]`, v);
  }

  try {
    const res = await fetch(`${endpoint.replace(/\?.*$/, '')}?key=${encodeURIComponent(key)}`, {
      method: 'POST',
      body: params,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      signal: AbortSignal.timeout(8000),
    });
    const text = await res.text();
    let status = '';
    let reason = '';
    try {
      const body = JSON.parse(text) as { status?: unknown; text?: unknown };
      status = String(body.status ?? '');
      reason = String(body.text ?? '').slice(0, 200);
    } catch {}
    if (!res.ok || status === 'error') {
      // Status and CTM's error text only, never the raw body or submitted fields (phi-data-handling §4)
      console.error('[lead] CTM rejected lead', res.status, reason || 'no error text');
      return json(502, { ok: false, error: 'We couldn’t send your request.' });
    }
  } catch (err) {
    console.error('[lead] CTM request failed', (err as Error).message);
    return json(502, { ok: false, error: 'We couldn’t send your request.' });
  }
  return json(200, { ok: true });
};

export const GET: APIRoute = () => new Response('Method not allowed.', { status: 405, headers: { Allow: 'POST' } });
