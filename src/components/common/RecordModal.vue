<template>
  <div class="overlay">
    <div class="modal-content">
      <p>送信しますか？</p>
      <div class="btn-group">
        <button class="btn" @click="clickOK">OK</button>
        <button class="btn" @click="clickCancel">キャンセル</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RecordModal',
  methods: {
    clickCancel() {
      this.$emit('cancel');
    },
    clickOK() {
      this.$emit('ok');
    },
  }
}
</script>

<style scoped>
.overlay{
  /*要素を重ねた時の順番*/
  z-index:1;

  /*画面全体を覆う設定*/
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.3);

  /*画面の中央に要素を表示させる設定*/
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-group{
  display: flex;
  justify-content: center;
  gap: 0.5em;
}
.btn {
  background: #007fff;
  color: #fff;
  border: 2px solid #007fff;
  padding: 0.5em 1em;
  width: 50%;
}
.modal-content{
  z-index: 1;
  width: 65%;
  height: 15%;
  border-radius: 3%;
  padding: 1em;
  background: #fff;
}
</style>
