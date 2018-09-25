<template>
  <div class="flickerapp-PageIndex">
    <searchbox />
    <photolist />
    <pagenation />
  </div>
</template>

<script>
import PhotoList from '@/components/PhotoList.vue'
import SearchBox from '@/components/SearchBox.vue'
import Pagenation from '@/components/Pagenation.vue'

export default {
  name: 'PageIndex',
  data () {
  },
  components: {
    'photolist': PhotoList,
    'searchbox': SearchBox,
    'pagenation': Pagenation,
},
  created () {

  }
}
</script>

<style scoped lang="scss">

</style>
