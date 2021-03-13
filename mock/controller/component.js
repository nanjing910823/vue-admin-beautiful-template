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

const userTypeList = mock({
    'bar': [{
      'header': '学校教师',
      'type': '高级教师',
      'count|8-15': 8
    }, {
      'header': '学校教师',
      'type': '一级教师',
      'count|8-15': 8
    }, {
      'header': '学校教师',
      'type': '二级教师',
      'count|8-15': 8
    }, {
      'header': '普通职工',
      'type': '门卫',
      'count|8-18': 8
    }, {
      'header': '普通职工',
      'type': '保洁',
      'count|8-18': 8
    }, {
      'header': '普通职工',
      'type': '维修工',
      'count|8-18': 8
    }, {
      'header': '普通职工',
      'type': '食堂厨师',
      'count|8-18': 8
    }, {
      'header': '普通职工',
      'type': '后勤',
      'count|8-18': 8
    }, {
      'header': '管理人员',
      'type': '督导',
      'count|0-3': 1
    }, {
      'header': '管理人员',
      'type': '校长',
      'count|0-3': 1
    }, {
      'header': '管理人员',
      'type': '董事',
      'count|0-3': 1
    }, {
      'header': '管理人员',
      'type': '管理员',
      'count|0-3': 1
    }],
    'pie': [{
      'header': '学校教师',
      'total|20-40': 20
    },{
      'header': '普通职工',
      'total|20-50': 20
    },{
        'header': '管理人员',
        'total|5-10': 5
      
    }]
})

const userInfoList = mock({
  'dataList': [{
    'header': '学校教师',
    'info|20-40': [{
      'name': '@cname',
      'gender|1': ['男', '女'],
      'age|25-50': 25,
      'post|1': ['高级教师', '一级教师', '二级教师'],
      'address': '@county(true)',
      'mobile': /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      'idCard': '@id',
      'workYear|1-10': 1,
      'startDate': '@date(yyyy-MM-dd)',
      'endDate': '',
      'avatar|1': ['dm01.jpg', 'dm02.jpg', 'dm03.jpg', 'dm04.jpg', 'dm05.jpg', 'dm06.jpg'],
    }]
  }, {
    'header': '普通职工',
    'info|20-50': [{
      'name': '@cname',
      'gender|1': ['男', '女'],
      'age|20-50': 25,
      'post|1': ['门卫', '保洁', '维修工', '食堂厨师', '后勤'],
      'address': '@county(true)',
      'mobile': /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      'idCard': '@id',
      'workYear|1-10': 1,
      'startDate': '@date(yyyy-MM-dd)',
      'endDate': '',
      'avatar|1': ['dm01.jpg', 'dm02.jpg', 'dm03.jpg', 'dm04.jpg', 'dm05.jpg', 'dm06.jpg'],
    }]
  }, {
    'header': '管理人员',
    'info|5-10': [{
      'name': '@cname',
      'gender|1': ['男', '女'],
      'age|40-50': 25,
      'post|1': ['督导', '校长', '董事', '管理员'],
      'address': '@county(true)',
      'mobile': /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      'idCard': '@id',
      'workYear|1-10': 1,
      'startDate': '@date(yyyy-MM-dd)',
      'endDate': '',
      'avatar|1': ['dm01.jpg', 'dm02.jpg', 'dm03.jpg', 'dm04.jpg', 'dm05.jpg', 'dm06.jpg'],
    }]
  }, {
    'header': '离职员工',
    'info|2-5': [{
      'name': '@cname',
      'gender|1': ['男', '女'],
      'age|25-50': 25,
      'post|1': ['高级教师', '一级教师', '二级教师', '门卫', '保洁', '维修工', '食堂厨师', '后勤'],
      'address': '@county(true)',
      'mobile': /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      'idCard': '@id',
      'workYear|1-10': 1,
      'startDate': '@date',
      'endDate': '@now(yyyy-MM-dd)',
      'avatar|1': ['dm01.jpg', 'dm02.jpg', 'dm03.jpg', 'dm04.jpg', 'dm05.jpg', 'dm06.jpg'],
    }]
  }]
})

const elecInfoByMonthList = mock({
  'dataList|12': [{
    'month|+1': ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    'value|50-150': 50
  }]
})

const elecInfoByDayList = mock({
  'dataList|31': [{
    'day|+1': ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17",
      "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
    ],
    'value|5-20.1': 5
  }]
})

module.exports = [{
  url: '/component/getUserInfoList',
  type: 'get',
  response() {
    return {
      code: 200,
      msg: 'success',
      data: userInfoList.dataList,
    }
  },
}, {
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
}, {
  url: '/component/getElecInfoByDay',
  type: 'get',
  response() {
    return {
      code: 200,
      msg: 'success',
      data: elecInfoByDayList.dataList,
    }
  },
}, {
  url: '/component/getUserTypeList',
  type: 'get',
  response() {
    return {
      code: 200,
      msg: 'success',
      data: userTypeList,
    }
  },
}, ]
