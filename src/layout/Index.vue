<template>
  <a-layout>
    <a-layout-sider :collapsed="false" :trigger="null" collapsible>
      <LeftNavMenu></LeftNavMenu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        Header
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }" >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import LeftNavMenu from './LeftNavMenu';

export default {
  components: {
    LeftNavMenu
  },
  data() {
    return {};
  },
  methods: {

  }
};
</script>
<style>

</style>
