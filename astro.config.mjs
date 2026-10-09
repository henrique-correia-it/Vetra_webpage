import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vetra-app.com',
  base: '/',
  output: 'static',
  build: { format: 'preserve' },
  devToolbar: { enabled: false },
});
