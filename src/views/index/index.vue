<template>
  <div class="more-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8"><project-info /></el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8"><leader-info /></el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="8"><elec-info /></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
        <el-card>
          <div slot="header">
            PRO版
            <el-button style="float: right; padding: 3px 0" type="text">￥699</el-button>
          </div>
          <div>
            <ul>
              <li>
                演示地址：
                <a target="_blank" href="https://chu1204505056.gitee.io/vue-admin-beautiful-pro">点我</a>
              </li>
              <li>PRO独立版本与开源版本不同</li>
              <li>无版权限制，无需额外配置，拿来即用，支持权限精确到权限点，按钮级权限取反，支持代码一键生成</li>
              <li>免费加入vue-admin-beautifl github团队</li>
              <li>提供25种布局主题搭配</li>
              <li>图标使用方式大为简化</li>
              <li>支持国际化语言包、中英文无缝切换</li>
            </ul>
          </div>
        </el-card>
      </el-col>
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
