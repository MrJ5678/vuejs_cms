<template>
  <div class="nav-header">
    <div class="left">
      <el-icon class="icon" @click="handleIconClick">
        <component v-bind:is="isFold ? 'fold' : 'expand'" />
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleIconClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleIconClick
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  .left {
    .icon {
      font-size: 30px;
      cursor: pointer;
    }
  }
}
</style>
