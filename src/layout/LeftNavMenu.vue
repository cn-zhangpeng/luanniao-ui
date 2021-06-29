<template>
  <div>
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="false"
      v-model:selectedKeys="selectedKeys"
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
<script lang="ts">
import {
  PieChartOutlined,
  DesktopOutlined
} from '@ant-design/icons-vue';

export default {
  components: {
    PieChartOutlined,
    DesktopOutlined
  },
  data() {
    return {
      selectedKeys: ['dashboard']
    };
  },
  methods: {
    handleSelect({item, key}) {
      console.log(key);
      this.$router.push({name: key});
    }
  }
};
</script>

