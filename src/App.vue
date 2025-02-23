<template>
  <div id="app">
    <record-home></record-home>
  </div>
</template>

<script>
import RecordHome from './components/RecordHome.vue';

export default {
  name: 'App',
  components: {
    RecordHome,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
