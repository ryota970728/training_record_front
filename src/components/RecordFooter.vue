<template>
  <div class="record-footer-container">
    <div class="fotter-item record-item">
      <router-link to="/record">
        <div class="link-img record-img"></div>
        <div class="title-text">記録</div>
      </router-link>
    </div>
    <div class="fotter-item confirm-item">
      <router-link to="/confirm">
        <div class="link-img confirm-img"></div>
        <div class="title-text">記録一覧</div>
      </router-link>
    </div>
    <div class="fotter-item search-item">
      <router-link to="/search">
        <div class="link-img search-img"></div>
        <div class="title-text">検索</div>
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
  padding-top: 2px;
}
/* 共通 */
.link-img {
  background-repeat: no-repeat;
  background-size: contain; /* 画像をボタン内に収める */
  background-position: center; /* 画像を中央に配置 */
  width: 30px; /* 画像に合わせてボタンの幅を設定 */
  height: 30px; /* 画像に合わせてボタンの高さを設定 */
  margin: auto; /* ボタンの中央に画像を表示 */
  border: none; /* ボタンのボーダーを削除 */
  padding: 0; /* ボタンのパディングを削除 */
  cursor: pointer; /* カーソルをポインターに変更 */
}
.fotter-item a {
  text-decoration: none; /* リンクの取り消し線 */
  color: inherit; /* 親要素の文字色を継承 */
}
.title-text {
  font-size: 10px;
}
/** 記録 */
.record-img {
  background-image: url('@/assets/record.png');
}
/** 記録一覧 */
.confirm-img {
  background-image: url('@/assets/recordconfirm.png');
}
/** 記録検索 */
.search-img {
  background-image: url('@/assets/search.png');
}
</style>
