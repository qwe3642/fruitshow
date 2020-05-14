// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios  from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'

Vue.config.productionTip = false;

Vue.use(ElementUI)
Vue.prototype.$axios = axios ;
Vue.prototype.$qs = qs;

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  /* 创建和挂载根实例 */
  router,
  components: { App },
  template: '<App/>'
})
