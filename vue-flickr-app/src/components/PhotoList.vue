<template>
    <div>
      <input type='text' v-model="text">
      <button @click="getdata">検索</button>
      <ul class="flickerapp-PhotoList">
        <li class="flickerapp-PhotoList_child" v-for="p in photos.photo" :key="p.id">
          <a href='#'>
            <dl>
              <dt><img :src="p.url_sq" alt=''></dt>
              <dd>{{p.title}}</dd>
            </dl>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>

export default {
  name: 'PhotoList',
  data () {
    return {
      text: null,
    }
  },
  computed: {
    photos(){
      return this.$store.state.photos
    }
  },
  methods: {
    getdata () {
      this.$store.dispatch('getData',{text:this.text});
    }
  },
  mounted () {
  },
  created() {
  }
}
</script>

<style scoped lang="scss">
  .flickerapp-PhotoList{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    width:860px;
    margin: 0 auto 0;
    &:before{
      content:"";
      display: block;
      width: 200px;
      order:1;
    }
    &::after{
      content:"";
      display: block;
      width: 200px;
    }
    &_child{
      width: 200px;
      margin-bottom:20px;
      a{
        display:block;
      }
      dl{}
      dt{
        img{
          width:100%;
        }
      }
      dd{}
    }
  }
</style>
