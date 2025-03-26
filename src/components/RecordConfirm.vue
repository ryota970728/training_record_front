<template>
  <div>
    <div v-for="(item, index) in sortedFilteredRecords" :key="index" class="record">
      <div class="create-date">{{ item.create_date }} ({{ getDayOffWeek(item.create_date) }})</div>
      <div v-for="record in item.records" :key="record.record_id" class="container">
        <div class="part-name">{{ record.part_name }}</div>
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
import { FUNCTIONS_URL } from '@/constant.js'

export default {
  name: "RecordConfirm",
  data() {
    return {
      // 記録一覧
      recordList: [],
    }
  },
  mounted() {
    this.fetchRecords();
  },
  computed: {
    filteredRecords() {
      // create_dateでグループ化
      const grouped = this.recordList.reduce((acc, record) => {
        const date = record.create_date;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push({
          record_id: record.record_id,
          menu_name: record.menu_master.menu_name,
          part_name: record.part_master.part_name,
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
    fetchRecords() {
      this.$axios
        .get(FUNCTIONS_URL.GET_RECORDS, {
          headers: {
            Authorization: FUNCTIONS_URL.AUTHORIZATION,
          },
        })
        .then((res) => {
          this.recordList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
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
    checkNote(note) {
      return note !== "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.record {
  padding: 5%
}
.container {
  display: grid;
  grid-template-columns: 1fr 6fr 3fr;
  border-bottom: 1px solid black;
  align-items: center;
  padding: 2%;
}
.create-date {
  text-align: left;
}
.part-name {
  grid-column: 1/2
}
.menu-name {
  text-align: center;
  grid-column: 2/3;
}
.set-count {
  grid-column: 3/4
}
.set-detail {
  grid-column: 3/4;
}
.note {
  font-size: 10px;
  grid-column: 2/3;
}
</style>
