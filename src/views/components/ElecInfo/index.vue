<template>
  <el-card>
    <div slot="header" style="display: flex;align-items: center;justify-content: space-between;height: 16px;">
      <span>
        <vab-icon :icon="['fas', 'chart-line']" style="color: #1890FF;"></vab-icon>
        电表监测
      </span>
      <div>
        <el-button :type="currentIndex === 0 ? 'primary' : 'plain'" @click="btnClick(0)">实时</el-button>
        <el-button :type="currentIndex === 1 ? 'primary' : 'plain'" @click="btnClick(1)">日统计</el-button>
        <el-button :type="currentIndex === 2 ? 'primary' : 'plain'" @click="btnClick(2)">月统计</el-button>
      </div>
    </div>
    <div id="elecChart"></div>
  </el-card>
</template>

<script>
import moment from 'moment';
import { getElecInfoByMonth, getElecInfoByDay } from '@/api/component';
import { Line, Column, Area } from '@antv/g2plot';
let monthChart = null;
let currentChart = null;
let dayChart = null;
export default {
  name: 'ElecInfo',
  data() {
    return {
      lastIndex: 0,
      currentIndex: 0
    };
  },
  mounted() {
    this.fetchData();
  },
  beforeDestroy() {
    clearInterval(this.currentChartInte);
  },
  methods: {
    fetchData() {
      this.drawCurrentChart();
    },
    btnClick(index) {
      if (this.currentIndex === index) return;
      this.lastIndex = this.currentIndex;
      this.currentIndex = index;
      switch (this.lastIndex) {
        case 0:
          clearInterval(this.currentChartInte);
          currentChart.destroy();
          break;
        case 1:
          dayChart.destroy();
          break;
        case 2:
          monthChart.destroy();
          break;
        default:
          break;
      }
      switch (index) {
        case 0:
          this.drawCurrentChart();
          break;
        case 1:
          this.drawDayChart();
          break;
        case 2:
          this.drawMonthChart();
          break;
        default:
          break;
      }
    },
    drawCurrentChart() {
      const config = {
        color: ['#5B8FF9', '#5AD8A6'],
        legend: {},
        padding: 'auto',
        point: {},
        xField: 'x',
        yField: 'y',
        seriesField: 'series',
        stepType: 'hv',
        yAxis: false,
        label: {
          visible: true
        },
        lineStyle: {
          lineWidth: 2,
          shadowColor: '#ccc',
          shadowBlur: 2,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
          cursor: 'pointer'
        },
        meta: {
          y: {
            formatter: v => parseFloat(v).toFixed(1) + ' kw·h'
          }
        }
      };
      currentChart = new Line('elecChart', {
        data: this.getCurrentData(),
        ...config
      });
      currentChart.render();
      this.currentChartInte = setInterval(() => {
        const x = moment().format('HH:mm:ss'),
          y = Math.random() + 0.2,
          y2 = Math.random() + 1.2;
        const newData = currentChart.options.data.slice(2).concat(
          {
            series: '电表1',
            x,
            y
          },
          {
            series: '电表2',
            x,
            y: y2
          }
        );
        currentChart.changeData(newData);
      }, 5000);
    },
    async drawDayChart() {
      const { data } = await getElecInfoByDay();
      dayChart = new Area('elecChart', {
        data,
        padding: 'auto',
        xField: 'day',
        yField: 'value',
        xAxis: {
          tickCount: 6
        },
        areaStyle: {
          fill: 'l(270) 0:#FFFFFF 0.5:#7EC2F3 1:#5B8FF9'
        },
        meta: {
          value: {
            alias: '日用电量',
            formatter: val => `${val} MW·h`
          },
          day: {
            formatter: val => `${val} 日`
          }
        }
      });
      dayChart.render();
    },
    async drawMonthChart() {
      const { data } = await getElecInfoByMonth();
      // this.elecInfoByMonthList = data;
      monthChart = new Column('elecChart', {
        data,
        padding: 'auto',
        xField: 'month',
        yField: 'value',
        label: {},
        columnStyle: {
          fill: 'l(270) 0:#FFFFFF 0.5:#7EC2F3 1:#5B8FF9'
        },
        meta: {
          value: {
            alias: '月用电量',
            formatter: val => `${val} MW·h`
          },
          month: {
            formatter: val => `${val} 月`
          }
        }
      });
      monthChart.render();
    },
    getCurrentData() {
      const data = [];
      const time = new Date().getTime();
      for (let i = -9; i <= 0; i += 1) {
        data.push(
          {
            series: '电表1',
            x: moment(time + i * 5000).format('HH:mm:ss'),
            y: Math.random() + 0.2
          },
          {
            series: '电表2',
            x: moment(time + i * 5000).format('HH:mm:ss'),
            y: Math.random() + 1.2
          }
        );
      }
      return data;
    }
  }
};
</script>

<style lang="scss"></style>
