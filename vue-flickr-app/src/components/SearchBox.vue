<template>
  <div class="flickerapp-searchBox">
    <input type='text' class="flickerapp-searchBox_input">
    <button class="flickerapp-searchBox_button">search</button>
  </div>
</template>

<script>
export default {
  name: 'searchBox'
}
</script>

<style scoped lang="scss">
  .flickerapp-searchBox{
    margin: 0 0 30px;
    display:flex;
    justify-content: center;
    &_input{
      width:300px;
      font-size:16px;
      padding:3px;
    }
    &_button{
      border:none;
      background:#eee;
      font-size:14px;
      border-radius:2px;
      cursor:pointer;
    }
  }
</style>
