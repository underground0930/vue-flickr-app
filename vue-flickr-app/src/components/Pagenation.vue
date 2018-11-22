<template>
  <div v-if="photos" class="flickerapp-Pagenation">
    <a href='#' v-if="page >= 2" class="flickerapp-Pagenation_prev" @click.prevent="getIndexData({page: page - 1 })">&lt; 前へ</a>
    <ul class="flickerapp-Pagenation_List">
      <li v-if="page >= 3" class="flickerapp-Pagenation_ListChild">
        <a class="flickerapp-Pagenation_ListLink" href='#' @click.prevent="getIndexData({page: page - 2 })">{{page - 2}}</a>
      </li>
      <li v-if="page >= 2" class="flickerapp-Pagenation_ListChild">
        <a class="flickerapp-Pagenation_ListLink" href='#' @click.prevent="getIndexData({page: page - 1 })">{{page - 1}}</a>
      </li>
      <li v-if="page >= 1" class="flickerapp-Pagenation_ListChild">
        <b class="flickerapp-Pagenation_ListLink current">{{page}}</b>
      </li>
      <li v-if="page >= 0" class="flickerapp-Pagenation_ListChild">
        <a class="flickerapp-Pagenation_ListLink" href='#' @click.prevent="getIndexData({page: page + 1 })">{{page + 1}}</a>
      </li>
      <li v-if="page >= -1" class="flickerapp-Pagenation_ListChild">
        <a class="flickerapp-Pagenation_ListLink" href='#' @click.prevent="getIndexData({page: page + 2 })">{{page + 2}}</a>
      </li>
    </ul>
    <a href='#' v-if="page >= 0" class="flickerapp-Pagenation_next" @click.prevent="getIndexData({page: page + 1 })">次へ &gt;</a>
  </div>
</template>

<script>
import {mapState,mapActions, mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters(['page','pages']),
    ...mapState(['photos'])
  },
  methods:{
    ...mapActions(['getIndexData'])
  }
}
</script>

<style scope="scoped" lang="scss">
  .flickerapp-Pagenation{
    display:flex;
    justify-content: center;
    margin: 0 0 30px;
    &_List{
      display:flex;
      margin: 0 10px 0;
    }
    &_ListChild{
      margin: 0 10px 0;
    }
    &_ListLink{
      &.current{
        font-weight: bold;
        color:#000;
      }
    }
  }
</style>

