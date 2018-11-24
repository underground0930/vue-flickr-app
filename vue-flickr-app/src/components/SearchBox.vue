<template>
  <div class="flickerapp-SearchBox">
    <input type="text" class="flickerapp-SearchBox_input" v-model="text" />
    <button class="flickerapp-SearchBox_button" @click="getIndexData()">
      search
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SearchBox',
  computed: {
    text: {
      get() {
        return this.$store.getters.text
      },
      set(val) {
        this.$store.commit('setText', { text: val })
      },
    },
  },
  methods: {
    ...mapActions(['getIndexData']),
  },
}
</script>

<style scoped lang="scss">
.flickerapp-SearchBox {
  margin: 0 0 30px;
  display: flex;
  justify-content: center;
  &_input {
    width: 300px;
    font-size: 16px;
    padding: 3px;
  }
  &_button {
    border: none;
    background: #eee;
    font-size: 14px;
    border-radius: 2px;
    cursor: pointer;
  }
}
</style>
