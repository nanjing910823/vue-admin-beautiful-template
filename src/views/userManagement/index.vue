<template>
  <div class="more-container">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="14"><user-info-tbl /></el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="10"><user-info-chart /></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
