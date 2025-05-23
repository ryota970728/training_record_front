<template>
  <div class="record-home">
    <progress-circular v-if="isLoading"></progress-circular>
    <record-modal v-show="isShowModal" v-on:cancel="stopModal" v-on:ok="okModal"></record-modal>
    <!-- 日付 -->
    <div>
      <input class="create-date-input" type="date" v-model="createDate">
    </div>
    <!-- 記録詳細 -->
    <div v-for="(record, index) in recordLists" :key="index">
      <record-detail
      :createDate=createDate
      ref="child"
      @update-array="handleArrayUpdate"
      ></record-detail>
    </div>
    <!-- 記録削除ボタン -->
    <div v-if="recordLists.length > 1">
      <button class="delete-button" @click="deleteRecord"></button>
    </div>
    <!-- 記録追加ボタン -->
    <div>
      <button class="add-button" @click="addRecord"></button>
    </div>
    <!-- 記録送信ボタン -->
    <div>
      <button class="submit-button" @click="sendConfirm">送信</button>
    </div>
  </div>
</template>

<script>
import RecordDetail from './RecordDetail.vue';
import RecordModal from './common/RecordModal.vue';
import ProgressCircular from './common/ProgressCircular.vue';
import { mapActions } from 'vuex';

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
      // ローディング状態
      isLoading: false,
      // モーダル制御
      isShowModal: false,
    }
  },
  methods: {
    // ストアのアクションをマッピング
    ...mapActions(['fetchRecordList']),

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
      const isSuccess = await this.$apiService.postRecordData(this.formDataList);
      // ローディング停止
      this.isLoading = false;

      if (isSuccess) {
        // 送信成功
        this.clearRecordData(); // 入力データや変数の初期化
        this.fetchRecordList(); // ストアの記録リストを更新
        alert("送信に成功しました。");
      }else{
        // 送信失敗
        alert("送信に失敗しました。");
      }
    },
  }
}
</script>


<style scoped>
/** 追加ボタン */
.add-button {
  background-image: url('@/assets/plus.png');
  background-repeat: no-repeat;
  background-size: contain; /* 画像をボタン内に収める */
  background-position: center; /* 画像を中央に配置 */
  background-color: #ffffff;
  width: 50px; /* 画像に合わせてボタンの幅を設定 */
  height: 50px; /* 画像に合わせてボタンの高さを設定 */
  border: none; /* ボタンのボーダーを削除 */
  padding: 0; /* ボタンのパディングを削除 */
  cursor: pointer; /* カーソルをポインターに変更 */
  background-color: #f8f4e6;
}

/** 削除ボタン */
.delete-button {
  background-image: url('@/assets/minus.png');
  background-repeat: no-repeat;
  background-size: contain; /* 画像をボタン内に収める */
  background-position: center; /* 画像を中央に配置 */
  background-color: #ffffff;
  width: 50px; /* 画像に合わせてボタンの幅を設定 */
  height: 50px; /* 画像に合わせてボタンの高さを設定 */
  border: none; /* ボタンのボーダーを削除 */
  padding: 0; /* ボタンのパディングを削除 */
  cursor: pointer; /* カーソルをポインターに変更 */
  background-color: #f8f4e6;
}

/** 送信ボタン */
.submit-button {
  margin: 15px;
  display       : inline-block;
  border-radius : 5cm;          /* 角丸       */
  text-align    : center;      /* 文字位置   */
  cursor        : pointer;     /* カーソル   */
  padding       : 6px 12px;   /* 余白       */
  background    : #007fff;     /* 背景色     */
  color         : #ffffff;     /* 文字色     */
  font-size: 1rem;             /* フォントサイズ */
  line-height   : 1em;         /* 1行の高さ  */
  transition    : .3s;         /* なめらか変化 */
  border        : 2px solid #007fff;    /* 枠の指定 */
}

/** 日付入力フィールド */
.create-date-input {
  font-size: 1rem;
}
</style>
