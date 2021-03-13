import request from '@/utils/request'

//获取劳务人员信息
export function getUserInfoList(data) {
  return request({
    url: '/component/getUserInfoList',
    method: 'get',
    data,
  })
}

//获取劳务人员占比
export function getUserTypeList(data) {
  return request({
    url: '/component/getUserTypeList',
    method: 'get',
    data,
  })
}

//获取项目负责人信息
export function getLeaderInfoList(data) {
  return request({
    url: '/component/getLeaderInfoList',
    method: 'get',
    data,
  })
}

//按月获取电表全部信息
export function getElecInfoByMonth(data) {
  return request({
    url: '/component/getElecInfoByMonth',
    method: 'get',
    data,
  })
}

//按天获取电表全部信息
export function getElecInfoByDay(data) {
  return request({
    url: '/component/getElecInfoByDay',
    method: 'get',
    data,
  })
}