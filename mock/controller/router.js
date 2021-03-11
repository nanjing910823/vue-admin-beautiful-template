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
        path: 'userManagement',
        name: 'UserManagement',
        component: '@/views/userManagement/index',
        meta: {
          title: '劳务人员管理'
        },
      },
      {
        path: 'roleManagement',
        name: 'RoleManagement',
        component: '@/views/index/index',
        meta: {
          title: '考勤系统管理'
        },
      },
      {
        path: 'menuManagement',
        name: 'MenuManagement',
        component: '@/views/index/index',
        meta: {
          title: '访客通行管理'
        },
      },
    ],
  },
  /* {
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
    path: '/energyManagement',
    component: 'Layout',
    redirect: 'noRedirect',
    children: [{
      path: 'index',
      name: 'Index',
      component: '@/views/index/index',
      meta: {
        title: '能源监控',
        icon: 'radiation'
      },
    }, ],
  },
  {
    path: '/employeeManagement',
    component: 'Layout',
    redirect: 'noRedirect',
    meta: {
      title: '人员管理',
      icon: 'users-cog'
    },
    children: [{
        path: 'userManagement',
        name: 'UserManagement',
        component: '@/views/index/index',
        meta: {
          title: '劳务人员管理'
        },
      },
      {
        path: 'roleManagement',
        name: 'RoleManagement',
        component: '@/views/index/index',
        meta: {
          title: '考勤系统管理'
        },
      },
      {
        path: 'menuManagement',
        name: 'MenuManagement',
        component: '@/views/index/index',
        meta: {
          title: '访客通行管理'
        },
      },
    ],
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
        path: 'userManagement',
        name: 'UserManagement',
        component: '@/views/index/index',
        meta: {
          title: '电子围栏'
        },
      },
      {
        path: 'roleManagement',
        name: 'RoleManagement',
        component: '@/views/index/index',
        meta: {
          title: '下发报警'
        },
      },
      {
        path: 'menuManagement',
        name: 'MenuManagement',
        component: '@/views/index/index',
        meta: {
          title: '运行监测'
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
        path: 'userManagement',
        name: 'UserManagement',
        component: '@/views/index/index',
        meta: {
          title: '设备台账管理'
        },
      },
      {
        path: 'roleManagement',
        name: 'RoleManagement',
        component: '@/views/index/index',
        meta: {
          title: '设备告警管理'
        },
      },
      {
        path: 'menuManagement',
        name: 'MenuManagement',
        component: '@/views/index/index',
        meta: {
          title: '设备保养管理'
        },
      },
      {
        path: 'menuManagement',
        name: 'MenuManagement',
        component: '@/views/index/index',
        meta: {
          title: '设备故障处理'
        },
      },
    ],
  },
  {
    path: '/storageManagement',
    component: 'Layout',
    redirect: 'noRedirect',
    meta: {
      title: '仓储管理',
      icon: 'coins'
    },
    children: [{
        path: 'menuManagement',
        name: 'MenuManagement',
        component: '@/views/index/index',
        meta: {
          title: '储罐台账管理'
        },
      },
      {
        path: 'userManagement',
        name: 'UserManagement',
        component: '@/views/index/index',
        meta: {
          title: '储罐计量管理'
        },
      },
      {
        path: 'roleManagement',
        name: 'RoleManagement',
        component: '@/views/index/index',
        meta: {
          title: '计量作业管理'
        },
      },
      {
        path: 'menuManagement',
        name: 'MenuManagement',
        component: '@/views/index/index',
        meta: {
          title: '储罐盘点管理'
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
    children: [{
        path: 'menuManagement',
        name: 'MenuManagement',
        component: '@/views/index/index',
        meta: {
          title: '仓库档案管理'
        },
      },
      {
        path: 'userManagement',
        name: 'UserManagement',
        component: '@/views/index/index',
        meta: {
          title: '物料库存管理'
        },
      },
      {
        path: 'userManagement',
        name: 'UserManagement',
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
  }, */
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
