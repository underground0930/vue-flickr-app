<template>
  <div>
    <ul class="flickerapp-PhotoList">
      <li
        v-for="p in photos.photo"
        :key="p.id"
        class="flickerapp-PhotoList_child"
      >
        <router-link :to="{ name: 'detail', params: { id: p.id } }">
          <dl>
            <dt>
              <img :src="p.url_sq" :alt="p.title" height="150" @load="load" />
            </dt>
            <dd>{{ p.title | cutText }}</dd>
          </dl>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'PhotoList',
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['setCurrent']),
    load(elm) {
      elm.path[0].classList.add('is-load')
    },
  },
  computed: {
    ...mapState(['photos']),
  },
  filters: {
    cutText(t) {
      var len = 25
      if (t.length > len) {
        return t.substr(0, len) + '...'
      } else {
        return t
      }
    },
  },
  mounted() {
    // currentを初期化
    this.setCurrent({ current: '' })
  },
}
</script>

<style scoped lang="scss">
.flickerapp-PhotoList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 800px;
  margin: 0 auto 0;
  &:before {
    content: '';
    display: block;
    width: 150px;
    order: 1;
  }
  &::after {
    content: '';
    display: block;
    width: 150px;
  }
  &_child {
    width: 150px;
    margin-bottom: 20px;
    a {
      display: block;
    }
    dt {
      img {
        width: 100%;
        opacity: 0;
        transition: opacity 0.3s;
      }
      img.is-load {
        opacity: 1;
      }
    }
    dd {
      word-break: break-all;
    }
  }
}
</style>
