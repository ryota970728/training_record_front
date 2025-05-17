<template>
  <div class="record-confirm">
    <div class="delete-mode-button-container">
      <button @click="deleteMode" class="delete-mode-button">{{isDeleteMode ? '削除解除' : '削除'}}</button>
    </div>
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
        <!-- 削除ボタン -->
        <div v-if="isDeleteMode" class="delete-button-container">
          <button @click="deleteRecord(record.record_id)" class="delete-record-button">削除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "RecordConfirm",
  data() {
    return {
      isDeleteMode: false, // 削除モードのフラグ
    }
  },
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
    // ストアのアクションをマッピング
    ...mapActions(['fetchRecordList']),

    checkNote(note) {
      return note !== "";
    },
    // 削除モード
    deleteMode() {
      this.isDeleteMode = !this.isDeleteMode;
    },
    // レコード削除
    async deleteRecord(recordId) {
      // モーダルを表示させる
      if(!confirm("本当に削除しますか？")){
        return;
      }
      // 削除処理
      const isSuccess = await this.$apiService.deleteRecordData(recordId);
      if (isSuccess) {
        // 削除成功
        alert("削除に成功しました。");
        this.fetchRecordList(); // ストアの記録リストを更新
      }else{
        // 削除失敗
        alert("削除に失敗しました。");
      }
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
  grid-template-columns: v-bind("isDeleteMode ? '1fr 7fr auto auto' : '1fr 7fr auto'");
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
/* 削除ボタン-コンテナ */
.delete-button-container {
  grid-column: 4/5;
  grid-row: 1/3;
  text-align: right;
  padding-left: 0.5rem;
}
/* 削除ボタン */
.delete-record-button {
  background: #ff0019;
  color: #fff;
  border: 2px solid #ff0019;
}
/* 削除モードボタン-コンテナ */
.delete-mode-button-container {
  padding-right: 1rem;
  text-align: right;
}
/* 削除モードボタン */
.delete-mode-button {
  border: none;
  background: none;
  color: #007fff;
  text-decoration: underline;
}
</style>
