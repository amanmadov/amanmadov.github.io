import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://amanmadov.github.io',
    base: '/personal-webpage',
    build: {
        inlineStylesheets: 'always',
    },
    compressHTML: true,
});