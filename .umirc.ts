import { defineConfig } from 'umi';
import routerConfig from './config/router.config';
export default defineConfig({
  title: 'test',
  theme: {
    '@primary-color': '#1DA57A',
  },
  // base: '/some',//加个前缀
  alias: {
    component: require.resolve('./src/components/index'),
  },
  dynamicImport: {
    loading: '@/Loading',
  },
  chainWebpack: function (config, { env }) {
    config.merge({
      plugin: {
        install: {
          plugin: require('uglifyjs-webpack-plugin'),
          args: [
            {
              sourceMap: false,
              uglifyOptions: {
                compress: {
                  // remove `console.*`
                  drop_console: env === 'development' ? false : true,
                },
                output: {
                  // whether to actually beautify the output
                  beautify: false,
                  // remove all comments
                  comments: false,
                },
              },
            },
          ],
        },
      },
    });
  },
  // ssr: {},
  // plugins:['dva'],
  publicPath: './',
  // runtimePublicPath:true,
  history: { type: 'hash' },
  locale: {},
  mfsu: {},
  headScripts: [{ src: './config.js' }],
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
