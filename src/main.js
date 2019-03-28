// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/jquery-3.3.1.min'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import echarts from 'echarts'
import axios from 'axios'
// import Mock from './mock'
// import BaiduMap from 'vue-baidu-map'

// axios.defaults.baseURL = 'http://localhost:3000/api'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts=echarts
Vue.prototype.$axios = axios;
// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: '1hjLmax7l0c7GESTA307bBPHf0QLgbgp'
// })




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  echarts,
  components: { App },
  template: '<App/>'
})
