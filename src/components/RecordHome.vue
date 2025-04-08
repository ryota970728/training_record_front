<template>
  <div class="record-home">
    <div class="date">
      <input class="input-date" type="date" v-model="createDate">
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
      <button class="delete-record-button" @click="deleteRecord"></button>
    </div>
    <div>
      <button class="add-record-button" @click="addRecord"></button>
    </div>
    <div>
      <button class="submit-record-button" @click="sendConfirm">送信</button>
    </div>
    <record-modal v-show="isShowModal" v-on:cancel="stopModal" v-on:ok="okModal"></record-modal>
    <progress-circular v-if="isLoading"></progress-circular>
  </div>
</template>

<script>
import RecordDetail from './RecordDetail.vue';
import RecordModal from './common/RecordModal.vue';
import ProgressCircular from './common/ProgressCircular.vue';
import { FUNCTIONS_URL } from '@/constant.js'

export default {
  name: "RecordHome",
  components: {
    RecordDetail,
    RecordModal,
    ProgressCircular,
  },
  data() {
    return {
      // 日付を「yyyy-mm-dd」形式で設定
      createDate: new Date().toISOString().split('T')[0],
      // 記録フォームのリスト
      recordLists: [1],
      // フォームデータのリスト
      formDataList: [],
      // 部位の一覧
      partList: [],
      // 種目の一覧
      menuList: [],
      // ローディング状態
      isLoading: false,
      // モーダル制御
      isShowModal: false,
    }
  },
  mounted() {
    this.fetchPart();
    this.fetchMenu();
    this.fetchRecords();
  },
  methods: {
    // レコードを追加
    addRecord() {
      this.recordLists.push(this.recordLists.length + 1);
    },
    // レコードを削除
    deleteRecord() {
      if (this.recordLists.length > 1) {
        // レコード削除確認
        if (confirm("最新の記録を削除しますか？")) {
          // ユーザーが「OK」をクリックした場合
          this.recordLists.pop();
        }
      }
    },
    // 子から受け取った配列を親で保持する
    handleArrayUpdate(newArray) {
      this.formDataList.push(newArray);
    },
    // 入力チェック処理
    inputCheck() {
      let isInputCheck = false;
      // 全ての子コンポーネントをループ
      this.$refs.child.forEach(child => {
        // forEachから抜ける
        if (isInputCheck) {
          return;
        }
        if (child && child.checkRecordDetailData){
          // 子コンポーネントのcheckRecordDetailData()を呼び出す
          isInputCheck = child.checkRecordDetailData();
          // コンポーネントの処理から抜ける
          if (isInputCheck){
            return;
          }
        }
      });
      return isInputCheck;
    },
    // 入力データや変数の初期化
    clearRecordData() {
      // 全ての子コンポーネントをループ
      this.$refs.child.forEach(child => {
        if (child && child.clearRecordDetailData){
          // 子コンポーネントのclearRecordDetailData()を呼び出す
          child.clearRecordDetailData();
        }
      });
      this.formDataList = []; // formDataListを初期化
    },
    // 送信ボタン押下
    sendConfirm() {
      // 入力チェック
      if (this.inputCheck()){
        return;
      }
      // モーダルを表示
      this.isShowModal = true;
    },
    // キャンセル
    stopModal() {
      // モーダルを非表示
      this.isShowModal = false;
    },
    // OK
    async okModal() {
      // ローディング開始
      this.isLoading = true;

      // モーダルを非表示
      this.isShowModal = false;

      // 送信処理
      const isSuccess = await this.postRecordData();

      // ローディング停止
      this.isLoading = false;

      if (isSuccess) {
        // 送信成功
        this.clearRecordData();
      }else{
        // 送信失敗
        alert("送信に失敗しました。");
      }
    },
    /*** API通信 ****/
    // 部位一覧を取得する関数
    fetchPart() {
      if (sessionStorage.getItem('partList') !== null) {
        this.partList = JSON.parse(sessionStorage.getItem('partList'));
      }else{
        this.$axios.get(FUNCTIONS_URL.GET_PART,{
          headers: {
            Authorization: FUNCTIONS_URL.AUTHORIZATION,
          },
        })
        .then((res) =>{
          this.partList = res.data;
          sessionStorage.setItem('partList', JSON.stringify(this.partList));
        }).catch((err) =>{
          console.log(err);
        })
      }
    },
    // 種目一覧を取得する関数
    fetchMenu(){
      if (sessionStorage.getItem('menuList') !== null) {
        this.menuList = JSON.parse(sessionStorage.getItem('menuList'));
        }else{
        this.$axios.get(FUNCTIONS_URL.GET_MENU,{
          headers: {
            Authorization: FUNCTIONS_URL.AUTHORIZATION,
          },
        })
        .then((res) =>{
          this.menuList = res.data;
          sessionStorage.setItem('menuList', JSON.stringify(this.menuList));
        }).catch((err) =>{
          console.log(err);
        })
      }
    },
    // 記録一覧を取得する関数
    fetchRecords() {
      this.$axios
        .get(FUNCTIONS_URL.GET_RECORDS, {
          headers: {
            Authorization: FUNCTIONS_URL.AUTHORIZATION,
          },
        })
        .then((res) => {
          this.recordList = res.data;
          sessionStorage.setItem('recordList', JSON.stringify(this.recordList));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 送信処理
    async postRecordData() {
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
          console.log("success:", response.data);
        }catch(err){
          console.log("error:", err);
          return false;
        }
      }
      return true;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-record-button {
  background-image: url('@/assets/plus.png');
  background-repeat: no-repeat;
  background-size: contain; /* 画像をボタン内に収める */
  background-position: center; /* 画像を中央に配置 */
  background-color: #ffffff;
  width: 40px; /* 画像に合わせてボタンの幅を設定 */
  height: 40px; /* 画像に合わせてボタンの高さを設定 */
  border: none; /* ボタンのボーダーを削除 */
  padding: 0; /* ボタンのパディングを削除 */
  cursor: pointer; /* カーソルをポインターに変更 */
}
.delete-record-button {
  background-image: url('@/assets/minus.png');
  background-repeat: no-repeat;
  background-size: contain; /* 画像をボタン内に収める */
  background-position: center; /* 画像を中央に配置 */
  background-color: #ffffff;
  width: 40px; /* 画像に合わせてボタンの幅を設定 */
  height: 40px; /* 画像に合わせてボタンの高さを設定 */
  border: none; /* ボタンのボーダーを削除 */
  padding: 0; /* ボタンのパディングを削除 */
  cursor: pointer; /* カーソルをポインターに変更 */
}
.submit-record-button {
  margin: 15px;
  display       : inline-block;
  border-radius : 5cm;          /* 角丸       */
  text-align    : center;      /* 文字位置   */
  cursor        : pointer;     /* カーソル   */
  padding       : 6px 12px;   /* 余白       */
  background    : #007fff;     /* 背景色     */
  color         : #ffffff;     /* 文字色     */
  line-height   : 1em;         /* 1行の高さ  */
  transition    : .3s;         /* なめらか変化 */
  border        : 2px solid #007fff;    /* 枠の指定 */
}
.input-date {
  font-size: 16px;
}
</style>
