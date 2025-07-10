import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(async () => {
  // 尝试安全地导入vueDevTools
  let vueDevTools = null;
  try {
    const devtoolsModule = await import('vite-plugin-vue-devtools').catch(() => null);
    vueDevTools = devtoolsModule?.default || devtoolsModule;
  } catch (e) {
    console.warn('vite-plugin-vue-devtools import error:', e.message);
  }
  
  return {
  plugins: [
    vue(),
    // 只在开发环境中且成功导入插件时才加载Vue DevTools
    process.env.NODE_ENV === 'development' && vueDevTools ? vueDevTools() : null,
  ].filter(Boolean), // 过滤掉null值
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
})
