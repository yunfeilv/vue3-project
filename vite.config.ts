import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  /** 地址指向配置 */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  /** 样式配置 */
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "@/assets/style/mian.less";',
      },
    },
  },
  /** 服务配置 */
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {},
  },
  /** 构建时取出 debugger，console */
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
