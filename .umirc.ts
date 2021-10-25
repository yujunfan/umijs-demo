import { defineConfig } from 'umi';

export default defineConfig({
  title: 'test',
  theme: {
    '@primary-color': '#1DA57A',
  },
  headScripts: [
    { src: '/config.js' },
    {
      src: 'https://webapi.amap.com/maps?v=1.4.15&key=896a9ce2a8b9017a051ea4a36c570ce0&&y&&plugin=AMap.Geocoder,AMap.ToolBar,AMap.Geolocation,AMap.Autocomplete,AMap.MarkerClusterer,AMap.Heatmap,AMap.Driving',
      type: 'text/javascript'
    }
  ],
  links:[{href:"./img/logo.ico",rel:"icon"}],
  metas: [
    {name: 'viewport',content: 'width=device-width, initial-scale=1'},
    {name: 'google', content: 'notranslate' },
    {'http-equiv':'Pragma',content: 'no-cache'},
    {'http-equiv':'cache-control',content: 'no-cache, no-sore, must-revalidate'}
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
