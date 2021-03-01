const {
  mock
} = require('mockjs')

const leaderInfoList = mock({
  'dataList': [{
    'header': '建设单位',
    'contacts|2-4': [{
      'name': '@cname',
      'mobile': /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      'idCard': '@id',
      'workYear|1-10': 1,
      'avatar|1': ['dm01.jpg', 'dm02.jpg', 'dm03.jpg', 'dm04.jpg', 'dm05.jpg', 'dm06.jpg'],
      'post|1': ['现场负责人', '安全负责人'],
      'cert|1':['licence01.jpg', 'licence02.jpg', 'licence03.jpg'],
    }]
  }, {
    'header': '施工单位',
    'contacts|2-5': [{
      'name': '@cname',
      'mobile': /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      'idCard': '@id',
      'workYear|1-10': 1,
      'avatar|1': ['dm01.jpg', 'dm02.jpg', 'dm03.jpg', 'dm04.jpg', 'dm05.jpg', 'dm06.jpg'],
      'post|1': ['现场负责人', '项目经理'],
      'cert|1':['licence01.jpg', 'licence02.jpg', 'licence03.jpg'],
    }]
  }, {
    'header': '监理单位',
    'contacts|2-5': [{
      'name': '@cname',
      'mobile': /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      'idCard': '@id',
      'workYear|1-10': 1,
      'avatar|1': ['dm01.jpg', 'dm02.jpg', 'dm03.jpg', 'dm04.jpg', 'dm05.jpg', 'dm06.jpg'],
      'post|1': ['监理员', '总监'],
      'cert|1':['licence01.jpg', 'licence02.jpg', 'licence03.jpg'],
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
