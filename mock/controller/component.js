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
      'cert|1': ['licence01.jpg', 'licence02.jpg', 'licence03.jpg'],
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
      'cert|1': ['licence01.jpg', 'licence02.jpg', 'licence03.jpg'],
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
      'cert|1': ['licence01.jpg', 'licence02.jpg', 'licence03.jpg'],
    }]
  }]
})

const elecInfoByMonthList = [{
    "month": "2020/04",
    "value": 0,
    "category": "电表1"
  },
  {
    "month": "2020/04",
    "value": 0,
    "category": "电表2"
  },
  {
    "month": "2020/04",
    "value": 0,
    "category": "电表3"
  },
  {
    "month": "2020/05",
    "value": 880,
    "category": "电表1"
  },
  {
    "month": "2020/05",
    "value": 650,
    "category": "电表2"
  },
  {
    "month": "2020/05",
    "value": 1000,
    "category": "电表3"
  },
  {
    "month": "2020/06",
    "value": 1200,
    "category": "电表1"
  },
  {
    "month": "2020/06",
    "value": 800,
    "category": "电表2"
  },
  {
    "month": "2020/06",
    "value": 2120,
    "category": "电表3"
  },
  {
    "month": "2020/07",
    "value": 1520,
    "category": "电表1"
  },
  {
    "month": "2020/07",
    "value": 980,
    "category": "电表2"
  },
  {
    "month": "2020/07",
    "value": 2520,
    "category": "电表3"
  },
  {
    "month": "2020/08",
    "value": 1820,
    "category": "电表1"
  },
  {
    "month": "2020/08",
    "value": 1360,
    "category": "电表2"
  },
  {
    "month": "2020/08",
    "value": 2960,
    "category": "电表3"
  },
  {
    "month": "2020/09",
    "value": 2030,
    "category": "电表1"
  },
  {
    "month": "2020/09",
    "value": 1460,
    "category": "电表2"
  },
  {
    "month": "2020/09",
    "value": 3100,
    "category": "电表3"
  },
  {
    "month": "2020/10",
    "value": 2050,
    "category": "电表1"
  },
  {
    "month": "2020/10",
    "value": 1560,
    "category": "电表2"
  },
  {
    "month": "2020/10",
    "value": 3510,
    "category": "电表3"
  },
]

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
}, {
  url: '/component/getElecInfoByMonth',
  type: 'get',
  response() {
    return {
      code: 200,
      msg: 'success',
      data: elecInfoByMonthList,
    }
  },
}, ]
