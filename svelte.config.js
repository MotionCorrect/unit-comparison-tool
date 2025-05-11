// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		//"set MANUAL_BUILD=true && pnpm run build" on windows to build the website
		paths: {
			base: process.env.BASE_PATH ?? ''
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),
		prerender: {
			handleHttpError: 'warn',
			entries: ['*']
		}
	},
	preprocess: vitePreprocess()
};

export default config;
