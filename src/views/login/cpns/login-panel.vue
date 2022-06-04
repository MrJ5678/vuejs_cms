<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="login-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><userFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="keepPass">记住密码</el-checkbox>
      <el-link :underline="false">忘记密码</el-link>
    </div>
    <el-button type="primary" :loading="false" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Cellphone, UserFilled } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: { Cellphone, UserFilled, LoginAccount, LoginPhone },
  setup() {
    const keepPass = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref<string>('account')
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(keepPass.value)
      } else {
        phoneRef.value?.loginAction()
      }
    }

    return {
      keepPass,
      handleLoginClick,
      accountRef,
      currentTab
    }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 120px;
  width: 320px;
}
.title {
  text-align: center;
}
.login-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
}

.login-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.login-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.account-control {
  display: flex;
  justify-content: space-between;
}
.el-button {
  margin-top: 10px;
  width: 100%;
}
</style>
