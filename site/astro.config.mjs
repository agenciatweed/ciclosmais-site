import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ciclosmais.com',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  image: { layout: 'constrained' },
  devToolbar: { enabled: false },
});
