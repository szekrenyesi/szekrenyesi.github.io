import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://szekrenyesi.github.io',
  i18n: {
    locales: ['hu', 'en'],
    defaultLocale: 'hu',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
