import { defineConfig } from 'umi';
import { route } from './src/router/routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: route,
  fastRefresh: {},
});
