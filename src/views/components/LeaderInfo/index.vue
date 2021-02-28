<template>
  <el-card>
    <div slot="header">
      <vab-icon :icon="['fas', 'users']" style="color: #1890FF;"></vab-icon>
      项目负责人
    </div>
    <div>
      <el-tabs :stretch="true">
        <el-tab-pane v-for="(item,index) in dataList" :key="index" :label="item.header">
          <div v-for="(contact,idx) in item.contacts" :key="idx">
            <div v-if="idx === 0" class="leader-detail">
              <el-row class="detail-row">
                <div>
                  <img :alt="contact.name" :src="contact.avatar" />
                </div>
                <div>
                  {{contact.name}}
                </div>
                <div>
                  {{contact.mobile}}
                </div>
              </el-row>
            </div>
            <div v-else>2</div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-card>
</template>

<script>
  import {
    getLeaderInfoList
  } from '@/api/component'
  export default {
    name: 'LeaderInfo',
    data() {
      return {
        dataList: []
      };
    },
    created() {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        const {
          data
        } = await getLeaderInfoList()
        this.dataList = data
      },
    },
  };
</script>

<style lang="scss">
  .leader-detail {
    .detail-row {
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: 100px;
        height: 120px;
        overflow: hidden
      }
    }
  }
</style>
