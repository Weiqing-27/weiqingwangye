import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'element-plus/theme-chalk/index.css'
import 'element-plus/theme-chalk/display.css'
import '@/assets/styles/index.scss' // global css

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
