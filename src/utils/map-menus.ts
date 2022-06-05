import { RouteRecordRaw } from 'vue-router'

const allRoutes: RouteRecordRaw[] = []
const routes: RouteRecordRaw[] = []

export const mapMenusToRoutes = (userMenus: any[]): RouteRecordRaw[] => {
  // 加载默认所有的 routes
  getAllRoutes()
  // 根据菜单获取需要添加的 routes
  _recursGetRoute(userMenus)

  // console.log(routes)
  return routes
}

const getAllRoutes = () => {
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.slice(1))
    allRoutes.push(route.default)
  })
  // console.log(allRoutes)
}

const _recursGetRoute = (menus: any[]) => {
  for (const menu of menus) {
    if (menu.type === 1) {
      // 继续递归
      // console.log(menu)
      _recursGetRoute(menu.children)
    } else {
      // 不可再递归
      // console.log(menu)
      const route = allRoutes.find((route) => route.path === menu.url)
      // console.log(route)
      if (route) routes.push(route)
    }
  }
}
