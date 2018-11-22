import Vue from 'vue'
import Router from 'vue-router'
import PageIndex from '@/pages/PageIndex'
import PageDetail from '@/pages/PageDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PageIndex
    },
    {
      path: '/:id(\\d+)',
      component: PageDetail
    }
  ]
})
