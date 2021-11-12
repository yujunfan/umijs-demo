export default [
  {
    path: '/',
    component: '../layouts/index',
    // redirect: '/dashboard',
    routes: [],
  },
  {
    path: '/login',
    exact: true,
    component: './login',
  },
];
