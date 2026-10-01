// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { INDEXABLE } from './src/data/indexable.js';

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
