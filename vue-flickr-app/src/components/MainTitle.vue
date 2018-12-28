<template>
  <div>
    <h1 class="flickerapp-MainTitle">Flicker Photo List</h1>
    <h2 v-if="page && pages" class="flickerapp-Count">
      「{{ text }}」: {{ page }}ページ / 全{{ pages }}ページ中
    </h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MainTitle',
  computed: {
    ...mapGetters(['page', 'pages', 'text']),
  },
}
</script>

<style scoped lang="scss">
.flickerapp-MainTitle {
  margin: 30px auto;
  font-weight: bold;
  font-size: 26px;
  text-align: center;
}
.flickerapp-Count {
  text-align: center;
  font-weight: bold;
  margin: 0 0 20px;
}
</style>
