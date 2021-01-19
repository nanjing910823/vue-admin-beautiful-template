const data = [
  {
    type:'',
    title: 'DCS、SIS、FGS、CCTV、安防等系统,点击查看详情',
  },
  {
    type:'danger',
    title: '办公A区电子围栏报警,点击查看详情',
  },
]
module.exports = [
  {
    url: '/ad/getList',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        data,
      }
    },
  },
]
