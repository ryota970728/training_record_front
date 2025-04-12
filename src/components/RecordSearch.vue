<template>
  <div>
    <!-- 部位 -->
    <div class="radio-container">
      <label v-for="part in partList" :key="part.part_id" class="radio-part">
        <input type="radio" v-model="selectedPart" :value="part.part_id">
        {{ part.part_name }}
      </label>
    </div>
    <!-- 種目 -->
    <div class="select-container">
       <select v-model="selectedMenu" class="select-menu">
        <option disabled value="">選択してください</option>
        <option v-for="menu in filteredMenuList" :key="menu.menu_id" :value="menu.menu_name">
          {{ menu.menu_name }}
        </option>
       </select>
    </div>
    <div>
      <button @click="searchRecordData" class="search-button">検索</button>
    </div>

    <div class="search-wrapper">
      <div>{{ searchPartName }} {{ searchNumberStr }}</div>
      <div v-for="record in filterRecordList" :key="record.record_id" class="search-container">
        {{ record.create_date }} ({{ getDayOffWeek(record.create_date) }})
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

export default {
  name: 'RecordSearch',
  data() {
    return {
      partList: [],
      menuList: [],
      selectedPart: 1,
      selectedMenu: '',
      recordList: [],
      searchPartName: '',
      filterRecordList:[],
      searchNumber: 0,
      searchNumberStr: '',
    }
  },
  mounted() {
    // セッションストレージから値を取得する
    this.partList = JSON.parse(sessionStorage.getItem('partList'));
    this.menuList = JSON.parse(sessionStorage.getItem('menuList'));
    this.recordList = JSON.parse(sessionStorage.getItem('recordList'));
  },
  computed: {
    // 選択された部位に紐づくメニューリストを返す
    filteredMenuList() {
      return this.menuList.filter(menu => menu.part_id === this.selectedPart);
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
      this.filterRecordList = this.recordList.filter(record => {
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
    getDayOffWeek(dateString) {
      const date = new Date(dateString);
      // 曜日の配列
      const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"];
      // 曜日を取得
      const dayOfWeek = date.getDay();
      // 曜日を返す
      return dayOfWeekStr[dayOfWeek];
    },
  },
}
</script>

<style scoped>
/* 部位-コンテナ */
.radio-container {
  display: flex;
  flex-wrap: wrap; /* 子要素の折り返し設定 */
  justify-content: center; /* 水平方向の配置設定 */
  padding: 0 20%;
  gap: 0 10px; /* 要素間の間隔を設定 */
  margin: 5px;
}

/* 部位-ラジオボタン */
.radio-part {
  display: flex;
  align-items: center;
  margin-bottom: 5px; /* ラベル間の下マージンを設定 */
  font-size: 1.3rem;
}

/* 種目-コンテナ */
.select-container {
  display: inline-block;
  margin: 5px;
}

/* 種目-ドロップダウン */
.select-menu {
  width: auto;
  width: auto;
  height: 25px;
  font-size: 1rem;
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

/** 検索一覧 */
.search-wrapper {
  padding: 5%;
}
.search-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid black;
  gap: 20%;
}
</style>
