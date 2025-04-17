<template>
  <div>
    <!-- ローディング表示を追加 -->
    <progress-circular v-if="isLoading"></progress-circular>
    <div v-for="(item, index) in sortedFilteredRecords" :key="index" class="record">
      <div class="create-date">{{ item.create_date }} ({{ getDayOffWeek(item.create_date) }})</div>
      <div v-for="record in item.records" :key="record.record_id" class="container">
        <div class="part-name" :style="{background: record.part_color, color: '#FFFFFF'}">{{ record.part_name }}</div>
        <div class="menu-name">{{ record.menu_name }}</div>
        <div class="set-detail">
          <div v-for="(sets, index) in record.set_detail" :key="index">
          <div>{{ sets.weight }} x {{ sets.reps }}</div>
        </div>
        </div>
        <div v-if="checkNote(record.note)" class="note">{{ record.note }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressCircular from './common/ProgressCircular.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "RecordConfirm",
  components: {
    ProgressCircular, // ローディングコンポーネントを登録
  },
  data() {
    return {
      // ローディング状態
      isLoading: false,
    }
  },
  created() {
    this.loadRecordsIfNeeded();
  },
  computed: {
    // mapGettersでヘルパーを使ってストアの state をローカルの computed プロパティにマッピング
    ...mapGetters(['getRecordList']),

    // filteredRecordsをcreate_dateでグループ化
    filteredRecords() {
      // create_dateでグループ化
      const grouped = this.getRecordList.reduce((acc, record) => {
        const date = record.create_date;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push({
          record_id: record.record_id,
          menu_name: record.menu_master.menu_name,
          part_name: record.part_master.part_name,
          part_color: record.part_master.part_color,
          set_count: record.set_count,
          set_detail: record.set_detail,
          note: record.note,
        });
        return acc;
      }, {});

      // グループ化されたデータを配列に変換
      return Object.keys(grouped).map((date) => ({
        create_date: date,
        records: grouped[date],
      }));
    },
    sortedFilteredRecords() {
      // filteredRecordsをcreate_dateで降順にソート
      return this.filteredRecords.slice().sort((a, b) => {
        return new Date(b.create_date) - new Date(a.create_date);
      });
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
    // 曜日を取得
    getDayOffWeek(dateString) {
      const date = new Date(dateString);
      // 曜日の配列
      const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"];
      // 曜日を取得
      const dayOfWeek = date.getDay();
      // 曜日を返す
      return dayOfWeekStr[dayOfWeek];
    },
    checkNote(note) {
      return note !== "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.record {
  padding: 1rem;
  font-size: 14px;
}
.container {
  display: grid;
  grid-template-columns: 1fr 7fr 2fr;
  border-bottom: 1px solid black;
  align-items: center;
  padding: 2%;
}
.create-date {
  text-align: left;
}
.part-name {
  grid-column: 1/2;
}
.menu-name {
  text-align: center;
  grid-column: 2/3;
  padding-left: 0.5rem;
}
.set-count {
  grid-column: 3/4;
}
.set-detail {
  grid-column: 3/4;
  text-align: right;
}
.note {
  font-size: 10px;
  grid-column: 2/3;
}
</style>
