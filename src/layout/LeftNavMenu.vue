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
      <a-sub-menu key="software" title="软件">
        <a-menu-item key="software">
          <DesktopOutlined />
          <span>软件管理</span>
        </a-menu-item>
        <a-menu-item key="software-use-time">
          <DesktopOutlined />
          <span>时间统计</span>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import { defineComponent, reactive } from 'vue'
import router from '../router/index'
import {
  PieChartOutlined,
  DesktopOutlined
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
    PieChartOutlined,
    DesktopOutlined
  },

  setup () {
    return {
      state,

      handleSelect
    }
  }
})
</script>
