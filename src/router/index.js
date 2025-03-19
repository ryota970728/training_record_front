import Vue from 'vue';
import VueRouter from 'vue-router';

import RecordHome from '../components/RecordHome.vue';
import RecordConfirm from '../components/RecordConfirm.vue';

// routerをVueインスタンス全体で使用できるようにプラグインの設定
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/record'
  },
  {
    path: '/record',
    name: 'RecordHome',
    component: RecordHome
  },
  {
    path: '/confirm',
    name: 'RecordConfirm',
    component: RecordConfirm
  },
  {
    path: '*',
    redirect: '/record'
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: '',
  routes
})

export default router;