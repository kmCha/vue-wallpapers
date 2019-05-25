import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 异步加载路由写法，必须写明 webpackChunkName
const All = () => import(/* webpackChunkName:'All' */'../../containers/All')
const Random = () => import(/* webpackChunkName:'Random' */'../../containers/Random')

var routes = [
    {
      path: '/all/:page',
      name: 'all',
      component: All
    },
    {
      path: '/random',
      name: 'random',
      component: Random
    },
    {
      path: '*',
      redirect: '/all/1'
    }
  ]

export default new VueRouter({routes})
