<template>
  <div class="flickerapp-PageIndex">
    <h1>Flicker Photo List</h1>
    <ul class="flickerapp-PhotoList">
      <li class="flickerapp-PhotoList__child">
        <a href='#'>

        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pageIndex',
  data () {
    return {
      msg: 'page index!!!!',
      isRed: true
    }
  },
  created () {
    console.log(this.$style)
  }
}
</script>

<style module>
.red{
  color:#ff0000;
}
.bold{
  font-weight:bold;
}
</style>
