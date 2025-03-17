<template>
  <div>
    <!-- 部位 -->
    <div>
      <label v-for="part in partList" :key="part.part_id">
        <input type="radio" v-model="selectedPart" :value="part.part_id">
        {{ part.part_name }}
      </label>
    </div>
    <!-- 種目 -->
    <div>
       <select v-model="selectedMenu">
        <option disabled value="">選択してください</option>
        <option v-for="menu in filteredMenuList" :key="menu.menu_id" :value="menu.menu_name">
          {{ menu.menu_name }}
        </option>
       </select>
    </div>
    <!-- セット数 -->
    <div>
      <label>セット数：</label><input class="set-count" type="number" v-model="setCount" @input="updateSets">
    </div>
    <div v-for="(value, index) in setCountList" :key="index">
      <weight-sets
      @update-weight="updateWeight($event, index)"
      @update-reps="updateReps($event, index)"
      ref="child"
      ></weight-sets>
    </div>
    <div>
      <label>備考欄：</label><textarea v-model="note"></textarea>
    </div>

  </div>
</template>

<script>
import WeightSets from "./WeightSets.vue";

export default {
  name: "RecordDetail",
  components: {
    WeightSets,
  },
  props: {
    createDate: String,
    partList: Array,
    menuList: Array,
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
    // 選択された部位に紐づくメニューリストを返す
    filteredMenuList() {
      return this.menuList.filter(menu => menu.part_id === this.selectedPart);
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
    setRecordDetailData() {
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.set-count{
  width: 50px;
}
</style>
