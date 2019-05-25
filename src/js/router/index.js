import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 异步加载路由写法，必须写明 webpackChunkName
const Index = () => import(/* webpackChunkName:'Index' */'../../containers/Index')

var routes = [
    {
      path: '/:page',
      name: 'index',
      component: Index
    },
    {
      path: '*',
      redirect: '/1'
    }
  ]

export default new VueRouter({routes})
