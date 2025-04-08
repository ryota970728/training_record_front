import Vue from 'vue';
import VueRouter from 'vue-router';

import RecordHome from '../components/RecordHome.vue';
import RecordConfirm from '../components/RecordConfirm.vue';
import RecordSearch from '../components/RecordSearch.vue';


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
    component: RecordHome,
    meta: {title: '記録'}
  },
  {
    path: '/confirm',
    name: 'RecordConfirm',
    component: RecordConfirm,
    meta: {title: '記録一覧'}
  },
  {
    path: '/search',
    name: 'RecordSearch',
    component: RecordSearch,
    meta: {title: '記録検索'}
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: '',
  routes
})

export default router;