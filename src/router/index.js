import Vue from 'vue'
import Router from 'vue-router'
// import index from '../pages/Home/index'
// import collections from '../pages/Collections/collections'

// 首页
const index = resolve => require(['../pages/Home/index'], resolve)
// 精选页
const collections = resolve => require(['../pages/Collections/collections'], resolve)
const Nofound = resolve => require(['../pages/404/404'], resolve)
const note = resolve => require(['../pages/note/note'], resolve)

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
    },
    {
      path: '/note/:id',
      name: 'note',
      component: note
    },
    {
      path: '*',
      component: Nofound
    }
  ]
})
