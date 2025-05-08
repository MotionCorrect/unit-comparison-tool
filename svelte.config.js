// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		//"set MANUAL_BUILD=true && pnpm run build" on windows to build the website
		paths: {
			base: process.env.MANUAL_BUILD === 'true' ? '/unit-comparison-tool' : ''
		},
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
			// fallback: 'index.html',
			// precompress: false,
			// strict: false
		}),
		prerender: {
			handleHttpError: 'warn',
			entries: ['*']
		}
	},
	preprocess: vitePreprocess()
};

export default config;
