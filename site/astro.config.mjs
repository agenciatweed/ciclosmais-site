import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ciclosmais.com',
  trailingSlash: 'ignore',
  // HTML sem compactação: o código do Pixel da Meta sai idêntico ao enviado pela Meta.
  compressHTML: false,
  build: { inlineStylesheets: 'auto' },
  image: { layout: 'constrained' },
  devToolbar: { enabled: false },
});
