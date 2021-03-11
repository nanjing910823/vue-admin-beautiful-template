<template>
  <div class="more-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><user-info-tbl /></el-col>
    </el-row>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.more-container {
  ::v-deep {
    .el-card__body {
      padding: 5px 10px;
      > div {
         height:800px;

      }
    }
  }
}
</style>
