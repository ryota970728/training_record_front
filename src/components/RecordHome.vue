<template>
  <div>
    <h1>記録</h1>
    <div>
      <p>日付</p>
      <input type="date" v-model="todayDate">
    </div>
    <div v-for="(record, index) in recordLists" :key="index">
      <record-detail :todayDate=todayDate ref="child" @update-array="handleArrayUpdate"></record-detail>
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
    <!-- <button @click="parentTest">親テスト</button> -->
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
      // 本日の日付を「yyyy-mm-dd」形式で設定
      todayDate: new Date().toISOString().split('T')[0],
      // 記録フォームのリスト
      recordLists: [1],
      // フォームデータのリスト
      formDataList: [],
    }
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
    // 記録を登録する
    async submitRecord(){
      console.log("----- 送信ボタン -----");
      // 全ての子コンポーネントをループ
      this.$refs.child.forEach(child => {
        if (child && child.setRecordDetailData){
          // 子コンポーネントのsetRecordDetailData()を呼び出す
          child.setRecordDetailData();
        }
      });

      let formData = new FormData();
      this.formDataList.forEach(item => {
        // オブジェクトをJSON形式に変換
        formData.append('record', JSON.stringify(item));
      });

      this.$axios.post(FUNCTIONS_URL.POST_RECORD, formData, {
        Headers :{
          "Content-Type": "multipart/form-data"
        }
      })
      .then(console.log("送信成功！"))
      .catch((err) =>{
        console.log(err);
      })
    },
    // 子から受け取った配列を親で保持する
    handleArrayUpdate(newArray) {
      this.formDataList.push(newArray);
    },
    parentTest() {
      // 全ての子コンポーネントをループ
      this.$refs.child.forEach(child => {
        if (child && child.setRecordDetailData){
          // 子コンポーネントのsetRecordDetailData()を呼び出す
          child.setRecordDetailData();
        }
      });
      console.log('--- parentTest() ---');
      console.log('親のリスト', this.formDataList);
      console.log('長さ', this.formDataList.length);

      let formData = new FormData();
      this.formDataList.forEach(item => {
        formData.append('record', item);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
