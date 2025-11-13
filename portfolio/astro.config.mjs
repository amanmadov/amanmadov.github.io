// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://yourusername.github.io', // Update with your domain
	output: 'static',
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto',
	},
	vite: {
		build: {
			cssMinify: true,
			minify: 'terser',
		},
	},
});
