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
    routes: [],
  },
];
