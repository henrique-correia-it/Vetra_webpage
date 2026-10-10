import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vetra-app.com',
  base: '/',
  output: 'static',
  build: { format: 'preserve' },
  devToolbar: { enabled: false },
  redirects: {
    '/app': 'https://app.vetra-app.com/',
    '/web': 'https://app.vetra-app.com/',
    '/webapp': 'https://app.vetra-app.com/',
    '/login': 'https://app.vetra-app.com/',
  },
});
