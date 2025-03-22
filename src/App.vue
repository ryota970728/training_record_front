<template>
  <div id="app">
    <main class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>
    <div class="footer">
      <record-footer></record-footer>
    </div>
  </div>
</template>

<script>
import RecordFooter from "./components/RecordFooter.vue";

export default {
  name: 'App',
  components: {
    RecordFooter,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh; /* 画面の高さを最低限100vhに設定 */
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1; /* フッター部分以外を可変長にする */
  padding-bottom: 10vh; /* 100vhに対して10vhの余白を追加 */
}
.footer {
  position: fixed; /* 固定位置にする */
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10vh; /* フッター部分の高さを10vhに設定 */
  background: #FFFFFF;
}
</style>
