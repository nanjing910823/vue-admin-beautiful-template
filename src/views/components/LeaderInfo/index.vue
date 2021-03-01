<template>
  <el-card>
    <div slot="header">
      <vab-icon :icon="['fas', 'users']" style="color: #1890FF;"></vab-icon>
      项目负责人
    </div>
    <div>
      <el-tabs :stretch="true">
        <el-tab-pane v-for="(item, index) in dataList" :key="index" :label="item.header">
          <el-table :show-header="false" max-height="200" :data="item.contacts" style="width: 100%">
            <el-table-column align="center" prop="name" label="姓名">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="right" width="250">
                  <div slot="reference">{{ scope.row.name }}</div>
                  <div class="row-detail">
                    <el-row>
                      <el-col :span="6"><el-tag size="medium">姓名</el-tag></el-col>
                      <el-col :offset="4" :span="14">{{ scope.row.name }}</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="6"><el-tag size="medium">照片</el-tag></el-col>
                      <el-col :offset="4" :span="14">
                        <el-image style="width: 80px" :src="getImgUrl(scope.row.avatar)" :preview-src-list="getPreViewList(scope.row.avatar)"></el-image>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="6"><el-tag size="medium">身份证号</el-tag></el-col>
                      <el-col :offset="4" :span="14">{{ scope.row.idCard }}</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="6"><el-tag size="medium">联系电话</el-tag></el-col>
                      <el-col :offset="4" :span="14">{{ scope.row.mobile }}</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="6"><el-tag size="medium">职务</el-tag></el-col>
                      <el-col :offset="4" :span="14">{{ scope.row.post }}</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="6"><el-tag size="medium">工作年限</el-tag></el-col>
                      <el-col :offset="4" :span="14">{{ scope.row.workYear }} 年</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="6"><el-tag size="medium">从业资格证</el-tag></el-col>
                      <el-col :offset="4" :span="14">
                        <el-image style="width: 150px" :src="getImgUrl(scope.row.cert)" :preview-src-list="getPreViewList(scope.row.cert)"></el-image>
                      </el-col>
                    </el-row>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="mobile" label="联系电话"></el-table-column>
            <el-table-column align="center" prop="post" label="职务">
              <template slot-scope="scope">
                <el-tag :effect="scope.$index === 0 ? 'light' : 'plain'" size="medium">{{ scope.row.post }}</el-tag>
                <!-- <el-tag :type="scope.$index === 0 ? 'danger' : ''" :effect="scope.$index === 0 ? '' : 'plain'" size="medium">{{ scope.row.post }}</el-tag> -->
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-card>
</template>

<script>
import { getLeaderInfoList } from '@/api/component';
export default {
  name: 'LeaderInfo',
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
      const { data } = await getLeaderInfoList();
      this.dataList = data;
    },
    getImgUrl(src) {
      return require('/static/' + src);
    },
    getPreViewList(src) {
      let preViewList = [];
      preViewList.push(require('/static/' + src));
      return preViewList;
    }
  }
};
</script>

<style lang="scss">
.row-detail {
  > div {
    display: flex;
    align-items: center;
    padding: 10px 0px;

    > div:first-child {
      text-align: center;
    }
  }
}

.el-tag {
  width: 80px;
}
</style>
