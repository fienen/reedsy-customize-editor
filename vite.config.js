import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            // The entry file to your code
            entry: resolve(__dirname, 'src/main.js'), 

            name: 'ReedsyCustomizeEditor',

            // The output file name (e.g., my-lib.js)
            fileName: 'reedsy-customize-editor',
        },
        minify: 'terser',
        terserOptions: {
          format: {
            comments: 'some', // Preserve JSDoc comments
          },
        }
    },
});