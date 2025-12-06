import { defineConfig } from 'vite';
import { resolve } from 'path';

const dir = __dirname + '/src/';
export default defineConfig({
    build: {
        outDir: 'docs',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(dir, 'index.html'),
                about: resolve(dir, 'about.html'),
                privacy: resolve(dir, 'privacy.html'),
                terms: resolve(dir, 'terms.html'),
                cc_mgmt_guide: resolve(dir, 'cc_mgmt_guide.html'),
                cc_pmt_example: resolve(dir, 'cc_pmt_example.html'),
                credit_score_explained: resolve(dir, 'credit_score_explained.html'),
            },
        },
    },
});
