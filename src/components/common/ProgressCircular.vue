<template>
  <div class="overlay">
    <div class="loader"></div>
  </div>
</template>

<script>

export default {
  name: 'ProgressCircular',
}
</script>

<style>
.overlay{
  /*要素を重ねた時の順番*/
  z-index:2;

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
.loader {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 4px solid rgb(24, 103, 192);
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
