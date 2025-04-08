<template>
  <div id="app">
    <div class="header">
      <record-header></record-header>
    </div>
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
import RecordHeader from "./components/RecordHeader.vue";
import RecordFooter from "./components/RecordFooter.vue";

export default {
  name: 'App',
  components: {
    RecordHeader,
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
  padding-top: 5vh; /* 100vhに対して5vhの余白を追加 */;
  padding-bottom: 7vh; /* 100vhに対して7vhの余白を追加 */
}
.header {
  position: fixed; /* 固定位置にする */
  top: 0;
  left: 0;
  width: 100%;
  height: 5vh; /* ヘッダー部分の高さを5vhに設定 */
  background: #df5656;
  color: #ffffff;
}
.footer {
  position: fixed; /* 固定位置にする */
  left: 0;
  bottom: 0;
  width: 100%;
  height: 7vh; /* フッター部分の高さを7vhに設定 */
  background: #df5656;
  color: #ffffff;
}
</style>
