<template>
  <div class="chart-container animation-fade" style="animation-delay: 1.2s;">
    <el-row>
      <el-col><div id="userTypeChart" :style="{ height: height }"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import moment from 'moment';
import { getUserTypeList } from '@/api/component';
import { MultiView } from '@antv/g2plot';
export default {
  name: 'UserInfoChart',
  data() {
    return {};
  },
  computed: {
    height() {
      return this.$baseTableHeight() + 62 + 'px';
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.drawUserTypeChart();
    },
    async drawUserTypeChart() {
      const { data } = await getUserTypeList();
      const plot = new MultiView('userTypeChart', {
        tooltip: false,
        plots: [
          {
            type: 'area',
            region: { start: { x: 0, y: 0 }, end: { x: 0.5, y: 0.3 } },
            options: {
              data: data.ageColumn,
              xField: 'age',
              yField: 'value',
              seriesField: 'header',
              meta: {
                age: { range: [0, 1] }
              },
              line: {},
              point: { style: { r: 2.5 } },
              smooth: true,
              tooltip: {
                showCrosshairs: true,
                shared: true
              }
            }
          },
          {
            type: 'pie',
            region: { start: { x: 0.5, y: 0 }, end: { x: 1, y: 0.3 } },
            options: {
              data: data.pie,
              radius: 0.65,
              angleField: 'total',
              colorField: 'header',
              tooltip: {
                showMarkers: false
              },
              label: { type: 'spider', formatter: '{name} \n {percentage}' },
              interactions: [
                { type: 'element-active' },
                {
                  type: 'association-tooltip',
                  cfg: {
                    start: [
                      {
                        trigger: 'element:mousemove',
                        action: 'association:showTooltip',
                        arg: { dim: 'x', linkField: 'header' }
                      }
                    ]
                  }
                },
                {
                  type: 'association-highlight',
                  cfg: {
                    start: [
                      {
                        trigger: 'element:mousemove',
                        action: 'association:highlight',
                        arg: { linkField: 'header' }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            type: 'column',
            region: { start: { x: 0, y: 0.35 }, end: { x: 1, y: 0.6 } },
            options: {
              isGroup: true,
              data: data.column,
              legend: false,
              tooltip: {
                showMarkers: false
              },
              xField: 'type',
              yField: 'value',
              seriesField: 'header',
              label: {
                position: 'top',
                offset: 2
              },
              xAxis: {
                label: {
                  autoHide: true,
                  autoRotate: false
                }
              },
              yAxis: false
            }
          },
          {
            type: 'bar',
            region: { start: { x: 0, y: 0.65 }, end: { x: 0.95, y: 0.95 } },
            options: {
              data: data.bar,
              xField: 'count',
              yField: 'header',
              seriesField: 'type',
              isStack: true,
              tooltip: {
                shared: true,
                showCrosshairs: false,
                showMarkers: false
              },
              label: {},
              interactions: [{ type: 'active-region' }]
            }
          }
        ]
      });
      plot.render();
    }
  }
};
</script>

<style lang="scss">
.chart-container {
  padding: 20px 15px;
}
</style>
