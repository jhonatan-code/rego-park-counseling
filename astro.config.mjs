// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

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
      // thank-you is noindex and out of the XML sitemap (New Sitemap tab, Utility row)
      filter: (page) => !page.includes('/api/') && !['/thank-you/'].includes(new URL(page).pathname),
    }),
  ],
});
