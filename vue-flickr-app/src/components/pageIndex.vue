<template>
  <div class="flickerapp-pageIndex">
    <MainTitle />
    <SearchBox />
    <PhotoList />
  </div>
</template>

<script>
import PhotoList from '@/components/PhotoList.vue'
import MainTitle from '@/components/MainTitle.vue'
import SearchBox from '@/components/SearchBox.vue'

export default {
  name: 'pageIndex',
  data () {
  },
  components: {
    PhotoList: PhotoList,
    MainTitle: MainTitle,
    SearchBox: SearchBox
},
  created () {

  }
}
</script>

<style scoped lang="scss">

</style>
