import type { APIRoute } from 'astro';
import { goneResponse } from '../../lib/gone';

// Target of the vercel.json "rewrites" for every 410 row in the Redirect Map. On-demand (not prerendered) so it can
// return a real 410 status; a static file can only ever answer 200.
export const prerender = false;

export const ALL: APIRoute = () => goneResponse();
