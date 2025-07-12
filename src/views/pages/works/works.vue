<template>
  <div class="works-container">
    <h2 class="section-title">实习项目经历</h2>
    <el-timeline class="custom-timeline">
      <el-timeline-item
        v-for="(item, index) in workItems"
        :key="index"
        :timestamp="item.date"
        :type="index === 0 ? 'primary' : ''"
        placement="top"
        :color="getColor(index)"
      >
        <el-card class="work-card" shadow="hover">
          <div class="card-header">
            <h3 class="work-title">{{ item.title }}</h3>
            <el-tag size="small" :type="getTagType(index)">{{ item.author }}</el-tag>
          </div>
          <div class="tech-tags" v-if="item.techStack && item.techStack.length">
            <el-tag
              v-for="(tech, techIndex) in item.techStack"
              :key="techIndex"
              size="mini"
              effect="plain"
              class="tech-tag"
              :type="getTechTagType(techIndex)"
            >
              {{ tech }}
            </el-tag>
          </div>
          <div class="content">
            <p class="overview">
              项目概述：{{ item.content.split('我的分工')[0].replace('项目概述：', '') }}
            </p>
            <p class="contribution">
              我的分工：{{
                item.content.includes('我的分工')
                  ? item.content.split('我的分工：')[1]
                  : item.content.includes('我的角色')
                  ? item.content.split('我的角色：')[1]
                  : ''
              }}
            </p>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const workItems = ref([
  {
    date: '2025/04 - 2025/05',
    title: '员工kpi报表-荣誉榜',
    author: '前端开发实习',
    time: '2025/04 - 2025/05',
    content:
      '项目概述：该项目是在运维平台内新增模块，主要展示所有的外包人员的kpi排行，部门kpi报表等，展示工作量，缺陷密度等相关的内容。我的分工：主要使用到的技术栈vue3+element+js,开发完后经过自测，dat，uat，已上线使用',
    techStack: ['vue3', 'element', 'JavaScript'],
  },
  {
    date: '2025/03 - 2025/04',
    title: '关于中介I平台增加客户告知书弹窗的需求',
    author: '前端开发实习',
    time: '2025/03 - 2025/04',
    content:
      '项目概述：因为甲方公司更名，需要在i平台添加用户进入提示公司更名告知书弹窗需求，并给出相应的提示。该项目主要使用使用vue2+uniApp开发。我的分工：主要使用到的技术栈vue2+uniApp+js,开发完后经过自测，dat，uat，已上线使用',
    techStack: ['vue2', 'uniApp', 'JavaScript'],
  },
  {
    date: '2025/03 - 2025/04',
    title: '银保英特保增加地址规则校验',
    author: '前端开发实习',
    time: '2025/03 - 2025/04',
    content:
      '项目概述：在原有的业务流程中添加地址规则校验，对不同产品出现的场景地址进行校验，并给出相应的提示。该需求虽然简单但是业务流程比较复杂，该项目主要使用使用vue2+uniApp开发。我的分工：主要使用到的技术栈vue2+uniApp+js,开发完后经过自测，dat，uat，已上线使用',
    techStack: ['vue2', 'uniApp', 'JavaScript'],
  },
  {
    date: '2025/02 - 2025/02',
    title: '客服系统短信空中柜面添加企微视频客服静态页',
    author: '前端开发实习',
    time: '2025/02 - 2025/02',
    content:
      '项目概述：制作一个响应式的静态页面，能够根据不同设备自适应大小字体等。我的分工：使用纯原生html+css+js完成页面制作',
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    date: '2025/01 - 2025/02',
    title: '中韩运维平台-五期需求-添加需求管理模块',
    author: '前端开发实习',
    time: '2025/01 - 2025/02',
    content:
      '项目概述：新增全新的模块来管理需求、dat问题、uat问题的创建，排期，分配，审核，查询，处理操作等功能。我的分工：该项目从需求分析到最后开发完成由我一人完成，在理解需求后在项目内新建文件夹储存本次需求的文件，新建菜单路由等；主要使用vue3+element-ui+js，以及使用封装好的接口api调试后端接口，项目比较复杂，业务流程多，拆封了十多个组件来完成复杂页面的制作，主要完成了整个需求逻辑的所有的对应页面功能实现，以及增删改查等页面功能，开发完成后经过自测datuat已上线使用，所有的外包单位和人员都会在这个模块内走需求流程和datauat问题流程。',
    techStack: ['Vue 3', 'Element UI', 'JavaScript', 'RESTful API'],
  },
  {
    date: '2024/12 - 2025/01',
    title: '企业微信新增线上离职功能',
    author: '前端开发实习',
    time: '2024/12 - 2025/01',
    content:
      '项目概述：在企微添加线上离职申请和离职审批功能。我的分工：该项目从需求分析到最后开发完成由我一人完成，主要使用到的技术栈：vue2+js+uniapp+axios，开发完后经过自测，dat，uat，已上线使用',
    techStack: ['Vue 2', 'JavaScript', 'UniApp', 'Axios'],
  },
  {
    date: '2024/11 - 2025/01',
    title: '数据采集埋点项目',
    author: '前端开发实习',
    time: '2024/11 - 2025/01',
    content:
      '项目概述：在公司项目内添加数据采集埋点功能。我的分工：该项目主要是前端技术总管开发，我的分工是配合前端总管完成部分前端页面制作，以及使用数据采集埋点功能在项目内进行埋点进行功能测试',
    techStack: ['数据埋点', '前端测试'],
  },
  {
    date: '2024/11 - 2024/12',
    title: '企业微信添加公司咨询板块需求，',
    author: '前端开发实习',
    time: '2024/11 - 2024/12',
    content:
      '项目概述：在企微新增每日资讯功能菜单，类似公众号信息列表，可查看不同业务相关的信息。我的分工：该项目主要是在企微内添加"每日资讯"这个菜单，主要使用vue3+typescript+vant-ui+z-paging来完成整个需求，完成开发后经过本地自测，在发到测试环境测试后经过dat,uat已发生产上线',
    techStack: ['Vue 3', 'TypeScript', 'Vant UI', 'z-paging'],
  },
  {
    date: '2024/10 - 2024/11',
    title: '中韩运维平台-四期需求-新建bug问题',
    author: '前端开发实习',
    time: '2024/10 - 2024/11',
    content:
      '项目概述：在我的任务模块流程内添加新的处理流程。我的角色：该项目从需求分析到最后开发完成由我一人完成，主要使用到的技术栈vue3+element-ui+js,开发完后经过自测，dat，uat，已上线使用',
    techStack: ['Vue 3', 'Element UI', 'JavaScript'],
  },
  {
    date: '2024/09 - 2024/10',
    title: '万能险账户价值结算覆历，分红实现率',
    author: '前端开发实习',
    time: '2024/09 - 2024/10',
    content:
      '项目概述：这是前端负责人开发的项目，分配给我开发添加结算覆历，分红实现率的功能页面。我的分工：该项目主要是前端技术总管负责的项目，分配给我做两个页面，主要使用vue2+uniapp+js来完成该任务',
    techStack: ['Vue 2', 'UniApp', 'JavaScript'],
  },
  {
    date: '2024/08 - 2024/09',
    title: '官微保全功能新增-减额交清',
    author: '前端开发实习',
    time: '2024/08 - 2024/09',
    content:
      '项目概述：在项目内添加新的功能页面。我的分工：该项目主要是前端技术总管负责的项目，分配给我做一个页面，主要使用vue2+uniapp+js来完成该任务',
    techStack: ['Vue 2', 'UniApp', 'JavaScript'],
  },
  {
    date: '2024/08 - 2024/09',
    title: '中韩运维平台-三期需求-项目重构',
    author: '前端开发实习',
    time: '2024/08 - 2024/09',
    content:
      '项目概述：负责对老平台管理端和H5移动端进行全面的界面重构，提升用户体验，这是我进公司参与的第一个需求，更是我职业生涯中真正意义上接触前端领域的起点，让我正式确定了前端开发的职业方向，不仅为我打开了探索界面交互逻辑、用户体验优化的大门，更让我在代码实现与业务需求的结合中，埋下了深耕前端技术栈的种子，成为我后续在前端领域持续钻研、不断精进的源动力。我的分工：在前端技术总管的帮助下负责完成老平台的任务管理模块，监控管理模块，外包管理模块，需求管理模块，角色管理模块，检查项管理模块以及h5移动端的问题上报，问题评价和问题分配模块进行ui调整和组件封装。',
    techStack: ['Vue 3', 'JavaScript', 'Element UI', 'ECharts', 'Vant', 'z-paging', 'TypeScript'],
  },
])

const getColor = (index) => {
  const colors = ['#409EFF', '#67C23A', '#E6A23C', '#F56C6C', '#909399']
  return colors[index % colors.length]
}

const getTagType = (index) => {
  const types = ['', 'success', 'warning', 'danger', 'info']
  return types[index % types.length]
}

const getTechTagType = (index) => {
  const types = ['', 'success', 'warning', 'danger', 'info']
  return types[index % types.length]
}
</script>

<style scoped>
.works-container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 30px 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.03);
}

.section-title {
  position: relative;
  font-size: 36px;
  color: #2c3e50;
  text-align: center;
  font-weight: 700;
  margin-bottom: 50px;
  letter-spacing: 1px;
  font-family: 'Microsoft YaHei', sans-serif;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #409eff, #67c23a);
  border-radius: 2px;
}

.custom-timeline {
  padding: 0;
  margin: 0;
  position: relative;
}

.custom-timeline :deep(.el-timeline-item) {
  position: relative;
  padding-bottom: 30px;
  margin-left: 28px;
}

.custom-timeline :deep(.el-timeline-item__node) {
  background-color: #fff;
  z-index: 1;
  border-width: 2px;
}

.custom-timeline :deep(.el-timeline-item__tail) {
  position: absolute;
  left: 4px;
  height: 100%;
  border-left: 2px solid #e8e8e8;
}

.custom-timeline :deep(.el-timeline-item__timestamp) {
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  display: block;
}

.work-card {
  position: relative;
  padding: 24px;
  border-radius: 12px;
  border: none;
  background: #f9fafb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  overflow: hidden;
  margin: 0;
}

.work-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  background: #fff;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.work-title {
  font-size: 20px;
  color: #111827;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
}

.custom-timeline :deep(.el-tag) {
  padding: 4px 8px;
  font-size: 13px;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.work-card:hover :deep(.el-tag) {
  opacity: 1;
}

.time-info {
  display: inline-flex;
  align-items: center;
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 12px;
  padding: 6px 12px;
  background: rgba(64, 158, 255, 0.08);
  border-radius: 20px;
}

.time-info i {
  margin-right: 6px;
  color: #409eff;
  font-size: 14px;
}

.content {
  color: #4b5563;
  line-height: 1.75;
  margin-top: 12px;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  border-left: 3px solid #67c23a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
}

.content .overview {
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px dashed #e5e7eb;
  color: #374151;
  font-weight: 500;
}

.content .contribution {
  color: #4b5563;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 10px 0;
}

.tech-tag {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease;
}

.tech-tag:hover {
  transform: translateY(-2px);
}

/* 响应式适配 - 移动端友好 */
@media (max-width: 768px) {
  .works-container {
    margin: 20px 12px;
    padding: 24px 16px;
    border-radius: 12px;
  }

  .section-title {
    font-size: 28px;
    margin-bottom: 36px;
  }

  .custom-timeline :deep(.el-timeline-item) {
    margin-left: 15px;
  }

  .custom-timeline :deep(.el-timeline-item__timestamp) {
    font-size: 12px;
  }

  .work-card {
    padding: 18px;
  }

  .work-title {
    font-size: 18px;
  }

  .time-info {
    padding: 4px 10px;
    font-size: 12px;
  }

  .content {
    padding: 12px;
    font-size: 14px;
  }
}
</style>