<template>
  <el-tabs v-model="activeIndex" tab-position="left" :stretch="true" @tab-click="tabClick">
    <vab-query-form class="animation-fade" style="animation-delay: 1.2s;">
      <vab-query-form-left-panel>
        <el-button icon="el-icon-plus" type="success" @click="handleAdd">新增</el-button>
        <el-button icon="el-icon-delete" type="danger" @click="handleDelete">删除</el-button>
      </vab-query-form-left-panel>
      <vab-query-form-right-panel>
        <el-form ref="form" :model="queryForm" :inline="true" @submit.native.prevent>
          <el-form-item><el-input v-model="queryForm.title" placeholder="姓名模糊检索" /></el-form-item>
          <el-form-item><el-button icon="el-icon-search" type="primary" native-type="submit" @click="handleQuery">查询</el-button></el-form-item>
        </el-form>
      </vab-query-form-right-panel>
    </vab-query-form>
    <el-tab-pane v-for="(item, index) in tabDesc" :key="index">
      <span slot="label">{{ item.header }} ({{ item.count }})</span>
      <el-table :height="height" :data="tblData" style="width: 100%;">
        <el-table-column show-overflow-tooltip type="selection" width="55"></el-table-column>
        <el-table-column show-overflow-tooltip label="序号" width="50">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column sortable align="center" prop="name" label="姓名"></el-table-column>
        <el-table-column sortable align="center" prop="age" label="年龄"></el-table-column>
        <el-table-column show-overflow-tooltip align="center" prop="mobile" label="联系电话"></el-table-column>
        <el-table-column show-overflow-tooltip align="center" prop="address" label="联系地址"></el-table-column>
        <el-table-column align="center" prop="post" label="职务">
          <template slot-scope="scope">
            <el-tag v-if="index === 0" size="medium">{{ scope.row.post }}</el-tag>
            <el-tag v-if="index === 1" type="warning" size="medium">{{ scope.row.post }}</el-tag>
            <el-tag v-if="index === 2" type="success" size="medium">{{ scope.row.post }}</el-tag>
            <el-tag v-if="index === 3" type="danger" size="medium">{{ scope.row.post }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column v-if="index === 3" sortable align="center" prop="endDate" label="离职日期"></el-table-column>
        <el-table-column show-overflow-tooltip label="操作" width="180px">
          <template slot-scope="{ row }">
            <el-button type="text" @click="handleEdit(row)">编辑</el-button>
            <el-button type="text" @click="handleDelete(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="queryForm.pageNo"
        :layout="layout"
        :page-size="queryForm.pageSize"
        :total="total"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      ></el-pagination>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { getUserInfoList } from '@/api/component';
export default {
  name: 'UserInfoTbl',
  data() {
    return {
      activeIndex: 0,
      tabDesc: [],
      tblData: [],
      layout: 'total, sizes, prev, pager, next, jumper',
      total: 0,
      selectRows: '',
      queryForm: {
        pageNo: 1,
        pageSize: 20,
        title: ''
      }
    };
  },
  computed: {
    height() {
      return this.$baseTableHeight() - 50;
    }
  },
  created() {
    this.fetchData(0);
  },
  methods: {
    async fetchData(activeIndex) {
      const { data } = await getUserInfoList();
      if (this.tabDesc.length == 0) {
        data.forEach(item => {
          this.tabDesc.push({
            header: item.header,
            count: item.info.length
          });
        });
      }
      this.tblData = data[activeIndex].info;
      this.total = this.tblData.length;
    },
    tabClick() {
      this.fetchData(this.activeIndex);
    },
    setSelectRows(val) {
      this.selectRows = val;
    },
    handleAdd() {
      //this.$refs['edit'].showEdit();
    },
    handleEdit(row) {
      //this.$refs['edit'].showEdit(row);
    },
    handleDelete(row) {},
    handleSizeChange(val) {
      this.queryForm.pageSize = val;
      this.fetchData(this.activeIndex);
    },
    handleCurrentChange(val) {
      this.queryForm.pageNo = val;
      this.fetchData(this.activeIndex);
    },
    handleQuery() {
      this.queryForm.pageNo = 1;
      this.fetchData(this.activeIndex);
    }
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
