<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    class="demo-ruleForm"
    label-width="60px"
  >
    <el-form-item label="账号" prop="name">
      <el-input v-model="ruleForm.name" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="ruleForm.password"
        type="password"
        autocomplete="off"
        show-password
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const ruleForm = reactive({
      name: localCache.getCache('name') ?? 'corderwhy',
      password: localCache.getCache('password') ?? '123456'
    })
    const ruleFormRef = ref<FormInstance>()
    const loginAction = (keepPass: boolean) => {
      ruleFormRef.value?.validate((valid) => {
        if (!valid) {
          console.log('not valid')
        } else {
          // 验证通过
          // 是否需要验证密码
          if (keepPass) {
            // 本地缓存
            localCache.setCache('name', ruleForm.name)
            localCache.setCache('password', ruleForm.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 登录验证
          store.dispatch('login/accountLoginAction', { ...ruleForm })
        }
      })
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

<style lang="less" scoped>
.el-form .el-form-item:first-child {
  margin-top: 10px;
}
</style>
