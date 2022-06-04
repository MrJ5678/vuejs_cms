import { App } from 'vue'
import * as ElIcons from '@element-plus/icons-vue'

export default function (app: App): void {
  // 注册全局组件
  for (const name in ElIcons) {
    app.component(name, (ElIcons as any)[name])
  }
}
