<template>
  <div id="app">
    <main-title />
    <router-view/>
  </div>
</template>

<script>
import './assets/css/reset.css'
import MainTitle from '@/components/MainTitle.vue'

export default {
  name: 'App',
  components: {
    'main-title': MainTitle
  }
}
</script>

<style>
#app {

}
</style>
