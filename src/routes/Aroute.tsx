import layouts from '@/layouts';
import Login from '@/pages/login';
import Base from '@/pages/base/base';
import Mock from '@/pages/mock/index';
import Alias from '@/pages/alias';
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
      name: '基础',
      isShow: true,
      icon: 'DatabaseOutlined',
      // component: '../layouts/index',
      routes: [
        {
          path: '/base/employee',
          component: Base,
          name: '员工',
        },
        {
          path: '/base/mock',
          component: Mock,
          name: 'mock',
        },
        {
          path: '/base/alias',
          component: Alias,
          name: 'alias',
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
