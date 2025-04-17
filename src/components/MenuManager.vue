<template>
  <div>
    <!-- ローディング表示を追加 -->
    <progress-circular v-if="isLoading"></progress-circular>
    <div class="menu-manager">
      <div class="title">メニュー追加</div>
      <select v-model="selectedPartId" class="select-part">
        <option disabled value="">部位を選択してください</option>
        <option v-for="part in getPartList" :key="part.part_id" :value="part.part_id">
          {{ part.part_name }}
        </option>
      </select>
      <div>
        <input v-model="inputMenuName" type="text" placeholder="追加するメニューを入力" class="input-menu">
      </div>
      <div>
        <button @click="registMenu" class="regist-button">登録</button>
      </div>
    </div>
    <div class="menu-manager">
      <div class="title">メニュー編集</div>
      <div class="title">※近日アップデート予定</div>
    </div>
  </div>
</template>

<script>
import ProgressCircular from './common/ProgressCircular.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "MenuManager",
  components: {
    ProgressCircular, // ローディングコンポーネントを登録
  },
  data() {
    return {
      // プルダウンで選択された部位名
      selectedPartId: '',
      // 入力されたメニュー名
      inputMenuName: '',
      // ローディング状態
      isLoading: false,
    }
  },
  computed: {
    // Vuexのゲッターをマッピング
    ...mapGetters(['getPartList']),
  },
  methods: {
    // Vuexのアクションをマッピング
    ...mapActions(['fetchMenuList']),

    // メニュー登録
    async registMenu() {
      if (this.selectedPart > 0) {
        // プルダウンに値がセットされているか確認
        alert('部位を選択してください');
        return;
      }
      if (this.inputMenuName === '') {
        // 入力チェック
        alert('メニュー名を入力してください');
        return;
      }
      // 登録処理
      this.isLoading = true;
      const isSuccess =await this.$apiService.postMenuData(this.selectedPartId, this.inputMenuName);
      this.isLoading = false;
      if (isSuccess) {
        // 登録成功
        alert("登録に成功しました。");
        this.selectedPartId = '';
        this.inputMenuName = '';
        this.fetchMenuList(); // ストアのメニューリストを更新
      }else{
        // 登録失敗
        alert("登録に失敗しました。");
      }
    }
  },
};
</script>

<style scoped>
.menu-manager {
  padding: 10px;
  border: solid 0.1rem rgb(0,0,0,0.2);
  border-radius: 2%;
  margin: 1rem;
}
.title {
  margin: 0.5rem;
  font-weight: bold;
}
/* 部位-入力フィールド */
.select-part {
  width: auto;
  width: auto;
  height: 25px;
  font-size: 1rem;
  text-align: center;
}

/* 種目-入力フィールド */
.input-menu {
  font-size: 1rem;
  width: 80%;
  margin: 1rem;
  text-align: center;
}

/* 登録ボタン */
.regist-button {
  margin: 1rem;
  display       : inline-block;
  text-align    : center;      /* 文字位置   */
  cursor        : pointer;     /* カーソル   */
  padding       : 6px 12px;   /* 余白       */
  background    : #007fff;     /* 背景色     */
  color         : #ffffff;     /* 文字色     */
  font-size: 1rem;             /* フォントサイズ */;
  line-height   : 1em;         /* 1行の高さ  */
  transition    : .3s;         /* なめらか変化 */
  border        : 2px solid #007fff;    /* 枠の指定 */
}
</style>
