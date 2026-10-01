import type { APIRoute } from 'astro';
import { LLMS, renderLlms } from '../data/llms';
import { INDEXABLE } from '../data/indexable.js';
import { NOINDEX } from '../data/built.js';

// /llms.txt, generated at build time from src/data/llms.ts.
export const prerender = true;

export const GET: APIRoute = () => {
  // Every link must be a page the sitemap publishes (same route list) and not noindex.
  const problems = LLMS.sections.flatMap((s) =>
    s.links.flatMap((l) => {
      if (NOINDEX.includes(l.path)) return [`${l.path} ("${l.title}") is noindex`];
      if (!INDEXABLE.includes(l.path)) return [`${l.path} ("${l.title}") is not in the sitemap route list (not built, placeholder, or misspelled)`];
      return [];
    }),
  );
  if (problems.length) {
    throw new Error(`llms.txt: ${problems.length} link(s) in src/data/llms.ts failed validation:\n  - ${problems.join('\n  - ')}`);
  }
  return new Response(renderLlms(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
