import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/pages/home/home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/pages/about/about.vue')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('../views/pages/works/works.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/pages/contact/contact.vue')
  }
]

// 创建路由实例
const router = createRouter({
  // 使用hash模式解决GitHub Pages路由问题
  history: createWebHashHistory(),
  routes,
  // 添加路由滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router  