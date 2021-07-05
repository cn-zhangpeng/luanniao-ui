<template>
  <div>
    <div class="total-use">
      <a-statistic title="总时间（分钟）" :value="112893" style="margin-right: 50px" />
    </div>
    <div id="week-use" style="width:600px;"></div>
    <div id="year-calendar" style="width:1000px;"></div>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue';
import * as echarts from 'echarts';
import Axios from '../../utils/http-util';
import BackendUrl from '../../constants/backend-url';

const getVirtualData = (year2) => {
  let year = year2 || '2017';
  let date = Number(echarts.number.parseDate(year + '-01-01'));
  let end = Number(echarts.number.parseDate((Number(year) + 1) + '-01-01'));
  let dayTime = 3600 * 24 * 1000;
  let data = [];
  for (let time = date; time < end; time += dayTime) {
    data.push([
      echarts.format.formatTime('yyyy-MM-dd', time),
      Math.floor(Math.random() * 10000)
    ]);
  }
  return data;
};

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
  },
  yearCalendarData: {
    title: {
      top: 30,
      left: 'center',
      text: '2021年软件使用时长'
    },
    tooltip: {
      position: 'top',
      formatter: function (p) {
        return p.data[0] + ': ' + p.data[1];
      }
    },
    visualMap: {
      min: 0,
      max: 1000,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: 65
    },
    calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: ['auto', 13],
      range: 2021,
      itemStyle: {
        borderWidth: 0.5
      }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: []
    }
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

const getYearCalendar = () => {
  Axios.get(BackendUrl.software.GET_SOFTWARE_YEAR_DATE_STATISTIC, null).then(res => {
    console.log(res.data);
    res.data.forEach(function(item) {
      console.log(item);
      state.yearCalendarData.series.data.push([item.curDate, item.useTimeLength]);

      let yearCalendarChart = echarts.init(document.getElementById('year-calendar'));
      yearCalendarChart.setOption(state.yearCalendarData);
    });
  });
};

export default defineComponent({
  setup() {
    onMounted(() => {
      getWeekUseTime();
      getYearCalendar();
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
