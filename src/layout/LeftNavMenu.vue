<template>
  <div style="width: 256px">
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      :openKeys="openKeys"
      :selectedKeys="selectedKeys"
    >
      <a-menu-item key="1">
        <PieChartOutlined />
        <span>首页</span>
      </a-menu-item>
      <a-menu-item key="2">
        <DesktopOutlined />
        <span>时间管理</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['2'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1']
    });

    watch(
      () => state.openKeys,
      (val, oldVal) => {
        state.preOpenKeys = oldVal;
      }
    );
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return {
      ...toRefs(state),
      toggleCollapsed
    };
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined
  }
});
</script>

