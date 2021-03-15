const data = [{
    path: '/',
    component: 'Layout',
    redirect: 'index',
    children: [{
      path: 'index',
      name: 'Index',
      component: '@/views/index/index',
      meta: {
        title: '首页',
        icon: 'home',
        affix: true,
      },
    }, ],
  },{
    path: '/employeeManagement',
    component: 'Layout',
    redirect: 'noRedirect',
    meta: {
      title: '人员管理',
      icon: 'users-cog'
    },
    children: [{
        path: 'labourManagement',
        name: 'LabourManagement',
        component: '@/views/labourManagement/index',
        meta: {
          title: '劳务人员管理'
        },
      },
      {
        path: 'attendanceManagement',
        name: 'AttendanceManagement',
        component: '@/views/index/index',
        meta: {
          title: '考勤系统管理'
        },
      },
      {
        path: 'vistorManagement',
        name: 'VistorManagement',
        component: '@/views/index/index',
        meta: {
          title: '访客通行管理'
        },
      },
    ],
  },
  {
    path: '/bimView',
    component: 'Layout',
    redirect: 'noRedirect',
    children: [{
      path: 'index',
      name: 'Index',
      component: '@/views/index/index',
      meta: {
        title: 'BIM可视化',
        icon: 'hotel'
      },
    }, ],
  },
  {
    path: '/monitorManagement',
    component: 'Layout',
    redirect: 'noRedirect',
    meta: {
      title: '集中监测',
      icon: 'chart-bar'
    },
    children: [{
        path: 'fenceManagement',
        name: 'FenceManagement',
        component: '@/views/index/index',
        meta: {
          title: '电子围栏'
        },
      },
      {
        path: 'envManagement',
        name: 'EnvManagement',
        component: '@/views/index/index',
        meta: {
          title: '环境监测'
        },
      },
    ],
  },
  {
    path: '/assetsManagement',
    component: 'Layout',
    redirect: 'noRedirect',
    meta: {
      title: '设备资产管理',
      icon: 'network-wired'
    },
    children: [{
        path: 'ledgerManagement',
        name: 'LedgerManagement',
        component: '@/views/index/index',
        meta: {
          title: '设备台账管理'
        },
      },
      {
        path: 'alertManagement',
        name: 'AlertManagement',
        component: '@/views/index/index',
        meta: {
          title: '设备告警管理'
        },
      },
      {
        path: 'maintainManagement',
        name: 'MaintainManagement',
        component: '@/views/index/index',
        meta: {
          title: '设备保养管理'
        },
      },
      {
        path: 'troubleManagement',
        name: 'TroubleManagement',
        component: '@/views/index/index',
        meta: {
          title: '设备故障处理'
        },
      },
    ],
  },
  {
    path: '/materialsManagement',
    component: 'Layout',
    redirect: 'noRedirect',
    meta: {
      title: '物料管理',
      icon: 'cubes'
    },
    children: [
      {
        path: 'ledgerManagement',
        name: 'LedgerManagement',
        component: '@/views/index/index',
        meta: {
          title: '物料库存管理'
        },
      },
      {
        path: 'stockManagement',
        name: 'StockManagement',
        component: '@/views/index/index',
        meta: {
          title: '物料盘点管理'
        },
      },
    ],
  },
  {
    path: '/sysManagement',
    component: 'Layout',
    redirect: 'noRedirect',
    meta: {
      title: '系统管理',
      icon: 'cogs',
      permissions: ['admin']
    },
    children: [{
        path: 'userManagement',
        name: 'UserManagement',
        component: '@/views/index/index',
        meta: {
          title: '用户管理'
        },
      },
      {
        path: 'roleManagement',
        name: 'RoleManagement',
        component: '@/views/index/index',
        meta: {
          title: '角色管理'
        },
      },
      {
        path: 'menuManagement',
        name: 'MenuManagement',
        component: '@/views/index/index',
        meta: {
          title: '菜单管理',
          badge: 'New'
        },
      },
    ],
  },
  /* {
     path: '/error',
     component: 'EmptyLayout',
     redirect: 'noRedirect',
     name: 'Error',
     meta: { title: '错误页', icon: 'bug' },
     children: [
       {
         path: '401',
         name: 'Error401',
         component: '@/views/401',
         meta: { title: '401' },
       },
       {
         path: '404',
         name: 'Error404',
         component: '@/views/404',
         meta: { title: '404' },
       },
     ],
   }, */
]
module.exports = [{
  url: '/menu/navigate',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: 'success',
      data: data
    }
  },
}, ]
