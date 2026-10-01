// 410 Gone for the spam/junk URLs in RPC_Sitemap_Redirect_Map_v2.xlsx ("Redirect Map", action 410; Server Rules #5).
// The path list (src/data/gone.json) is generated from the map and mirrored in vercel.json "rewrites" → /api/gone/.
// Used by src/pages/api/gone.ts and src/middleware.ts (see the note there for why both exist).
import paths from '../data/gone.json';

const GONE = new Set<string>(paths);

export const isGone = (pathname: string): boolean => {
  let p = pathname;
  try { p = decodeURIComponent(pathname); } catch { /* keep raw */ }
  return GONE.has(p) || GONE.has(p.endsWith('/') ? p : `${p}/`);
};

export const goneResponse = (): Response =>
  new Response(
    '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex, nofollow"><title>410 Gone</title></head><body><h1>410 Gone</h1><p>This page has been permanently removed.</p><p><a href="/">Rego Park Counseling home</a></p></body></html>',
    {
      status: 410,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'public, max-age=0, s-maxage=86400',
      },
    },
  );
