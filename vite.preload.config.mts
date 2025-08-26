import { defineConfig } from 'electron-vite';
import { resolve } from 'path';

export default defineConfig({
  preload: {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/preload/index.ts'),
      },
      outDir: 'dist/preload',
    },
  },
});
