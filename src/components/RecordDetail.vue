<template>
  <div>
    <!-- 部位 -->
    <div>
      <label v-for="part in parts" :key="part.id">
        <input type="radio" v-model="selectedPart" :value="part.id">
        {{ part.name }}
      </label>
    </div>
    <!-- 種目 -->
    <div>
       <select v-model="selectedMenu">
        <option disabled value="">選択してください</option>
        <option v-for="(menu, index) in menuList[selectedPart]" :key="index" :value="menu">
          {{ menu }}
        </option>
       </select>
    </div>
    <!-- セット数 -->
    <div>
      <label>セット数：</label><input type="number" v-model="sets" @input="updateSets">
    </div>
    <div v-for="(value, index) in weightSetsList" :key="index">
      <weight-sets
      :weight="value.weight"
      :reps="value.reps"
      @update-weight="updateWeight($event, index)"
      @update-reps="updateReps($event, index)"
      ></weight-sets>
    </div>
    <div>
      <label>備考欄：</label><textarea v-model="note"></textarea>
    </div>
    <!-- <button @click="childTest">子テスト</button> -->
  </div>
</template>

<script>
import WeightSets from "./WeightSets.vue";
import { FUNCTIONS_URL } from "@/Constant.js";

export default {
  name: "RecordDetail",
  components: {
    WeightSets,
  },
  props: {
    todayDate: String
  },
  data() {
    return {
      // 部位の一覧
      parts: [
        { id: 1, name: "胸" },
        { id: 2, name: "肩" },
        { id: 3, name: "背中" },
        { id: 4, name: "腕" }
      ],
      // ラジオボタンで選択された部位ID（デフォルトあり）
      selectedPart: 1,
      // セット数
      sets: 3,
      // 重量
      weight: '',
      // 回数
      reps: '',
      // 種目の一覧
      menuList: {},
      // プルダウンで選択された種目名
      selectedMenu: '',
      // 備考欄
      note: '',
      // 各セットのデータ（重量と回数）
      weightSetsList: [],
      // 重量リスト
      weightList: [],
      // 回数リスト
      repsList: [],
    }
  },
  mounted(){
    this.getMenu();
    this.updateSets(); // 初期化時に `sets` の数だけ配列を作成
  },
  watch: {
    // selectedPartが変更されるたびにメニューをリセット
    selectedPart() {
      this.selectedMenu = '';  // 新しく選択された部位に関連するメニューをリセット
    }
  },
  methods: {
    // 入力を半角数字のみ許可するバリデーション
    validateInput(field){
      // 入力された値が半角数字のみでない場合、削除する
      if (field === 'sets') {
        this.sets = this.sets.replace(/[^0-9]/g, '');
      } else if (field === 'weight') {
        this.weight = this.weight.replace(/[^0-9.]/g, '');
      } else if (field === 'reps') {
        this.reps = this.reps.replace(/[^0-9]/g, '');
      }
    },
    /// 種目一覧を取得する関数
    getMenu(){
      this.$axios.get(FUNCTIONS_URL.GET_MENU)
      .then((res) =>{
        this.menuList = res.data;
      }).catch((err) =>{
        console.log(err);
      })
    },
    // セットを更新
    updateSets() {
      // `sets` の値に応じて weightSetsList の配列を調整
      const newSets = Number(this.sets);
      if (newSets > this.weightSetsList.length) {
        // 増やす場合、新しいセットを追加
        for (let i = this.weightSetsList.length; i < newSets; i++) {
          this.weightSetsList.push({ weight: 0, reps: 0 });
        }
      } else {
        // 減らす場合、不要なセットを削除
        this.weightSetsList = this.weightSetsList.slice(0, newSets);
      }
    },
    updateWeight(newWeight, index) {
      // 特定のセットの重量を更新
      this.weightList[index] = newWeight;
    },
    updateReps(newReps, index) {
      // 特定のセットの回数を更新
      this.repsList[index] = newReps;
    },
    // 「送信」ボタンが押下された際に動く関数
    setRecordDetailData() {
      const newData = {
        partId: this.selectedPart,
        menuName: this.selectedMenu,
        setCount: this.sets,
        weight: this.weightList,
        reps: this.repsList,
        createDate: this.todayDate,
        note: this.note
      };
      // 親のデータを更新
      this.$emit('update-array', newData);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
