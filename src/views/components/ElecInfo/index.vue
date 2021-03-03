<template>
  <el-card>
    <div slot="header" style="display: flex;align-items: center;justify-content: space-between;height: 16px;">
      <span>
        <vab-icon :icon="['fas', 'chart-line']" style="color: #1890FF;"></vab-icon>
        电表监测
      </span>
      <div>
        <el-button :type=" currentIndex === 0 ? 'primary':'plain'" @click="currentClick">实时</el-button>
        <el-button :type=" currentIndex === 1 ? 'primary':'plain'" @click="monthClick">月</el-button>
        <el-button :type=" currentIndex === 2 ? 'primary':'plain'">日</el-button>
      </div>
    </div>
    <div id="elecChart"></div>
    <!-- <div v-show="chartType==='current'" id="elecCurrentChart"></div>
    <div v-show="chartType==='month'" id="elecMonthChart"></div> -->
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
  let line = null;
  let columnPlot = null;
  export default {
    name: 'ElecInfo',
    data() {
      return {
        currentIndex: 0,
        chartType: 'current',
        elecInfoByMonthList: [],
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
       if (this.currentIndex == 0) return;
        columnPlot.destroy()
        this.currentIndex = 0
        this.chartType = "current"
        this.drawCurrentChart()
      },
      monthClick() {
       if (this.currentIndex == 1) return;
       clearInterval(this._wzlFetchInte)
        line.destroy();
        this.currentIndex = 1
        this.chartType = "month"
        this.drawMonthChart()
      },
      drawCurrentChart() {
        line = new Line('elecChart', {
          data: this.getCurrentData(),
          padding: 'auto',
          xField: 'x',
          yField: 'y',
          xAxis: {
            type: 'time',
            mask: 'HH:MM:ss',
          },
          stepType: 'hv',
        });

        line.render();
        this._wzlFetchInte = setInterval(()=>{
          const x = new Date().getTime(),
            y = Math.random() + 0.2;
          const newData = line.options.data.slice(1).concat({
            x,
            y
          });
          line.changeData(newData);
        }, 2000);
      },
      drawMonthChart() {
        columnPlot = new Column('elecChart', {
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
        return data
      }
    }
  };
</script>

<style lang="scss">

</style>
