import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import precompileIntl from "svelte-intl-precompile/sveltekit-plugin";

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [svelte(), precompileIntl('locales')],
  build: {
    outDir: 'build'
  },
  server: {
    port:3000,
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: true,
    }
  },
  preview: {
    host: true,
    port: 4173
  }
})
