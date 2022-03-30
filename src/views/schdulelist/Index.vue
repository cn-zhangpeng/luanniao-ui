<template>
  <a-layout style="height:600px">
    <a-layout-sider class="menu-layout" width="50">
      <ScheduleMenu/>
    </a-layout-sider>
    <a-layout-sider class="list-layout" width="200" theme="light">
      <ul class="fixed-list">
        <li>所有</li>
        <li>今天</li>
        <li>最近7天</li>
      </ul>
      <div class="custom-list"></div>
    </a-layout-sider>
    <a-layout-sider class="task-layout" width="600" theme="light">task</a-layout-sider>
    <a-layout-content class="content-layout" theme="light">content</a-layout-content>
  </a-layout>
</template>

<script>
import { defineComponent } from 'vue'
import ScheduleMenu from './ScheduleMenu'

export default defineComponent({
  components: {
    ScheduleMenu
  },

  setup () {
    return {

    }
  }
})
</script>

<style scoped>
/* menu-layout */
.menu-layout {
  background: #F1F4FF;
  border-right: 1px solid #E6E9F3;
}

/* list-layout */
.list-layout {
  border-right: 1px solid #F3F3F3;
}
.list-layout ul.fixed-list {
  margin: 14px 0;
}
.list-layout ul.fixed-list li {
  height: 40px;
  line-height: 40px;
  background: #ECF1FC;
  margin: 0 8px;
  border-radius: 6px;
}

.task-layout {
  border-right: 1px solid #F3F3F3;
}
.content-layout {
  background: #FFF;
}
</style>
