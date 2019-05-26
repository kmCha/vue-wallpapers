import Vue from 'vue'
import router from '../router'
import store from '../store'

import { Header, Main, Footer, Container, Pagination, Loading, Button, Option, Select } from 'element-ui'

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Pagination);
Vue.use(Loading.directive);
Vue.use(Button);
Vue.use(Option);
Vue.use(Select);

// 组件 
import App from '../../containers/App.vue'
Vue.component('App', App)

new Vue({
    el: '#wrap',
    router,
    store
})