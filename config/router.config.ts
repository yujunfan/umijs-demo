export default [
  {
    path: '/login',
    exact: true,
    component: './login',
  },
  {
    path: '/',
    component: '../layouts/index',
    // redirect: '/dashboard',
    routes: [
      {
        path: '/',
        redirect: '/dashboard',
      },
      {
        path: '/dashboard',
        name: '首页',
        component: './base/base',
        icon: 'HomeOutlined',
      },
      {
        path: '/base',
        name: '基础信息',
        isShow: true,
        icon: 'DatabaseOutlined',
        // component: '../layouts/index',
        routes: [
          {
            path: '/base/employee',
            component: './base/employees',
            name: '员工',
            layout: false,
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
