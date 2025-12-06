import { defineConfig } from 'vite';
import { resolve, dirname, parse } from 'path';
import { fileURLToPath } from 'url';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import handlebars from 'vite-plugin-handlebars';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper to get all HTML inputs
function getHtmlInputs() {
    const srcDir = resolve(__dirname, 'src');
    const inputs = {};
    const files = fs.readdirSync(srcDir);

    files.forEach(file => {
        if (file.endsWith('.html')) {
            const name = parse(file).name;
            const key = name === 'index' ? 'main' : name;
            inputs[key] = resolve(srcDir, file);
        }
    });
    return inputs;
}

export default defineConfig({
    root: 'src',
    publicDir: '../public',
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/partials'),
            context: {
                title: 'Designed Financial Freedom (DFF) | Financial Coaching for a Purposeful Life',
                description: 'Designed Financial Freedom (DFF) helps individuals and couples transform financial stress into intentional purpose and lasting joy.',
                path: '/'
            },
        }),
        ViteMinifyPlugin({}),
    ],
    build: {
        outDir: '../docs',
        emptyOutDir: true,
        rollupOptions: {
            input: getHtmlInputs(),
        },
    },
});
