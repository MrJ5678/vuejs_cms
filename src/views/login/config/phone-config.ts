import type { FormRules } from 'element-plus'
import { reactive } from 'vue'

export const rules = reactive<FormRules>({
  phone: [
    {
      required: true,
      message: '请输入正确的手机号',
      trigger: 'blur'
    },
    { min: 3, max: 5, message: 'Length should 11', trigger: 'blur' }
  ],
  pass: [
    {
      required: true,
      message: '请输入正确的密码',
      trigger: 'blur'
    },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ]
})
