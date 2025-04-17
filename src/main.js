import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import * as apiService from './api/apiService'
import * as dateUtils from './utils/dateUtils'

Vue.config.productionTip = false
// axiosをVueインスタンス全体で使用できるように設定
Vue.prototype.$axios = axios;
Vue.prototype.$apiService = apiService;
Vue.prototype.$dateUtils = dateUtils;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
