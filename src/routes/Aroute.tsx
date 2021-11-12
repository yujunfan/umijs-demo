import layouts from '@/layouts';
import Login from '@/pages/login';
import Base from '@/pages/base/base';
import { Redirect } from 'umi';
// const RedirectCpn = () => <Redirect to="/dashboard"></Redirect>
export default {
  routes: [
    // {
    //     path: '/',
    //     component: RedirectCpn,
    //     exact: true
    // },
    {
      path: '/dashboard',
      name: '首页',
      component: Base,
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
          component: Base,
          name: '员工',
          layout: false,
        },
        {
          path: '/base/departments',
          component: Base,
          name: '部门',
        },
      ],
    },
    // { component: './404' },
  ],
};
