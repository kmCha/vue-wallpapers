import Vue from 'vue'
import router from '../router'
import store from '../store'

import { Header, Main, Footer, Container } from 'element-ui'

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);

// 组件 
import App from '../../containers/App.vue'
Vue.component('App', App)

new Vue({
    el: '#wrap',
    router,
    store
})