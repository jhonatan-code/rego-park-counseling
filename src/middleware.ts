import { defineMiddleware } from 'astro:middleware';
import { isGone, goneResponse } from './lib/gone';

// 410 Gone backstop (Redirect Map action 410, Server Rules #5).
// vercel.json rewrites each gone path to /api/gone/ (src/pages/api/gone.ts). On Vercel a function reached through a
// rewrite can still see the ORIGINAL request path, in which case Astro would route it as a 404 instead of hitting
// /api/gone/. This middleware runs inside the same function (and on its 404 render), so the original path also gets
// the 410. Prerendered pages are never touched: static files are served before any rewrite or function runs.
export const onRequest = defineMiddleware((context, next) => {
  if (!context.isPrerendered && isGone(context.url.pathname)) return goneResponse();
  return next();
});
