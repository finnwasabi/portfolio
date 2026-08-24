// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tungln.is-a.dev',

  build: {
    // Mac dinh Astro nhung script va CSS thang vao HTML khi chung nho. Tien cho toc do,
    // nhung khien Content-Security-Policy phai bam tung khoi, va bam doi moi lan sua
    // script. Ep ra file ngoai de CSP chi can script-src 'self'.
    inlineStylesheets: 'never',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0,
    },
  },

  integrations: [sitemap()]
});