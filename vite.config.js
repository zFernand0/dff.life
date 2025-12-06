import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    root: 'src',
    publicDir: '../public',
    plugins: [
        ViteMinifyPlugin({}),
    ],
    build: {
        outDir: '../docs',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                about: resolve(__dirname, 'src/about.html'),
                privacy: resolve(__dirname, 'src/privacy.html'),
                terms: resolve(__dirname, 'src/terms.html'),
                cc_mgmt_guide: resolve(__dirname, 'src/cc_mgmt_guide.html'),
                cc_pmt_example: resolve(__dirname, 'src/cc_pmt_example.html'),
                credit_score_explained: resolve(__dirname, 'src/credit_score_explained.html'),
            },
        },
    },
});
