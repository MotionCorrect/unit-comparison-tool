import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter(),
        paths: {
            base: process.env.MANUAL_BUILD === 'true' ? '/sveltekit-github-pages' : '',
        }
    }
};

if (process.env.MANUAL_BUILD === 'true') {
    console.log('Manual build detected...');
    // Add any manual build-specific logic here
}

export default config;
