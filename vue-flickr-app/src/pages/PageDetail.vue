<template>
  <div class="flickerapp-PageDetail">
    <h2 class="flickerapp-PageDetail_title">detail</h2>
    <p class="flickerapp-PageDetail_id">ID: {{ $route.params.id }}</p>
    <figure v-if="current" class="flickerapp-PageDetail_photo">
      <img :src="makeUrl" alt="" @load="load" />
    </figure>
    <div class="loading" v-else>
      <BallBeatLoader color="#000000" size="20px" />
    </div>
    <div class="flickerapp-PageDetail_topLink">
      <router-link to="/">topへ戻る</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import 'vue-loaders/dist/vue-loaders.css'
import { BallBeatLoader } from 'vue-loaders'

export default {
  name: 'PageDetail',
  components: {
    BallBeatLoader,
  },
  computed: {
    makeUrl() {
      let current = this.current
      if (current) {
        return `https://farm${current.farm}.staticflickr.com/${
          current.server
        }/${current.id}_${current.secret}.jpg`
      } else {
        return ''
      }
    },
    ...mapState(['current']),
  },
  methods: {
    ...mapActions(['getDetailData']),
    load(elm) {
      elm.path[0].classList.add('is-load')
    },
  },
  mounted() {
    this.getDetailData({ id: this.$route.params.id })
  },
}
</script>

<style scoped lang="scss">
.flickerapp-PageDetail {
  width: 300px;
  margin: 0 auto 0;
}
.flickerapp-PageDetail_title {
  font-size: 1.3rem;
  text-align: center;
  font-weight: bold;
  margin: 0 auto 10px;
}
.flickerapp-PageDetail_id {
  text-align: center;
  margin: 0 auto 10px;
}
.flickerapp-PageDetail_photo {
  img {
    width: 100%;
    opacity: 0;
    transition: opacity 0.5s;
  }
  img.is-load {
    opacity: 1;
  }
}
.loading {
  text-align: center;
  margin: 80px 0 0;
  font-weight: bold;
}
.flickerapp-PageDetail_topLink {
  text-align: center;
  margin: 30px;
}
</style>
