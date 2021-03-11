<template>
  <el-card>
    <div slot="header">
      <vab-icon :icon="['fas', 'users']" style="color: #1890FF;"></vab-icon>
      劳务人员列表
    </div>
    <div>
      <el-tabs tab-position="left" :stretch="true">
        <el-tab-pane v-for="(item, index) in dataList" :key="index">
          <span slot="label">{{item.header}} ({{item.info.length}})</span>
          <el-table :data="item.info" max-height="800" style="width: 100%;">
            <el-table-column sortable align="center" prop="name" label="姓名"></el-table-column>
            <el-table-column align="center" prop="mobile" label="联系电话"></el-table-column>
            <el-table-column align="center" prop="address" label="联系地址"></el-table-column>
            <el-table-column align="center" prop="post" label="职务">
              <template slot-scope="scope">
                <el-tag v-if="index === 0" size="medium">{{ scope.row.post }}</el-tag>
                <el-tag v-if="index === 1" type="warning" size="medium">{{ scope.row.post }}</el-tag>
                <el-tag v-if="index === 2" type="success" size="medium">{{ scope.row.post }}</el-tag>
                <el-tag v-if="index === 3" type="danger" size="medium">{{ scope.row.post }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column v-if="index !== 3" sortable align="center" prop="startDate" label="入职日期"></el-table-column>
            <el-table-column v-if="index === 3" sortable align="center" prop="endDate" label="离职日期"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-card>
</template>

<script>
  import { getUserInfoList } from '@/api/component';
  export default {
    name: 'UserInfoTbl',
    data() {
      return {
        dataList: []
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        const {
          data
        } = await getUserInfoList();
        this.dataList = data;
      },
      /* getImgUrl(src) {
         return require('/static/' + src);
       },
       getPreViewList(src) {
         let preViewList = [];
         preViewList.push(require('/static/' + src));
         return preViewList;
       } */
    }
  };
</script>

<style lang="scss" scoped>
  .el-tag {
    width: 80px;
  }
</style>
