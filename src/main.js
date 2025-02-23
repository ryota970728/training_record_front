import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
// axiosをVueインスタンス全体で使用できるように設定
Vue.prototype.$axios = axios;


new Vue({
  render: h => h(App),
}).$mount('#app')
