import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import * as apiService from './api/apiService'

Vue.config.productionTip = false
// axiosをVueインスタンス全体で使用できるように設定
Vue.prototype.$axios = axios;
Vue.prototype.$apiService = apiService;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
