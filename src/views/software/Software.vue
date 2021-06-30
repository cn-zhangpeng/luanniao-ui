<template>
  <a-table
    class="ant-table-striped"
    size="middle"
    :columns="state.columns"
    :data-source="state.data"
    :pagination="false"
  >
    <template #action="{ record }">
      <a href="javascript:void(0)" @click="renameSoftware(record.key)">重命名</a>
      <a-divider type="vertical" />
      <a href="javascript:void(0)" @click="deleteSoftware(record.key)">删除</a>
    </template>
  </a-table>
</template>

<script>
import { defineComponent, reactive } from 'vue';

const state = reactive({
  columns: [
    { title: '软件名称', dataIndex: 'name' },
    { title: '操作', slots: { customRender: 'action' } }
  ],
  data: [
    {
      key: '1',
      name: 'Intellij IDEA'
    },
    {
      key: '2',
      name: 'XMind'
    },
    {
      key: '3',
      name: 'Webstorm'
    }
  ]
});

const renameSoftware = id => {
  console.log('rename: ' + id);
};

const deleteSoftware = id => {
  console.log('delete: ' + id);
};

export default defineComponent({
  setup() {
    return {
      state,

      renameSoftware,
      deleteSoftware
    };
  }
});
</script>

<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
