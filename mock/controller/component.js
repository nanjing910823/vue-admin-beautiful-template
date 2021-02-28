const {
  mock
} = require('mockjs')

const leaderInfoList = mock({
  'dataList': [{
    'header': '建设单位',
    'contacts|2-5': [{
      'name': '@cname',
      'mobile': /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      'avatar': 'https://picsum.photos/300/600?random=1000',
      'post|1': ['现场负责人', '安全负责人'],
    }]
  }, {
    'header': '施工单位',
    'contacts|2-5': [{
      'name': '@cname',
      'mobile': /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      'avatar': 'https://picsum.photos/300/600?random=2000',
      'post|1': ['现场负责人', '项目经理'],
    }]
  }, {
    'header': '监理单位',
    'contacts|2-5': [{
      'name': '@cname',
      'mobile': /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      'avatar': 'https://picsum.photos/300/600?random=3000',
      'post|1': ['监理员', '总监'],
    }]
  }]
})

module.exports = [{
  url: '/component/getLeaderInfoList',
  type: 'get',
  response() {
    return {
      code: 200,
      msg: 'success',
      data: leaderInfoList.dataList,
    }
  },
}, ]
