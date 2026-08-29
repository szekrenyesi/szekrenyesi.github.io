import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://szekrenyes.comp-ling.org',
  i18n: {
    locales: ['hu', 'en'],
    defaultLocale: 'hu',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
