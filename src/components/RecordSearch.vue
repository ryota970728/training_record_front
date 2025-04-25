<template>
  <div class="record-search">
    <!-- 検索エリア -->
    <div class="search-area-wrapper">
      <!-- 部位 -->
      <div class="part-container">
        <label v-for="part in getPartList" :key="part.part_id" class="part-radio">
          <input type="radio" v-model="selectedPart" :value="part.part_id">
          {{ part.part_name }}
        </label>
      </div>
      <!-- 種目 -->
      <div class="menu-container">
        <select v-model="selectedMenu" class="menu-select">
          <option disabled value="">選択してください</option>
          <option v-for="menu in filteredMenuList" :key="menu.menu_id" :value="menu.menu_name">
            {{ menu.menu_name }}
          </option>
        </select>
      </div>
      <!-- 検索ボタン -->
      <div>
        <button @click="searchRecordData" class="search-button">検索</button>
      </div>
    </div>

    <!-- 検索結果 -->
    <div class="search-result-wrapper">
      <div>{{ searchPartName }} {{ searchNumberStr }}</div>
      <div v-for="record in filterRecordList" :key="record.record_id" class="search-result-container">
        <div class="create-date">
          {{ record.create_date }} ({{ $dateUtils.getDayOfWeek(record.create_date) }})
        </div>
        <div class="note">{{ record.note }}</div>
        <div class="set-detail">
          <div v-for="(sets, index) in record.set_detail" :key="index">
            {{ sets.weight }} x {{ sets.reps }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'RecordSearch',
  data() {
    return {
      // ラジオボタンで選択された部位ID（デフォルトあり）
      selectedPart: 1,
      // プルダウンで選択された種目名
      selectedMenu: '',
      // 検索条件(部位)
      searchPartName: '',
      // 検索結果
      filterRecordList:[],
      // 検索件数
      searchNumber: 0,
      // 検索件数の文字列
      searchNumberStr: '',
    }
  },
  computed: {
    // ストアのゲッターをマッピング
    ...mapGetters(['getPartList', 'getMenuList', 'getRecordList']),

    // 選択された部位に紐づくメニューリストを返す
    filteredMenuList() {
      return this.getMenuList.filter(menu => menu.part_id === this.selectedPart);
    },
  },
  methods: {
    searchRecordData() {
      if (!this.selectedMenu) {
        // プルダウンに値がセットされているか確認
        alert('種目を選択してください');
        return;
      }
      // 選択した条件に応じて検索する
      this.searchPartName = this.selectedMenu;
      this.filterRecordList = this.getRecordList.filter(record => {
        // 選択された種目でフィルタリング
        return this.selectedMenu == record.menu_master.menu_name;
      })
      .sort((a, b) => {
        // 日付でソート（降順）
        return new Date(b.create_date) - new Date(a.create_date)
      });
      this.searchNumber = this.filterRecordList.length;
      this.searchNumberStr = '：' + this.searchNumber + '件';
    },
  },
}
</script>


<style scoped>
/** 検索エリア */
.search-area-wrapper {
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
.part-radio {
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
.menu-select {
  width: auto;
  width: auto;
  height: 25px;
  font-size: 1rem;
  text-align: center;
}

/* 検索ボタン */
.search-button {
  margin: 15px;
  display       : inline-block;
  text-align    : center;      /* 文字位置   */
  cursor        : pointer;     /* カーソル   */
  padding       : 6px 12px;   /* 余白       */
  background    : #007fff;     /* 背景色     */
  color         : #ffffff;     /* 文字色     */
  font-size: 1rem;             /* フォントサイズ */;
  line-height   : 1em;         /* 1行の高さ  */
  transition    : .3s;         /* なめらか変化 */
  border        : 2px solid #007fff;    /* 枠の指定 */
}

/** 検索結果一覧 */
.search-result-wrapper {
  padding: 5%;
}
/* 検索結果一覧コンテナ */
.search-result-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid black;
}
/* 日付 */
.create-date {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  text-align: left;
}
/* 備考 */
.note {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  text-align: left;
  font-size: 0.8rem;

}
/* セット詳細 */
.set-detail {
  text-align: right;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}
</style>
