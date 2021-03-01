<template>
  <el-card>
    <div slot="header">
      <vab-icon :icon="['fas', 'info-circle']" style="color: #1890FF;"></vab-icon>
      项目介绍
      <el-button style="float: right; padding: 3px 0" type="text">详细信息>></el-button>
    </div>
    <div class="detail">
      <el-row>
        <el-col :span="4"><el-tag size="medium">项目名称</el-tag></el-col>
        <el-col :offset="2" :span="18"><span class="desc">中央商务区核心区配套学校（含邻里中心）</span></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><el-tag size="medium">建设地址</el-tag></el-col>
        <el-col :offset="2" :span="18"><span class="desc">南京市江北新区，东至横江大道，南至纵六路，西至横三路，北纵七路</span></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><el-tag size="medium">建设单位</el-tag></el-col>
        <el-col :offset="2" :span="18"><span class="desc">南京江北新区中央商务区开发运营有限公司</span></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><el-tag size="medium">监理单位</el-tag></el-col>
        <el-col :offset="2" :span="18"><span class="desc">南京江城工程管理有限公司</span></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><el-tag size="medium">EPC单位</el-tag></el-col>
        <el-col :offset="2" :span="18">
          <ul style="list-style-type: none;padding-inline-start: 0px">
            <li>江苏双楼建设集团有限公司</li>
            <li>江苏省建筑设计研究院有限公司</li>
          </ul>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><el-tag size="medium">施工日期</el-tag></el-col>
        <el-col :offset="2" :span="18"><span class="desc">2020年4月-2021年4月15日</span></el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'ProjectInfo'
};
</script>

<style lang="scss">
.detail {
  > div {
    display: flex;
    align-items: center;
    padding: 5px 0px;

    > div:first-child {
      text-align: center;
    }
  }
}
</style>
