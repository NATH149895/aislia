import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const NOINDEX = ['/aviso-legal/', '/politica-de-privacidad/', '/politica-de-cookies/', '/404'];

export default defineConfig({
  site: 'https://aislia.es',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX.some((p) => page.includes(p)),
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
});
