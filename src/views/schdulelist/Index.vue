<template>
  <a-layout style="height:600px">
    <a-layout-sider class="menu-layout" width="50">
      <ScheduleMenu/>
    </a-layout-sider>
    <a-layout-sider class="list-layout" width="200" theme="light">
      <div class="fixed-list">
        <a-menu
          :default-selected-keys="['1']"
          mode="inline"
          @click="handleClick"
        >
          <a-menu-item key="1">
            <icon>
              <template #component>
                <svg t="1648705008267" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="4549" width="18" height="18"><path d="M846.027 806.867v-584.35H422.531L325.384 99.676H64.21v153.511h0.002v553.68h781.815z m-725.162-523.01h668.508v461.669H120.865V283.857z" fill="#a3a3a3" p-id="4550"></path><path d="M902.68 370.968v495.91H268.164v61.341h691.169V370.968z" fill="#6f7175" p-id="4551"></path></svg>
              </template>
            </icon>
            <span>所有</span>
          </a-menu-item>
          <a-menu-item key="2">
            <icon>
              <template #component>
                <svg t="1648705077406" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="4857" width="18" height="18"><path d="M832 128h-64V64h-64v64H320V64h-64v64h-64a64.19 64.19 0 0 0-64 64v640a64.19 64.19 0 0 0 64 64h640a64.19 64.19 0 0 0 64-64V192a64.19 64.19 0 0 0-64-64z m0 704H192V256h640z" p-id="4858" fill="#a3a3a3"></path><path d="M256 320h224v192H256z" p-id="4859" fill="#6f7175"></path></svg>
              </template>
            </icon>
            <span>今天</span>
          </a-menu-item>
          <a-menu-item key="3">
            <icon>
              <template #component>
                <svg t="1648705141694" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="5223" data-spm-anchor-id="a313x.7781069.0.i14" width="20" height="20"><path d="M781.71 854.5H242.29c-28.32 0-51.37-23.04-51.37-51.37V425.75h642.17v377.37c-0.01 28.34-23.06 51.38-51.38 51.38zM242.29 477.13v326h539.45l-0.03-326H242.29z" p-id="5224" fill="#a3a3a3"></path><path d="M833.08 477.13H190.92V316.87c0-28.33 23.05-51.37 51.37-51.37h539.42c28.32 0 51.37 23.04 51.37 51.37v160.26z m-590.79-51.38h539.42V316.87H242.29v108.88z" p-id="5225" fill="#a3a3a3"></path><path d="M327.38 393.68c-14.2 0-25.69-11.5-25.69-25.69v-172.8c0-14.19 11.49-25.69 25.69-25.69 14.2 0 25.69 11.5 25.69 25.69V368c-0.01 14.18-11.5 25.68-25.69 25.68zM696.62 393.68c-14.2 0-25.69-11.5-25.69-25.69v-172.8c0-14.19 11.49-25.69 25.69-25.69s25.69 11.5 25.69 25.69V368c0 14.18-11.49 25.68-25.69 25.68z" p-id="5226" fill="#a3a3a3"></path><path d="M488.8 769.95c-3.04 0-6.15-0.55-9.16-1.69-13.24-5.05-19.89-19.89-14.85-33.15l66.07-173.42H429.3c-14.2 0-25.69-11.5-25.69-25.69 0-14.19 11.49-25.69 25.69-25.69h138.84c8.45 0 16.36 4.15 21.15 11.11 4.79 6.96 5.87 15.83 2.86 23.72L512.8 753.4c-3.91 10.24-13.67 16.55-24 16.55z" p-id="5227" fill="#6f7175"></path></svg>
              </template>
            </icon>
            <span>最近7天</span>
          </a-menu-item>
        </a-menu>
      </div>
      <div class="custom-list"></div>
    </a-layout-sider>
    <a-layout-sider class="task-layout" width="600" theme="light">task</a-layout-sider>
    <a-layout-content class="content-layout" theme="light">content</a-layout-content>
  </a-layout>
</template>

<script>
import { defineComponent } from 'vue'
import ScheduleMenu from './ScheduleMenu'
import Icon, {} from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    ScheduleMenu,

    Icon
  },

  setup () {
    return {

    }
  }
})
</script>

<style lang="scss" scoped>
/* menu-layout */
.menu-layout {
  background: #F1F4FF;
  border-right: 1px solid #E6E9F3;
}

/* list-layout */
.list-layout {
  border-right: 1px solid #F3F3F3;
  .fixed-list {
    margin-top: 8px;
    :deep(.ant-menu-item:after) {
      border: none !important;
    }
    :deep(.ant-menu-item-selected) {
      background-color: #EDF1FB !important;

    }
  }
}

.task-layout {
  border-right: 1px solid #F3F3F3;
}
.content-layout {
  background: #FFF;
}
</style>
