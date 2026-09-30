// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { BUILT } from './src/data/built.js';
import { HAS_PLACEHOLDERS } from './src/data/team.js';

// XML sitemap = home + built pages that are indexable. Placeholders and noindex pages stay out.
const INDEXABLE = ['/', ...BUILT.filter((u) => !(u === '/our-team/' && HAS_PLACEHOLDERS))];

// Production domain (brief: canonical is the www host; the server rule forces https + www).
export default defineConfig({
  site: 'https://www.regoparkcounseling.com',
  adapter: vercel(),
  devToolbar: { enabled: false },
  trailingSlash: 'always', // every current URL ends in "/" (Redirect Map, Server Rules #2)
  build: { format: 'directory', inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => INDEXABLE.includes(new URL(page).pathname),
    }),
  ],
});
