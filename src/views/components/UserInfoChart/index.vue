<template>
  <div class="animation-fade" style="animation-delay: 1.2s;">
    人员图表
  </div>
</template>

<script>
import moment from 'moment';
// import { getElecInfoByMonth, getElecInfoByDay } from '@/api/component';
import { Line, Column, Area } from '@antv/g2plot';
export default {
  name: 'UserInfoChart',
  data() {
    return {};
  },
  computed: {
    height() {
      return this.$baseTableHeight() + 62 +'px';
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {}
  }
};
</script>

<style lang="scss">
</style>
