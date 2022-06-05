<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="collapse" class="title">vue3 + ts</span>
    </div>
    <el-menu
      default-active="2"
      :collapse="!collapse"
      class="el-menu-vertical"
      background-color="#001529"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <!-- 使用递归组件 -->
      <fold-item v-for="item in userMenus" :key="item.id" :item="item" />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import FoldItem from './fold-item.vue'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  components: { FoldItem },
  setup() {
    const store = useStore()
    let userMenus = computed(() => store.state.login.userMenus)
    return {
      userMenus
    }
  }
})
</script>

<style scoped lang="less">
.el-menu {
  border-right: none;
}
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
}
</style>
