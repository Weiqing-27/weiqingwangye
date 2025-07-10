<template>
  <div class="about-container">
    <h1 class="title">关于我</h1>
    <div class="content">
      <div class="info-section">
        <h2>个人简介</h2>
        <p>正在成长的前端开发实习生</p>
      </div>

      <div class="info-section">
        <h2>学过用过的技能</h2>
        <div class="skills">
          <el-tag
            v-for="(skill, index) in skills"
            :key="index"
            :type="getTagType(index)"
            class="skill-tag"
          >
            {{ skill }}
          </el-tag>
        </div>
      </div>

      <div class="info-section">
        <h2>教育背景</h2>
        <p>计算机科学与技术 - 浙江中医药大学滨江学院</p>
        <p>2021-2025</p>
      </div>
      <div class="info-section">
        <h2>实习经历</h2>
        <p>前端开发实习 - 杭州秀漫网络科技有限公司</p>
        <p>2024.7-2025.7</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  'Vue.js',
  'JavaScript',
  'HTML/CSS',
  'Sass/SCSS',
  'Element Plus',
  'echarts',
  'vant',
  'z-paging',
  'Webpack',
  'Node.js',
  'express',
  'vercel',
  'Git',
  '响应式设计',
])

const getTagType = (index) => {
  const types = ['', 'success', 'warning', 'danger', 'info']
  return types[index % types.length]
}
</script>

<style lang="scss" scoped>
.about-container {
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

.content {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 30px;
  backdrop-filter: blur(10px);
}

.info-section {
  margin-bottom: 30px;

  h2 {
    font-size: 24px;
    margin-bottom: 15px;
    color: #c084fc;
  }

  p {
    line-height: 1.6;
    margin-bottom: 10px;
  }
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .skill-tag {
    margin-right: 8px;
    margin-bottom: 8px;
    font-size: 14px;
  }
}
</style>
