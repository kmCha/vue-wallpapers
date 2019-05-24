import Vue from 'vue'
import router from '../router'
import store from '../store'

// 组件
import App from '../../containers/App.vue'
Vue.component('App', App)

new Vue({
  el: '#wrap',
  router,
  store
})