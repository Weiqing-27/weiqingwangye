<template>
  <div class="contact-container">
    <h1 class="title">联系我</h1>
    <div class="contact-content">
      <div class="contact-info">
        <h2>联系方式</h2>
        <div class="info-item">
          <el-icon><Message /></el-icon>
          <span>邮箱：2494872720@qq.com</span>
        </div>
        <div class="info-item">
          <el-icon><Phone /></el-icon>
          <span>电话： 17520319534</span>
        </div>
        <div class="info-item">
          <el-icon><Location /></el-icon>
          <span>地址：浙江省杭州市上城区</span>
        </div>

        <div class="social-media">
          <h2>微信联系</h2>
          <div class="social-links">
            <div @click="showQrCode = true" class="social-link wechat-link">
              <el-icon><ChatDotRound /></el-icon>
              <span>微信二维码</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 二维码弹窗 -->
    <el-dialog
      v-model="showQrCode"
      title="扫码添加微信好友"
      width="400px"
      center
      align-center
      class="qrcode-dialog"
    >
      <div class="qrcode-container">
        <img src="@/assets/images/weix.jpg" alt="微信二维码" class="qrcode-image" />
        <p class="qrcode-tip">扫描上方二维码添加好友</p>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Message, Phone, Location, Share, ChatDotRound } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const formRef = ref(null)
const showQrCode = ref(false)

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped>
.contact-container {
  padding: 40px;
  max-width: 1200px;
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

.contact-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  .contact-info,
  .contact-form {
    flex: 1;
    min-width: 300px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 30px;
    backdrop-filter: blur(10px);
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #c084fc;
  }
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  .el-icon {
    margin-right: 10px;
    font-size: 20px;
    color: #f472b6;
  }
}

.social-media {
  margin-top: 30px;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  .social-link {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }

    .el-icon {
      margin-right: 8px;
      font-size: 18px;
      color: #f472b6;
    }
  }

  .wechat-link {
    background-color: rgba(85, 205, 85, 0.2);

    &:hover {
      background-color: rgba(85, 205, 85, 0.3);
    }

    .el-icon {
      color: #67c23a;
    }
  }
}

:deep(.el-form-item__label) {
  color: #fff;
}

:deep(.el-input__wrapper) {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: transparent;

  .el-input__inner {
    color: #fff;
  }
}

:deep(.el-textarea__inner) {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: transparent;
  color: #fff;
}

:deep(.el-form-item.is-error .el-input__wrapper),
:deep(.el-form-item.is-error .el-textarea__inner) {
  border-color: #f56c6c;
}

/* 二维码弹窗样式 */
.qrcode-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.qrcode-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
  border: 4px solid #67c23a;
  border-radius: 8px;
}

.qrcode-tip {
  margin-top: 15px;
  color: #606266;
  font-size: 14px;
}

:deep(.qrcode-dialog .el-dialog__header) {
  border-bottom: 1px solid #ebeef5;
  padding-bottom: 15px;
}

:deep(.qrcode-dialog .el-dialog__title) {
  font-size: 18px;
  color: #67c23a;
}

:deep(.qrcode-dialog .el-dialog) {
  border-radius: 12px;
  overflow: hidden;
}
</style>
