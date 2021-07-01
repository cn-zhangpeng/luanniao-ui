<template>
  <a-table
    class="ant-table-striped"
    size="middle"
    rowKey="softwareId"
    :columns="state.columns"
    :data-source="state.data"
    :pagination="false"
  >
    <template #action="{ record }">
      <a href="javascript:void(0)" @click="renameSoftware(record.id)">重命名</a>
      <a-divider type="vertical" />
      <a href="javascript:void(0)" @click="deleteSoftware(record.id)">删除</a>
    </template>
  </a-table>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import Axios from '../../utils/http-util';
import BackendUrl from '../../constants/backend-url';

const state = reactive({
  columns: [
    { title: '软件名称', dataIndex: 'softwareName' },
    { title: '操作', slots: { customRender: 'action' } }
  ],
  data: []
});

const getSoftware = () => {
  Axios.get(BackendUrl.software.GET_SOFTWARE_LIST, null).then(res => {
    state.data = res.data;
  });
};

const renameSoftware = id => {
  console.log('rename: ' + id);
};

const deleteSoftware = id => {
  console.log('delete: ' + id);
};

export default defineComponent({
  setup() {
    getSoftware();

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
