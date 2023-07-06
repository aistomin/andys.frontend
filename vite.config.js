import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generateSitemap from "vite-plugin-pages-sitemap";
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
    Pages({
      onRoutesGenerated: routes => (generateSitemap({ routes })),
    })
  ],
});
