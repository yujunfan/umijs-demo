export default [
  {
    path: '/login',
    exact: true,
    component: './login',
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/dashboard',
        name: '首页',
        component: './base/base',
      },
      {
        path: '/base',
        name: '基础信息',
        isShow: true,
        // component: '../layouts/index',
        routes: [
          {
            path: '/base/employee',
            component: './base/employees',
            name: '员工',
          },
          {
            path: '/base/departments',
            component: './base/departments',
            name: '部门',
          },
        ],
      },
      { component: './404' },
    ],
  },
];
