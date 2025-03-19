<template>
  <div class="record-home">
    <h1>記録</h1>
    <div class="date">
      <label>日付：</label>
      <input type="date" v-model="createDate">
    </div>
    <div v-for="(record, index) in recordLists" :key="index">
      <record-detail
      :createDate=createDate
      :partList="partList"
      :menuList="menuList"
      ref="child"
      @update-array="handleArrayUpdate"
      ></record-detail>
    </div>
    <div v-if="recordLists.length > 1">
      <button @click="deleteRecord">レコード削除</button>
    </div>
    <div>
      <button @click="addRecord">レコード追加</button>
    </div>
    <div>
      <button @click="submitRecord">送信</button>
    </div>
  </div>
</template>

<script>
import RecordDetail from './RecordDetail.vue';
import { FUNCTIONS_URL } from "@/Constant.js";

export default {
  name: "RecordHome",
  components: {
    RecordDetail,
  },
  data() {
    return {
      // 日付を「yyyy-mm-dd」形式で設定
      createDate: new Date().toISOString().split('T')[0],
      // 記録フォームのリスト
      recordLists: [1],
      // フォームデータのリスト
      formDataList: [],
      // 入力チェック判定
      inputCheck: false,
      // 部位の一覧
      partList: [],
      // 種目の一覧
      menuList: [],
    }
  },
  mounted() {
    this.fetchPart();
    this.fetchMenu();
  },
  methods: {
    // レコードを追加
    addRecord() {
      this.recordLists.push(this.recordLists.length + 1);
    },
    // レコードを削除
    deleteRecord() {
      this.recordLists.pop();
    },
    // 部位一覧を取得する関数
    fetchPart() {
      if (this.partList.length === 0) {
        this.$axios.get(FUNCTIONS_URL.GET_PART,{
          headers: {
            Authorization: FUNCTIONS_URL.AUTHORIZATION,
          },
        })
        .then((res) =>{
          this.partList = res.data;
        }).catch((err) =>{
          console.log(err);
        })
      }
    },
    // 種目一覧を取得する関数
    fetchMenu(){
      if (this.menuList.length === 0) {
        this.$axios.get(FUNCTIONS_URL.GET_MENU,{
          headers: {
            Authorization: FUNCTIONS_URL.AUTHORIZATION,
          },
        })
        .then((res) =>{
          this.menuList = res.data;
        }).catch((err) =>{
          console.log(err);
        })
      }
    },
    // 記録を登録する
    async submitRecord(){
      // 全ての子コンポーネントをループ
      this.$refs.child.forEach(child => {
        if (child && child.setRecordDetailData){
          // 子コンポーネントのsetRecordDetailData()を呼び出す
          this.inputCheck = child.setRecordDetailData();
          if (this.inputCheck){
            // forEachから処理を抜ける
            return;
          }
        }
      });

      if (this.inputCheck){
        // 未入力項目あり
        return;
      }

      for (const item of this.formDataList) {
        let formData = new FormData();
        formData.append('record', JSON.stringify(item));
        try{
          const response = await this.$axios.post(FUNCTIONS_URL.POST_RECORD, formData, {
            headers :{
              Authorization: FUNCTIONS_URL.AUTHORIZATION,
              "Content-Type": "application/json",
            }
          });
          console.log("success!", response.data);
        }catch(err){
          console.log(err);
          alert('送信失敗!');
        }
      }
      alert('送信成功!');
      // 全ての子コンポーネントをループ
      this.$refs.child.forEach(child => {
        if (child && child.clearRecordDetailData){
          // 子コンポーネントのclearRecordDetailData()を呼び出す
          child.clearRecordDetailData();
        }
      });
      this.formDataList = []; // formDataListを初期化
      this.inputCheck = false; // inputCheckを初期化
    },
    // 子から受け取った配列を親で保持する
    handleArrayUpdate(newArray) {
      this.formDataList.push(newArray);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
