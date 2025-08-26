import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist/renderer',
    rollupOptions: {
      // This is what electron-vite asked for
      input: resolve(__dirname, 'src/renderer/index.html'),
    },
  },
});
