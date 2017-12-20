// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import status from './lib/status'
import store from './vuex/store'
import IsLoading from './components/IsLoading'
import Vue2Scrollbar from 'vue2-scrollbar'
import Ibutton from './components/Ibutton'
import './assets/vue2-scrollbar.css'
import './assets/app.css'

Vue.config.productionTip = false
Vue.use(status)
Vue.component('is-loading', IsLoading)
Vue.component('vue2-scrollbar', Vue2Scrollbar)
Vue.component('i-button', Ibutton)

axios.interceptors.request.use(config => {
  vm.$store.commit('FETCH_LOADING', true)
  return config
}, err => {
  return Promise.reject(err)
})

// http response 拦截器
axios.interceptors.response.use(response => {
  vm.$store.commit('FETCH_LOADING', false)
  return response
}, err => {
  return Promise.reject(err)
})
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
