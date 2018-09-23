import Vue from 'vue'
import Router from 'vue-router'
import pageIndex from '@/components/pageIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageIndex',
      component: pageIndex
    }
  ]
})
