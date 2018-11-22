<template>
    <div>
      <ul class="flickerapp-PhotoList">
        <li class="flickerapp-PhotoList_child" v-for="p in photos.photo" :key="p.id">
          <router-link :to="{name: 'detail', params: {id:p.id}}">
            <dl>
              <dt><img :src="p.url_sq" :alt="p.title"></dt>
              <dd>{{p.title | cutText}}</dd>
            </dl>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'PhotoList',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['photos'])
  },
  filters:{
    cutText(t){
      var len = 25;
      if(t.length > len){
        return t.substr(0,len) + '...';
      }else{
        return t;
      }
    }
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
      dt{
        img{
          width:100%;
        }
      }
    }
  }
</style>
