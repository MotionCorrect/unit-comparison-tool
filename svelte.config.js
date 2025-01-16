// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/unit-comparison-tool' : ''
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: false
		}),
		prerender: {
			handleHttpError: 'warn',
			entries: ['*']
		}
	},
	preprocess: vitePreprocess()
};

export default config;
