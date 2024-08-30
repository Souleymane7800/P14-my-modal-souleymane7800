import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
      plugins: [
            react(),
            dts({
                  insertTypesEntry: true,
            }),
      ],
      build: {
            lib: {
                  entry: path.resolve(__dirname, 'index.ts'),
                  name: 'MyModalSouleymane7800',
                  fileName: (format) => `index.${format}.js`,
                  formats: ['umd', 'es'],
            },
            rollupOptions: {
                  external: ['react', 'react-dom'],
                  output: {
                        globals: {
                              react: 'React',
                              'react-dom': 'ReactDOM',
                        },
                  },
            },
            sourcemap: true,
            emptyOutDir: true,
      },
});
