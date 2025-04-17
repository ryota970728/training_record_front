<template>
  <div>
    <div class="record-search">
    <!-- ローディング表示を追加 -->
    <progress-circular v-if="isLoading"></progress-circular>
    <!-- 部位 -->
    <div class="radio-container">
      <label v-for="part in getPartList" :key="part.part_id" class="radio-part">
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

    </div>
    <div class="search-wrapper">
      <div>{{ searchPartName }} {{ searchNumberStr }}</div>
      <div v-for="record in filterRecordList" :key="record.record_id" class="search-container">
        <div class="create-date">
          {{ record.create_date }} ({{ getDayOffWeek(record.create_date) }})
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
import ProgressCircular from './common/ProgressCircular.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'RecordSearch',
  components: {
    ProgressCircular, // ローディングコンポーネントを登録
  },
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
      // ローディング状態
      isLoading: false,
    }
  },
  created() {
    this.loadRecordsIfNeeded();
  },
  computed: {
    // mapGettersでヘルパーを使ってストアの state をローカルの computed プロパティにマッピング
    ...mapGetters(['getPartList', 'getMenuList', 'getRecordList']),

    // 選択された部位に紐づくメニューリストを返す
    filteredMenuList() {
      return this.getMenuList.filter(menu => menu.part_id === this.selectedPart);
    },
  },
  methods: {
    // API通信
    ...mapActions(['fetchPartList', 'fetchMenuList', 'fetchRecordList']),

    // データ取得処理をメソッド化
    async loadRecordsIfNeeded() {
      // ストアのリストが空の場合のみデータを取得
      if (this.getRecordList.length === 0) {
        this.isLoading = true;
        try {
          // Promise.allで並行してデータを取得
          await Promise.all([
          this.fetchPartList(),
          this.fetchMenuList(),
          this.fetchRecordList(),
        ]);
        } catch (error) {
          console.error("RecordConfirm: Error fetching record list:", error);
        } finally {
          this.isLoading = false;
        }
      }
    },
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
.record-search {
  padding: 10px;
  border: solid 0.1rem rgb(0,0,0,0.2);
  border-radius: 2%;
  margin: 1rem;
}
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

/** 検索一覧 */
.search-wrapper {
  padding: 5%;
}
/* 検索一覧コンテナ */
.search-container {
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
