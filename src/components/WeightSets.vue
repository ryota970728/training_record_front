<template>
  <div>
    <div>
      <label><input class="weightBox" type="number" v-model="weight" @input="updateWeight">kg</label>
      <label><input class="repsBox" type="number" v-model="reps" @input="updateReps">回</label>
    </div>
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
  }
}
</script>

<style scoped>
.weightBox {
  margin: 5px 3px 5px 0px;
}
.repsBox{
  margin: 5px 3px 5px 10px;

}
</style>
