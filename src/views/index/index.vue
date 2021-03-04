<template>
  <div class="more-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8"><project-info /></el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8"><leader-info /></el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8"><elec-info /></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'More',
  components: {},
  data() {
    return { nodeEnv: process.env.NODE_ENV };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.more-container {
  ::v-deep {
    .el-card__body {
      padding: 5px 10px;
      > div {
        height: 280px;

        > ul {
          > li {
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
