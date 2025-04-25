<template>
  <div class="weight-sets">
    <label><input class="weight-input" type="number" v-model="weight" @input="updateWeight">kg</label>
    <label><input class="reps-input" type="number" v-model="reps" @input="updateReps">回</label>
  </div>
</template>

<script>

export default {
  name: "WeightSets",
  data() {
    return {
      weight: '',
      reps: '',
    }
  },
  methods: {
    // 重量の値が変更されるたびにイベントを発火する
    updateWeight() {
      this.$emit("update-weight", this.weight)
    },
    // 回数の値が変更されるたびにイベントを発火する
    updateReps() {
      this.$emit("update-reps", this.reps);
    },
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
    // 重量と回数の初期化
    clearWeightSetslData() {
      this.weight = '';
      this.reps = '';
    },
  }
}
</script>

<style scoped>
/* 重量と回数 */
.weight-sets {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

/* 重量の入力フィールド */
.weight-input {
  margin: 5px 3px 5px 0px;
  width: 50px;
  font-size: 1.2rem;;
}

/* 回数の入力フィールド */
.reps-input{
  margin: 5px 3px 5px 10px;
  width: 50px;
  font-size: 1.2rem;
}
</style>
