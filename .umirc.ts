import { defineConfig } from 'umi';
import routerConfig from './config/router.config';
export default defineConfig({
  title: 'test',
  theme: {
    '@primary-color': '#1DA57A',
  },
  alias: {
    component: require.resolve('./src/pages/alias/src/components'),
  },
  // plugins:['dva'],
  publicPath: './',
  history: { type: 'hash' },
  locale: {},
  headScripts: [{ src: '/config.js' }],
  links: [{ href: './img/logo.ico', rel: 'icon' }],
  metas: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'google', content: 'notranslate' },
    { 'http-equiv': 'Pragma', content: 'no-cache' },
    {
      'http-equiv': 'cache-control',
      content: 'no-cache, no-sore, must-revalidate',
    },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routerConfig,
  fastRefresh: {},
});
