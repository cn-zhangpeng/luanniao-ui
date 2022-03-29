<template>
  <div>
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="false"
      v-model:selectedKeys="state.selectedKeys"
      @click="handleSelect"
    >
      <a-menu-item key="dashboard">
        <PieChartOutlined />
        <span>首页</span>
      </a-menu-item>
      <a-menu-item key="todolist">
        <PieChartOutlined />
        <span>任务清单</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import { defineComponent, reactive } from 'vue'
import router from '../../router'
import {
  PieChartOutlined
} from '@ant-design/icons-vue'

const state = reactive({
  selectedKeys: ['dashboard']
})

const handleSelect = ({ item, key }) => {
  console.log(key)
  router.push({ name: key })
}

export default defineComponent({
  components: {
    PieChartOutlined
  },

  setup () {
    return {
      state,

      handleSelect
    }
  }
})
</script>
