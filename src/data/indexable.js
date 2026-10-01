import { BUILT, NOINDEX } from './built.js';
import { HAS_PLACEHOLDERS, PAGED_PEOPLE } from './team.js';
import posts from './posts.json' with { type: 'json' };

// XML sitemap = home + built pages that are indexable + every blog post (root URLs) + real person pages.
// Placeholders and noindex pages stay out. Shared by the sitemap (astro.config.mjs) and /llms.txt.
export const INDEXABLE = [
  '/',
  ...BUILT.filter((u) => !NOINDEX.includes(u) && !(u === '/our-team/' && HAS_PLACEHOLDERS)),
  ...posts.map((p) => `/${p.slug}/`),
  ...PAGED_PEOPLE.filter((p) => !p.placeholder).map((p) => `/our-team/${p.slug}/`),
];
