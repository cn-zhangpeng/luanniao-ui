<template>
  <a-layout style="height:600px">
    <a-layout-sider class="menu-layout" width="50">
      <ScheduleMenu/>
    </a-layout-sider>
    <a-layout-sider class="list-layout" width="240" theme="light">
      <div class="fixed-list">
        <a-menu
          mode="inline"
          class="menu"
          v-model:selectedKeys=state.fixedListSelectedKey
          @click="handleClick"
        >
          <a-menu-item key="1">
            <icon>
              <template #component>
                <svg t="1648705008267" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="4549" width="16" height="16"><path d="M846.027 806.867v-584.35H422.531L325.384 99.676H64.21v153.511h0.002v553.68h781.815z m-725.162-523.01h668.508v461.669H120.865V283.857z" fill="#A3A3A3" p-id="4550"></path><path d="M902.68 370.968v495.91H268.164v61.341h691.169V370.968z" fill="#A3A3A3" p-id="4551"></path></svg>
              </template>
            </icon>
            <span>所有</span>
          </a-menu-item>
          <a-menu-item key="2">
            <icon>
              <template #component>
                <svg t="1648885460787" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2019" width="16" height="16"><path d="M753.6 222.4h24c19.2 0 33.6-14.4 33.6-32V57.6c0-19.2-14.4-33.6-33.6-33.6h-24c-19.2 0-33.6 14.4-33.6 33.6v131.2c0 19.2 14.4 33.6 33.6 33.6zM251.2 222.4h24c19.2 0 33.6-14.4 33.6-32V57.6c0-19.2-14.4-33.6-33.6-33.6h-24c-19.2 0-33.6 14.4-33.6 33.6v131.2c0 19.2 14.4 33.6 33.6 33.6z" fill="#A3A3A3" p-id="2020"></path><path d="M928 134.4h-68.8v56c0 41.6-33.6 76.8-80 76.8h-24c-43.2 0-80-33.6-80-76.8V134.4h-320v56c0 41.6-33.6 76.8-80 76.8h-24c-43.2 0-80-33.6-80-76.8V134.4H105.6c-38.4 0-68.8 28.8-68.8 67.2v731.2c0 38.4 30.4 67.2 68.8 67.2h820.8c38.4 0 68.8-28.8 70.4-67.2V201.6c0-38.4-30.4-67.2-68.8-67.2zM105.6 932.8V355.2h820.8s0 577.6 1.6 577.6H105.6z" fill="#A3A3A3" p-id="2021"></path><path d="M500.8 548.8l-49.6 33.6c14.4 16 33.6 41.6 60.8 75.2l54.4-35.2c-19.2-22.4-40-46.4-65.6-73.6z" fill="#A3A3A3" p-id="2022"></path><path d="M553.6 451.2l14.4-14.4v-1.6H480c-51.2 68.8-118.4 121.6-196.8 155.2 11.2 12.8 25.6 28.8 41.6 54.4 80-40 142.4-89.6 188.8-148.8 43.2 59.2 102.4 107.2 180.8 144 14.4-19.2 27.2-35.2 41.6-52.8-76.8-30.4-137.6-76.8-182.4-136zM339.2 716.8h246.4c-30.4 43.2-62.4 81.6-94.4 116.8l60.8 33.6c49.6-56 89.6-108.8 123.2-155.2v-54.4h-336v59.2z" fill="#A3A3A3" p-id="2023"></path></svg>
              </template>
            </icon>
            <span>今天</span>
          </a-menu-item>
          <a-menu-item key="3">
            <icon>
              <template #component>
                <svg t="1648890566050" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2256" width="16" height="16"><path d="M928 134.4h-68.8v56c0 41.6-33.6 76.8-80 76.8h-24c-43.2 0-80-33.6-80-76.8V134.4h-320v56c0 41.6-33.6 76.8-80 76.8h-24c-43.2 0-80-33.6-80-76.8V134.4H104c-38.4 0-68.8 28.8-68.8 67.2v731.2c0 38.4 30.4 67.2 68.8 67.2h820.8c38.4 0 68.8-28.8 70.4-67.2V201.6c1.6-38.4-28.8-67.2-67.2-67.2zM104 932.8V355.2h820.8s0 577.6 1.6 577.6H104z" fill="#A3A3A3" p-id="2257"></path><path d="M753.6 222.4h24c19.2 0 33.6-14.4 33.6-32V57.6c0-19.2-14.4-33.6-33.6-33.6h-24c-19.2 0-33.6 14.4-33.6 33.6v131.2c-1.6 19.2 14.4 33.6 33.6 33.6zM251.2 222.4h24c19.2 0 33.6-14.4 33.6-32V57.6c0-19.2-14.4-33.6-33.6-33.6h-24c-19.2 0-33.6 14.4-33.6 33.6v131.2c-1.6 19.2 14.4 33.6 33.6 33.6zM611.2 673.6H420.8v137.6h56v-20.8h136v-116.8z m-56 76.8h-76.8v-35.2h76.8v35.2z" fill="#A3A3A3" p-id="2258"></path><path d="M323.2 456v190.4c1.6 83.2-12.8 144-41.6 184 17.6 12.8 33.6 27.2 51.2 41.6 33.6-49.6 51.2-123.2 51.2-219.2v-145.6h100.8v28.8h-76.8v41.6h76.8v28.8h-89.6v40h236.8v-41.6H544V576h76.8v-41.6H544v-28.8h99.2v270.4c0 8 0 16-4.8 22.4-1.6 6.4-14.4 11.2-36.8 11.2-14.4 0-32 0-44.8-1.6 4.8 19.2 8 38.4 12.8 59.2H640c20.8-1.6 38.4-8 49.6-22.4 11.2-12.8 17.6-35.2 17.6-62.4V456h-384z" fill="#A3A3A3" p-id="2259"></path></svg>
              </template>
            </icon>
            <span>最近7天</span>
          </a-menu-item>
        </a-menu>
      </div>
      <div class="custom-list">
        <a-menu
          mode="inline"
          class="menu"
          @click="handleClick"
        >
          <a-menu-item key="1">
            <icon>
              <template #component>
                <svg t="1648890660548" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2624" width="14" height="14"><path d="M960 576H64c-35.2 0-64-28.8-64-64s28.8-64 64-64h896c35.2 0 64 28.8 64 64s-28.8 64-64 64z m0-376H64c-35.2 0-64-28.8-64-64s28.8-64 64-64h896c35.2 0 64 28.8 64 64s-28.8 64-64 64zM64 824h896c35.2 0 64 28.8 64 64s-28.8 64-64 64H64c-35.2 0-64-28.8-64-64s28.8-64 64-64z" fill="#A3A3A3" p-id="2625"></path></svg>
              </template>
            </icon>
            <span>所有</span>
          </a-menu-item>
          <a-menu-item key="2">
            <icon>
              <template #component>
                <svg t="1648890660548" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2624" width="14" height="14"><path d="M960 576H64c-35.2 0-64-28.8-64-64s28.8-64 64-64h896c35.2 0 64 28.8 64 64s-28.8 64-64 64z m0-376H64c-35.2 0-64-28.8-64-64s28.8-64 64-64h896c35.2 0 64 28.8 64 64s-28.8 64-64 64zM64 824h896c35.2 0 64 28.8 64 64s-28.8 64-64 64H64c-35.2 0-64-28.8-64-64s28.8-64 64-64z" fill="#A3A3A3" p-id="2625"></path></svg>
              </template>
            </icon>
            <span>今天</span>
          </a-menu-item>
          <a-menu-item key="3">
            <icon>
              <template #component>
                <svg t="1648890660548" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2624" width="14" height="14"><path d="M960 576H64c-35.2 0-64-28.8-64-64s28.8-64 64-64h896c35.2 0 64 28.8 64 64s-28.8 64-64 64z m0-376H64c-35.2 0-64-28.8-64-64s28.8-64 64-64h896c35.2 0 64 28.8 64 64s-28.8 64-64 64zM64 824h896c35.2 0 64 28.8 64 64s-28.8 64-64 64H64c-35.2 0-64-28.8-64-64s28.8-64 64-64z" fill="#A3A3A3" p-id="2625"></path></svg>
              </template>
            </icon>
            <span>最近7天</span>
          </a-menu-item>
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout-sider class="task-layout" width="600" theme="light">task</a-layout-sider>
    <a-layout-content class="content-layout" theme="light">content</a-layout-content>
  </a-layout>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import ScheduleMenu from './ScheduleMenu'
import Icon, {} from '@ant-design/icons-vue'

const state = reactive({
  fixedListSelectedKey: ['1']
})

export default defineComponent({
  components: {
    ScheduleMenu,

    Icon
  },

  setup () {
    return {
      state
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
  padding: 0 8px;
  .fixed-list {
    padding: 14px 0;
    border-bottom: 1px solid #F3F3F3;
  }
  .custom-list {
    padding: 14px 0;
  }
  /** cover ant design style */
  :deep(.ant-menu-inline) {
    border: none;
  }
  :deep(.ant-menu-item) {
    color: #191919;
    border-radius: 6px;
    padding: 0 !important;
  }
  :deep(.ant-menu-item:after) {
    border: none;
  }
  :deep(.ant-menu-item:active) {
    background: #F6F6F6;
  }
  :deep(.ant-menu-item:hover) {
    color: #191919;
    background: #F6F8F6;
  }
  :deep(.ant-menu-item-selected) {
    background-color: #EDF1FB !important;
  }
  :deep(.ant-menu-title-content) {
    padding: 12px;
  }
}

.task-layout {
  border-right: 1px solid #F3F3F3;
}
.content-layout {
  background: #FFF;
}
</style>
