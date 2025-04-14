<template>
  <div class="record-detail">
    <!-- 部位 -->
    <div class="part-container">
      <label v-for="part in getPartList" :key="part.part_id" class="radio-part">
        <input type="radio" v-model="selectedPart" :value="part.part_id">
        {{ part.part_name }}
      </label>
    </div>
    <!-- 種目 -->
    <div class="menu-container">
       <select v-model="selectedMenu" class="select-menu">
        <option disabled value="">選択してください</option>
        <option v-for="menu in filteredMenuList" :key="menu.menu_id" :value="menu.menu_name">
          {{ menu.menu_name }}
        </option>
       </select>
    </div>
        <!-- セット数 -->
    <div class="set-count-container">
      <label>セット数：</label><input class="set-count" type="number" v-model="setCount" @input="updateSets">
    </div>
    <!-- 重量と回数 -->
    <div v-for="(value, index) in setCountList" :key="index" class="weight-sets-container">
      <weight-sets
      @update-weight="updateWeight($event, index)"
      @update-reps="updateReps($event, index)"
      ref="child"
      ></weight-sets>
    </div>
    <!-- 備考欄 -->
    <div class="note-container">
      <textarea v-model="note" class="textarea-note"></textarea>
    </div>
  </div>
</template>

<script>
import WeightSets from "./WeightSets.vue";
import { mapGetters } from 'vuex';

export default {
  name: "RecordDetail",
  components: {
    WeightSets,
  },
  props: {
    createDate: String,
  },
  data() {
    return {
      // ラジオボタンで選択された部位ID（デフォルトあり）
      selectedPart: 1,
      // プルダウンで選択された種目名
      selectedMenu: '',
      // セット数
      setCount: 3,
      // セット数リスト
      setCountList: [],
      // 備考欄
      note: '',
      // 重量リスト
      weightList: [],
      // 回数リスト
      repsList: [],
    }
  },
  mounted(){
    this.updateSets(); // 初期化時に `setCount` の数だけ配列を作成
  },
  watch: {
    // selectedPartが変更されるたびにメニューをリセット
    selectedPart() {
      this.selectedMenu = '';  // 新しく選択された部位に関連するメニューをリセット
    }
  },
  computed: {
    // mapGettersでヘルパーを使ってストアの state をローカルの computed プロパティにマッピング
    ...mapGetters(['getPartList', 'getMenuList', 'getRecordList']),

    // 選択された部位に紐づくメニューリストを返す
    filteredMenuList() {
      return this.getMenuList.filter(menu => menu.part_id === this.selectedPart);
    },
  },
  methods: {
    // セットを更新
    updateSets() {
      // `setCount` の値に応じて setCountList の配列を調整
      const newSets = Number(this.setCount);
      if (newSets > this.setCountList.length) {
        // 増やす場合、新しいセットを追加
        for (let i = this.setCountList.length; i < newSets; i++) {
          this.setCountList.push(i);
        }
      } else {
        // 減らす場合、不要なセットを削除
        this.setCountList = this.setCountList.slice(0, newSets);
      }
    },
    // 重量を更新
    updateWeight(newWeight, index) {
      // 特定のセットの重量を更新
      this.weightList[index] = newWeight;
    },
    // 回数を更新
    updateReps(newReps, index) {
      // 特定のセットの回数を更新
      this.repsList[index] = newReps;
    },
    // 「送信」ボタンが押下された際に動く関数
    checkRecordDetailData() {
      // 入力チェック
      if (!this.selectedMenu) {
        alert('種目を選択してください');
        return true;
      }
      if (!this.setCount || this.setCount === '0') {
        alert('セット数を入力してください');
        return true;
      }
      for (let i = 0; i < this.setCountList.length; i++) {
        if (!this.weightList[i] || !this.repsList[i]) {
          alert('重量と回数を入力してください');
          return true;
        }
      }
      const newData = {
        partId: this.selectedPart,
        menuName: this.selectedMenu,
        setCount: this.setCount,
        weight: this.weightList,
        reps: this.repsList,
        createDate: this.createDate,
        note: this.note
      };
      // 親のデータを更新
      this.$emit('update-array', newData);
    },
    // 入力フォームの初期化
    clearRecordDetailData(){
      this.selectedPart = 1;
      this.selectedMenu = '';
      this.setCount = 3;
      this.note = '';
      this.setCountList = []; // setCountList を空の配列に初期化
      this.weightList = []; // weightList を空の配列に初期化
      this.repsList = [];   // repsList を空の配列に初期化
      this.updateSets(); // 初期化時に `setCount` の数だけ配列を作成

      // 全ての子コンポーネントをループ
      this.$refs.child.forEach(child => {
        if (child && child.clearWeightSetslData){
          // 子コンポーネントのclearWeightSetslData()を呼び出す
          child.clearWeightSetslData();
        }
      });
    },
  }
}
</script>


<style scoped>
/* レコード詳細のスタイル */
.record-detail {
  padding: 10px;
  border: solid 0.1rem rgb(0,0,0,0.2);
  border-radius: 2%;
  margin: 1rem;
}

/* 部位-コンテナ */
.part-container {
  display: flex;
  flex-wrap: wrap; /* 子要素の折り返し設定 */
  justify-content: center; /* 水平方向の配置設定 */
  padding: 0 20%;
  gap: 0 10px; /* 要素間の間隔を設定 */
  margin: 5px;
}

/* 部位-ラジオボタン */
.radio-part {
  display: flex;
  align-items: center;
  margin-bottom: 5px; /* ラベル間の下マージンを設定 */
  font-size: 1.3rem;
}

/* 種目-コンテナ */
.menu-container {
  display: inline-block;
  margin: 5px;
}

/* 種目-ドロップダウン */
.select-menu {
  width: auto;
  width: auto;
  height: 25px;
  font-size: 1rem;
  text-align: center;
}

/* セット数-コンテナ */
.set-count-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  gap: 0.5rem;
}

/* セット数-入力フィールド */
.set-count{
  width: 50px;
  font-size: 1.2rem;
}

/* セット数-コンテナ */
.weiht-sets-container {
  margin: 5px;
}

/* 備考-コンテナ */
.note-container {
  margin: 5px;
}

/* 備考-テキストエリア */
.textarea-note {
  font-size: 1rem;

}
</style>
