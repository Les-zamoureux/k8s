import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import precompileIntl from "svelte-intl-precompile/sveltekit-plugin";

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
		target: '#svelte',
		vite: {
			plugins: [
        precompileIntl('locales')
			]			
		}		
	}
}
