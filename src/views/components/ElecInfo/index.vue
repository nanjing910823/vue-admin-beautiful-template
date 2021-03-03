<template>
  <el-card>
    <div slot="header" style="display: flex;align-items: center;justify-content: space-between;height: 16px;">
      <span>
        <vab-icon :icon="['fas', 'chart-line']" style="color: #1890FF;"></vab-icon>
        电表监测
      </span>
      <div>
        <el-button :type=" currentBtn === 0? 'primary':'plain'" @click="currentClick">实时</el-button>
        <el-button :type=" currentBtn === 1? 'primary':'plain'" @click="monthClick">月</el-button>
        <el-button :type=" currentBtn ===2? 'primary':'plain'">日</el-button>
      </div>
    </div>
    <div v-show="chartType==='current'" id="elecCurrentChart"></div>
    <div v-show="chartType==='month'" id="elecMonthChart"></div>
  </el-card>
</template>

<script>
  import {
    getElecInfoByMonth
  } from '@/api/component';
  import {
    Line,
    Column
  } from '@antv/g2plot';
  export default {
    name: 'ElecInfo',
    data() {
      return {
        currentBtn: 0,
        chartType: 'current',
        elecInfoByMonthList: []
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        const {
          data
        } = await getElecInfoByMonth();
        this.elecInfoByMonthList = data;
        this.drawCurrentChart();
      },
      currentClick() {
        this.currentBtn = 0
        this.chartType = "current"
        this.drawCurrentChart()
      },
      monthClick() {
        this.currentBtn =1
        this.chartType = "month"
        this.drawMonthChart()
      },
      drawCurrentChart() {
        let that = this;
        const line = new Line('elecCurrentChart', {
          data: this.getCurrentData(),
          padding: 'auto',
          xField: 'x',
          yField: 'y',
          xAxis: {
            type: 'time',
            mask: 'HH:MM:ss',
          },
          stepType: 'vh',
        });

        line.render();
        setInterval(() => {
          const x = new Date().getTime(), // current time
            y = Math.random() + 0.2;
          const newData = line.options.data.slice(1).concat({
            x,
            y
          });
          line.changeData(newData);
        }, 2000);
      },
      drawMonthChart() {
        const columnPlot = new Column('elecMonthChart', {
          data: this.elecInfoByMonthList,
          padding: 'auto',
          xField: 'month',
          yField: 'value',
          meta: {
            value: {
              alias: '月用电量',
            },
            month: {
              formatter: (val) => `${val} 月`,
            },
          },
          xAxis: {
            label: {
              autoHide: true,
              autoRotate: false,
            },
          },
        });
        columnPlot.render();
      },
      getCurrentData() {
        const data = [];
        const time = new Date().getTime();
        for (let i = -9; i <= 0; i += 1) {
          data.push({
            x: time + i * 1000,
            y: Math.random() + 0.2,
          });
        }
        return data;
      }
    }
  };
</script>

<style lang="scss">

</style>
