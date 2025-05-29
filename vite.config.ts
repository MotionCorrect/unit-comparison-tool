import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import removeConsole from 'vite-plugin-remove-console';

export default defineConfig(({ mode, command }) => ({
	plugins: [
		sveltekit(),
		// Remove console.* in production builds only
		...(command === 'build' && mode === 'production' ? [removeConsole()] : [])
	]
}));
