import type { APIRoute } from 'astro';

// Server-side proxy to CallTrackingMetrics FormReactor (same pattern as the Sunview build).
// Credentials live in env vars only (CTM_FORMREACTOR_ENDPOINT / CTM_FORMREACTOR_KEY), never in the browser.
// [Oriana to map fields] custom_fields names below are proposals until the RPC reactor exists.
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
  let digits = str(fd.get('phone'), 30).replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
  if (name.length < 2) return json(400, { ok: false, error: 'Please tell us your name.' });
  if (digits.length !== 10) return json(400, { ok: false, error: 'Please enter a 10-digit phone number.' });

  const endpoint = import.meta.env.CTM_FORMREACTOR_ENDPOINT || process.env.CTM_FORMREACTOR_ENDPOINT;
  const key = import.meta.env.CTM_FORMREACTOR_KEY || process.env.CTM_FORMREACTOR_KEY;
  if (!endpoint || !key) {
    console.error('[lead] CTM_FORMREACTOR_ENDPOINT / CTM_FORMREACTOR_KEY not set');
    return json(503, { ok: false, error: 'This form is not connected yet.' });
  }

  const params = new URLSearchParams();
  params.set('phone_number', `+1${digits}`);
  params.set('caller_name', name);
  // Optional on the form; backfilled because CTM rejects a lead when a required custom field is blank (Sunview lesson).
  params.set('custom_fields[membership_policy_id]', str(fd.get('policy_id'), 40) || 'Not provided');
  params.set('custom_fields[insurance_carrier]', str(fd.get('insurance_carrier'), 60) || 'Not provided');
  params.set('custom_fields[source_page]', str(fd.get('page'), 200) || '/');
  params.set('custom_fields[form_location]', str(fd.get('form_location'), 40) || 'unknown');
  const sid = str(fd.get('visitor_sid'), 120);
  if (sid) params.set('visitor_sid', sid);
  const gclid = str(fd.get('attribution[gclid]'), 200);
  if (gclid) params.set('paid_attribution[gclid]', gclid);

  try {
    const res = await fetch(`${endpoint.replace(/\?.*$/, '')}?key=${encodeURIComponent(key)}`, {
      method: 'POST',
      body: params,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      signal: AbortSignal.timeout(8000),
    });
    const text = await res.text();
    let status = '';
    try { status = String((JSON.parse(text) as { status?: unknown }).status ?? ''); } catch {}
    if (!res.ok || status === 'error') {
      console.error('[lead] CTM rejected lead', res.status, text.slice(0, 300));
      return json(502, { ok: false, error: 'We couldn’t send your request.' });
    }
  } catch (err) {
    console.error('[lead] CTM request failed', (err as Error).message);
    return json(502, { ok: false, error: 'We couldn’t send your request.' });
  }
  return json(200, { ok: true });
};

export const GET: APIRoute = () => new Response('Method not allowed.', { status: 405, headers: { Allow: 'POST' } });
