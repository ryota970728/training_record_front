<template>
  <div class="record-confirm">
    <!-- 記録一覧-->
    <div v-for="(item, index) in sortedFilteredRecords" :key="index" class="record-list">
      <!-- 日付 -->
      <div class="create-date">{{ item.create_date }} ({{ $dateUtils.getDayOfWeek(item.create_date) }})</div>
      <div v-for="record in item.records" :key="record.record_id" class="record-item">
        <!-- 部位 -->
        <div class="part-name" :style="{background: record.part_color, color: '#FFFFFF'}">{{ record.part_name }}</div>
        <!-- 種目 -->
        <div class="menu-name">{{ record.menu_name }}</div>
        <!-- セット詳細 -->
        <div class="set-detail">
          <div v-for="(sets, index) in record.set_detail" :key="index">
            <div>{{ sets.weight }} x {{ sets.reps }}</div>
          </div>
        </div>
        <!-- 備考 -->
        <div v-if="checkNote(record.note)" class="note">{{ record.note }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "RecordConfirm",
  computed: {
    // ストアのゲッターをマッピング
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
    checkNote(note) {
      return note !== "";
    },
  },
};
</script>

<style scoped>
/* 記録一覧 */
.record-list {
  padding: 1rem;
  font-size: 14px;
}
/* 記録項目 */
.record-item {
  display: grid;
  grid-template-columns: 1fr 7fr 2fr;
  border-bottom: 1px solid black;
  align-items: center;
  padding: 2%;
}
/* 日付 */
.create-date {
  text-align: left;
}
/* 部位名 */
.part-name {
  grid-column: 1/2;
}
/* 種目名 */
.menu-name {
  text-align: center;
  grid-column: 2/3;
  padding-left: 0.5rem;
}
/* セット数 */
.set-count {
  grid-column: 3/4;
}
/* セット詳細 */
.set-detail {
  grid-column: 3/4;
  text-align: right;
}
/* 備考 */
.note {
  font-size: 10px;
  grid-column: 2/3;
}
</style>
