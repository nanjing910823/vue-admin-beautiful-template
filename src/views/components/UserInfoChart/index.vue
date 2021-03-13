<template>
  <div class="more-container animation-fade" style="animation-delay: 1.2s;">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="margin-top: 30px;">
        <div id="userTypeChart"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import moment from 'moment';
  import {
    getUserTypeList
  } from '@/api/component';
  import {
    MultiView
  } from '@antv/g2plot';
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
        const {data} = await getUserTypeList();
        const plot = new MultiView('userTypeChart', {
              tooltip: false,
              plots: [
                {
                  type: 'bar',
                  region: { start: { x: 0, y: 0.5 }, end: { x: 1, y: 1 } },
                  options: {
                    data: data.bar,
                    xField: 'count',
                    yField: 'header',
                    seriesField: 'type',
                    isStack: true,
                    tooltip: {
                      shared: true,
                      showCrosshairs: false,
                      showMarkers: false,
                    },
                    label: {},
                    interactions: [{ type: 'active-region' }],
                  },
                },
                {
                  type: 'pie',
                  region: { start: { x: 0, y: 0 }, end: { x: 1, y: 0.5 } },
                  options: {
                    data: data.pie,
                    angleField: 'total',
                    colorField: 'header',
                    tooltip: {
                      showMarkers: false,
                    },
                    label: { type: 'outer', formatter: '{name} {percentage}'},
                    interactions: [
                      { type: 'element-active' },
                      {
                        type: 'association-tooltip',
                        cfg: {
                          start: [
                            {
                              trigger: 'element:mousemove',
                              action: 'association:showTooltip',
                              arg: { dim: 'x', linkField: 'header' },
                            },
                          ],
                        },
                      },
                      {
                        type: 'association-highlight',
                        cfg: {
                          start: [
                            {
                              trigger: 'element:mousemove',
                              action: 'association:highlight',
                              arg: { linkField: 'header' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            });
            plot.render();
      }
    }
  };
</script>

<style lang="scss"></style>
