<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <el-header class="header flex align-center justify-between">
      <div class="logo">weiqing</div>
      <el-menu
        :default-active="activeRoute"
        class="el-menu-demo flex justify-between"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
        <el-menu-item index="/works">项目</el-menu-item>
        <el-menu-item index="/contact">联系</el-menu-item>
      </el-menu>
    </el-header>
    <!-- 页面内容区域 -->
    <div class="router-view-container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 匹配当前路由，让菜单高亮
const activeRoute = computed(() => {
  return route?.path || '/'
})

// 菜单切换逻辑
const handleSelect = (key) => {
  router.push(key)
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(120deg, #2980b9, #8e44ad);
  background-attachment: fixed;
  color: #fff;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: rgba(44, 62, 80, 0.9);
  color: #fff;
  padding: 0 20px;
  height: 60px;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  font-family: Roboto;
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: normal;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    linear-gradient(90deg, #c084fc 0%, #f472b6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.el-menu {
  background-color: transparent !important;
  border-bottom: none !important;
}

.el-menu--horizontal > .el-menu-item {
  color: #c084fc !important;
}

.el-menu--horizontal.el-menu {
  border-bottom: none;
}

.el-menu-item.is-active {
  color: #f472b6 !important;
}

/* 添加全局页面内容区域样式 */
.router-view-container {
  flex: 1;
  padding: 20px 0;
}
</style>  