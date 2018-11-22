<template>
  <div class="flickerapp-PageIndex">
    <searchbox />
    <photolist />
  </div>
</template>

<script>
import PhotoList from '@/components/PhotoList.vue'
import SearchBox from '@/components/SearchBox.vue'

export default {
  name: 'PageIndex',
  data () {
    return {

    }
  },
  components: {
    'photolist': PhotoList,
    'searchbox': SearchBox
  },
  created () {

  }
}
</script>

<style scoped lang="scss">

</style>
