<template>
  <div class="flickerapp-PageIndex">
    <searchbox />
    <pagenation />
    <photolist />
  </div>
</template>

<script>
import PhotoList from '@/components/PhotoList.vue'
import SearchBox from '@/components/SearchBox.vue'
import Pagenation from '@/components/Pagenation.vue'

export default {
  name: 'PageIndex',
  data () {
    return {

    }
  },
  components: {
    'photolist': PhotoList,
    'searchbox': SearchBox,
    'pagenation': Pagenation
  }
}
</script>

<style scoped lang="scss">

</style>
