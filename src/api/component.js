import request from '@/utils/request'

export function getLeaderInfoList(data) {
  return request({
    url: '/component/getLeaderInfoList',
    method: 'get',
    data,
  })
}
