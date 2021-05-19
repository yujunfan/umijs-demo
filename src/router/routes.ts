export const route = [
  { path: '/login', component: '@/pages/login/index' },
  {
    path: '/',
    component: '@/layouts/index',
    wrappers: ['@/wrappers/auth'],
    routes: [
      { path: '/list', component: '@/pages/login/index' },
      { path: '/admin', component: '@/pages/login/index' },
    ],
  },
];
