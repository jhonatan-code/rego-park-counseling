import { defineMiddleware } from 'astro:middleware';
import { isGone, goneResponse } from './lib/gone';

// 410 Gone backstop (Redirect Map action 410, Server Rules #5).
// vercel.json rewrites each gone path to /api/gone/ (src/pages/api/gone.ts). On Vercel a function reached through a
// rewrite can still see the ORIGINAL request path, in which case Astro would route it as a 404 instead of hitting
// /api/gone/. This middleware runs inside the same function (and on its 404 render), so the original path also gets
// the 410. Prerendered pages are never touched: static files are served before any rewrite or function runs.
// Old WordPress junk paths that embed our own absolute URL (Redirect Map rows like
// "/https://www.regoparkcounseling.com/post/" or "/v/https://…"): 301 to the path after the domain. The browser/CDN
// collapses "//" to "/", so match both forms. Only reached for unknown paths (404 renders on demand).
const EMBEDDED_SELF = /^\/(?:v\/)?https?:\/{1,2}(?:www\.)?regoparkcounseling\.com(\/.*)$/i;

export const onRequest = defineMiddleware((context, next) => {
  if (context.isPrerendered) return next();
  if (isGone(context.url.pathname)) return goneResponse();
  const self = context.url.pathname.match(EMBEDDED_SELF);
  if (self) return context.redirect(self[1].endsWith('/') ? self[1] : `${self[1]}/`, 301);
  return next();
});
