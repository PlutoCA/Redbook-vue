import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/Home/index'
import collections from '../pages/Collections/collections'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/collections',
      name: 'collections',
      component: collections
    }
  ]
})
