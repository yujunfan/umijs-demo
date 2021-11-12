import layouts from '@/layouts';
import Login from '@/pages/login';
import Base from '@/pages/base/base';

export default [
  {
    path: '/login',
    exact: true,
    component: './login',
  },
  {
    path: '/',
    component: layouts,
    // redirect: '/dashboard',
    routes: [
      {
        path: '/',
        redirect: '/dashboard',
      },
      {
        path: '/dashboard',
        name: '首页',
        component: Base,
        icon: 'HomeOutlined',
      },
    ],
  },
];
