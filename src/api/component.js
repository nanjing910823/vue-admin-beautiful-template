import request from '@/utils/request'

//获取项目负责人信息
export function getLeaderInfoList(data) {
  return request({
    url: '/component/getLeaderInfoList',
    method: 'get',
    data,
  })
}

//获取电表全部信息
export function getElecInfoByMonth(data) {
  return request({
    url: '/component/getElecInfoByMonth',
    method: 'get',
    data,
  })
}
