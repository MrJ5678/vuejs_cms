import { App } from 'vue'
import registIcons from './regist-icons'

export function globalRegister(app: App): void {
  app.use(registIcons)
}
