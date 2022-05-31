import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: 'login'*/ '@/views/login/index.vue')
  },
  {
    path: '/main',
    component: () =>
      import(/* webpackChunkName: 'login'*/ '@/views/main/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
