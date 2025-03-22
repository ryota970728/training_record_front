<template>
  <div class="record-footer-container">
    <div class="record-item">
      <router-link to="/record">
        <div class="record-img"></div>
        <div class="record-text">記録</div>
      </router-link>
    </div>
    <div class="confirm-item">
      <router-link to="/confirm">
        <div class="confirm-img"></div>
        <div class="confirm-text">記録一覧</div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "RecordFooter",
  data() {
    return {
    }
  },
};
</script>

<style scoped>
.record-footer-container {
  display: flex;
  justify-content: space-around; /* 水平方向に均等配置 */
  border-top: 1px solid rgba(0, 0, 0, 0.2); /* 上部に枠線 */
  padding-top: 10px;
}
/** 記録 */
.record-item {
  padding: 5px;
}
.record-text {
  font-size: 12px;
}
.record-item a {
  text-decoration: none; /* リンクの取り消し線 */
  color: inherit; /* 親要素の文字色を継承 */
}
.record-img {
  background-image: url('@/assets/record.png');
  background-repeat: no-repeat;
  background-size: contain; /* 画像をボタン内に収める */
  background-position: center; /* 画像を中央に配置 */
  width: 40px; /* 画像に合わせてボタンの幅を設定 */
  height: 40px; /* 画像に合わせてボタンの高さを設定 */
  border: none; /* ボタンのボーダーを削除 */
  padding: 0; /* ボタンのパディングを削除 */
  cursor: pointer; /* カーソルをポインターに変更 */
}
/** 記録一覧 */
.confirm-item {
  padding: 5px;
}
.confirm-text {
  font-size: 12px;
}
.confirm-item a {
  text-decoration: none; /* リンクの取り消し線 */
  color: inherit; /* 親要素の文字色を継承 */
}
.confirm-img {
  background-image: url('@/assets/recordconfirm.png');
  background-repeat: no-repeat;
  background-size: contain; /* 画像をボタン内に収める */
  background-position: center; /* 画像を中央に配置 */
  width: 40px; /* 画像に合わせてボタンの幅を設定 */
  height: 40px; /* 画像に合わせてボタンの高さを設定 */
  border: none; /* ボタンのボーダーを削除 */
  padding: 0; /* ボタンのパディングを削除 */
  cursor: pointer; /* カーソルをポインターに変更 */
}
</style>
