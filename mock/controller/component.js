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

const elecInfoByMonthList = mock({
  'dataList|12':[{
    'month|+1':["1","2","3","4","5","6","7","8","9","10","11","12"],
    'value|50-150':50
  }]
})

const elecInfoByDayList = mock({
  'dataList|31':[{
    'day|+1':["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
    'value|5-20.1':5
  }]
})

/* const elecInfoByMonthList = [
  { month: '1', value: 1078 },
  { month: '2', value: 1216 },
  { month: '3', value: 758 },
  { month: '4', value: 623 },
  { month: '5', value: 319 },
  { month: '6', value: 422 },
  { month: '7', value: 500},
  { month: '8', value: 217 },
  { month: '9', value: 358 },
  { month: '10', value: 1513 },
  { month: '11', value: 1388 },
  { month: '12', value: 597 },
];
 */
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
      data: elecInfoByMonthList.dataList,
    }
  },
},{
  url: '/component/getElecInfoByDay',
  type: 'get',
  response() {
    return {
      code: 200,
      msg: 'success',
      data: elecInfoByDayList.dataList,
    }
  },
}, ]
