<template>
  <div class="home-container">
    <h1 class="title">个人主页</h1>
    <div class="profile-container">
      <el-avatar class="avatar" :src="avatarUrl" size="large"></el-avatar>
      <div class="name">weiqing</div>
      <p class="description">前端实习 & 初级前端开发工程师</p>
      <el-button type="primary" @click="goContact">联系我</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// 使用示例头像
const avatarUrl = ref('https://picsum.photos/200/200')

const goContact = () => {
  router.push('/contact')
}
</script>

<style lang="scss" scoped>
.home-container {
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  color: #fff;
}

.title {
  font-size: 36px;
  margin-bottom: 40px;
  text-align: center;
  background: linear-gradient(90deg, #c084fc 0%, #f472b6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.profile-container {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 40px;
  backdrop-filter: blur(10px);
}

.avatar {
  margin-bottom: 20px;
  width: 150px !important;
  height: 150px !important;
  border: 4px solid rgba(255, 255, 255, 0.2);
}

.name {
  font-size: 28px;
  margin-bottom: 10px;
  color: #c084fc;
}

.description {
  font-size: 16px;
  margin-bottom: 30px;
}
</style>  