<template>
  <div class="flickerapp-PageDetail">
    <h1 class="title">detail</h1>
    <p>このページは ID: {{$route.params.id}}の詳細を表示する</p>
    <div>
      <img src="`https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg`" alt=''>

    </div>
  </div>
</template>

<script>
export default {
  name: 'PageDetail',
  data(){
    return {
    }
  },

  computed:{
  },
  methods:{
  },
  mounted(){
    this.$store.dispatch('getDetailData',{id:this.$route.params.id});
  },
  created(){

  }
}
</script>

<style scoped lang="scss">

</style>
