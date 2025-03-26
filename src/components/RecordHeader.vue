<template>
  <div class="header">
    <div class="title">
      {{ pageTitle }}
    </div>
  </div>
</template>

<script>

export default {
  name: "RecordHeader",
  data() {
    return {
      pageTitle: '',
    }
  },
  mounted() {
    this.updatePageTitle();
    this.$router.afterEach(() => {
      this.updatePageTitle();
    })
  },
  methods: {
    updatePageTitle() {
      this.pageTitle = this.$route.meta.title || "";
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2); /* 下部に枠線 */
}
.title {
  font-weight: bold;
}
</style>
