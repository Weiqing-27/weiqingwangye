import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 尝试安全地导入vueDevTools
let vueDevTools = null;
try {
  // 动态导入，防止构建过程中出错
  vueDevTools = require('vite-plugin-vue-devtools');
} catch (e) {
  console.warn('vite-plugin-vue-devtools plugin not loaded:', e.message);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 只在开发环境中且成功导入插件时才加载Vue DevTools
    process.env.NODE_ENV === 'development' && vueDevTools ? vueDevTools() : null,
  ].filter(Boolean), // 过滤掉null值
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
