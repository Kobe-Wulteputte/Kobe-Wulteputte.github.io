import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      dirs: [],
      dts: 'src/components.d.ts',
      deep: true,
      resolvers: [],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: [
        // presets
        'vue',
        'vue-router',
      ],
    }),
  ],
  server: {
    port: 7051,
  },
  preview: {
    port: 7051,
  },
  build: {
    target: 'esnext',
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'legacy-js-api',
          'import',
          'global-builtin',
          'color-functions',
          'mixed-decls',
          'if-function',
        ],
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
