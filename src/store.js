import Vue from 'vue'
import Vuex from 'vuex'
import * as apiService from '@/api/apiService'

Vue.use(Vuex)

export default new Vuex.Store({
  /**
   * アプリデータの源泉
   */
  state: {
    // 種目リスト
    partList: [],
    // メニューリスト
    menuList: [],
    // 記録リスト
    recordList: [],
  },
  /**
   * stateを同期的に変更する場所
   * stateを変更する唯一の方法。必ず同期的に変更しないといけない
   */
  mutations: {
    // 種目リスト更新
    setPartList(state, payload) {
      state.partList = payload
    },
    // 部位リスト更新
    setMenuList(state, payload) {
      state.menuList = payload
    },
    // 記録リスト更新
    setRecordList(state, payload) {
      state.recordList = payload
    },
  },
  /**
   * 非同期処理を含めて、mutationsを呼び出す場所
   */
  actions: {
    // 部位リストを取得するアクション
    async fetchPartList({ commit }) {
      try {
        const partList = await apiService.fetchPart();
        commit('setPartList', partList); // 成功したらミューテーションをコミット
      }catch (error){
        console.log(error);
      }
    },
    // メニューリストを取得するアクション
    async fetchMenuList({ commit }) {
      try {
        const menuList = await apiService.fetchMenu();
        commit('setMenuList', menuList);
      } catch (error) {
        console.log(error);
      }
    },
    // 記録リストを取得するアクション
    async fetchRecordList({ commit }) {
      try {
        const recordList = await apiService.fetchRecords();
        commit('setRecordList', recordList);
      } catch (error) {
        console.log(error);
      }
    },
  },
  /**
   * stateから派生データを取得する
   */
  getters: {
    getPartList: state => state.partList,
    getMenuList: state => state.menuList,
    getRecordList: state => state.recordList,
  }
})