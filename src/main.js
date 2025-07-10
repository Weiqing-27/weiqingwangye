import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import locale from 'element-plus/es/locale/lang/zh-cn' // 中文语言
import 'element-plus/theme-chalk/index.css'
import 'element-plus/theme-chalk/display.css'
import '@/assets/styles/index.scss' // global css


const app = createApp(App)

// 全局方法挂载
app.use(createPinia())

// 注册路由
app.use(router)

// 注册Element Plus
app.use(ElementPlus, { locale })

app.mount('#app')