export default [
  // user
  {
    path: '/',
    component: '../layouts/index',
    routes: [{ path: '/user', component: './users' }, { component: '404' }],
  },
];
