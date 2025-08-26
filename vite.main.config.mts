import { defineConfig } from 'electron-vite';
import { resolve } from 'path';

export default defineConfig({
  main: {
    entry: resolve(__dirname, 'src/main/index.ts'),
  },
});
