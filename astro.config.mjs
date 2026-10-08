import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://henrique-correia-it.github.io',
  base: '/Vetra_webpage',
  output: 'static',
  build: { format: 'preserve' },
  devToolbar: { enabled: false },
});
