import { createApp } from 'vue'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import { globalRegister } from './global'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from '@/store'

const app = createApp(App)
app.use(globalRegister)
app.use(router)
app.use(store)
setupStore()
app.mount('#app')
