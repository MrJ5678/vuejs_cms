<template>
  <!--  如果有孩子，就渲染成sub-menu（折叠item）-->
  <template v-if="item.type === 1">
    <el-sub-menu :index="item.id + ''">
      <template #title>
        <el-icon v-if="item.icon" :class="item.icon">
          <component :is="item.icon.substr(8)" />
        </el-icon>
        <span>{{ item.name }}</span>
      </template>
      <fold-item v-for="i in item.children" :key="i.id" :item="i"></fold-item>
    </el-sub-menu>
  </template>
  <!--  否则就渲染成menu-item-->
  <template v-else>
    <el-menu-item :index="item.id + ''" @click="handleMenuItemClick(item)">
      <template #title>
        <el-icon v-if="item.icon" :class="item.icon">
          <component :is="item.icon.substr(8)" />
        </el-icon>
        <span>{{ item.name }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import FoldItem from './fold-item.vue'

defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
const router = useRouter()
const handleMenuItemClick = (item: any) => {
  router.push({
    path: item.url ?? '/not-found'
  })
}
</script>

<style lang="less" scoped>
.el-menu {
  border-right: none;
}
// 目录
.el-submenu {
  background-color: #001529 !important;
  // 二级菜单 ( 默认背景 )
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135 !important;
  }
}
::v-deep .el-submenu__title {
  background-color: #001529 !important;
}
// hover 高亮
.el-menu-item:hover {
  color: #fff !important; // 菜单
  background-color: #174f86;
}
.el-menu-item.is-active {
  color: #fff !important;
  background-color: #0a60bd !important;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
