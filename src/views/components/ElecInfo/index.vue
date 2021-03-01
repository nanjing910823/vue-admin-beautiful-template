<template>
  <el-card>
    <div slot="header">
      <vab-icon :icon="['fas', 'chart-line']" style="color: #1890FF;"></vab-icon>
      电表监测
      <el-button style="float: right; padding: 3px 0" type="text">详细信息>></el-button>
    </div>
    <div id="elecChart"></div>
  </el-card>
</template>

<script>
import { getElecInfoByMonth } from '@/api/component';
import { Line } from '@antv/g2plot';
export default {
  name: 'ElecInfo',
  data() {
    return {
      elecInfoByMonthList: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await getElecInfoByMonth();
      this.elecInfoByMonthList = data;
      this.drawMonthChart(data)
    },
    drawMonthChart(data) {
      const line = new Line('elecChart', {
        data,
        xField: 'month',
        yField: 'value',
        seriesField: 'category',
        xAxis: {
          type: 'time'
        },
        yAxis: {
          label: {
            formatter: v => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, s => `${s},`)
          }
        }
      });

      line.render();
    }
  }
};
</script>

<style lang="scss"></style>
