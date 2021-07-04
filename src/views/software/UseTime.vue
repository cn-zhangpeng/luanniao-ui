<template>
  <div>
    <div class="total-use">
      <a-statistic title="总时间" :value="112893" style="margin-right: 50px" />
    </div>
    <div id="week-use" style="width:600px;height:300px;">

    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue';
import * as echarts from 'echarts';
import Axios from '../../utils/http-util';
import BackendUrl from '../../constants/backend-url';

const state = reactive({
  weekUseData: {
    title: { text: '' },
    tooltip: { trigger: 'axis' },
    legend: { data: [] },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: []
    },
    yAxis: { type: 'value' },
    series: []
  }
});

const getWeekUseTime = () => {
  Axios.get(BackendUrl.software.GET_SOFTWARE_WEEK_USE_TIME, null).then(res => {
    // 图示
    state.weekUseData.legend.data = res.data.nameList;
    // x轴
    state.weekUseData.xAxis.data = res.data.dateList;
    // 数据
    res.data.useTimeDoList.forEach(function(ut) {
      state.weekUseData.series.push({
        name: ut.softwareName,
        type: 'line',
        data: ut.useTimeList
      });
    });

    let weekUseChart = echarts.init(document.getElementById('week-use'));
    weekUseChart.setOption(state.weekUseData);
  });
};

export default defineComponent({
  setup() {
    onMounted(() => {
      getWeekUseTime();
      console.log(state.weekUseData.legend.data);
    });

    return {
      state
    };
  }
});
</script>

<style scoped>
.total-use {
  width: 200px;
}
</style>
