// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://tushyagupta81.github.io',
  // Only use base path in production (GitHub Pages)
  base: process.env.NODE_ENV === 'production' ? '/terminal-portfolio' : '/',
  integrations: [sitemap(), mdx()],
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
      langs: [],
      wrap: true,
    },
  },
});
