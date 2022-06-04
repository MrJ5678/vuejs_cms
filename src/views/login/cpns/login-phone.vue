<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    class="phone-ruleForm"
    label-width="66px"
  >
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="ruleForm.phone" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="验证码" prop="password">
      <div class="code">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
        <el-button :loading="false" type="primary">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import type { FormInstance } from 'element-plus'
import { rules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const store = useStore()
    const ruleForm = reactive({
      phone: '18571850451',
      password: ''
    })
    const ruleFormRef = ref<FormInstance>()
    const loginAction = () => {
      store.dispatch('login/phoneLoginAction', { ...ruleForm })
    }

    return {
      ruleForm,
      rules,
      ruleFormRef,
      loginAction
    }
  }
})
</script>

<style lang="less">
.phone-ruleForm .code {
  display: flex;
  button {
    margin-left: 6px;
  }
}
.el-form .el-form-item:first-child {
  margin-top: 10px;
}

.el-form-item .el-form-item__label {
  justify-content: flex-start;
}
</style>
