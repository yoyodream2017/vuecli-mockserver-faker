// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import status from './lib/status'
import store from './vuex/store'

Vue.config.productionTip = false
Vue.use(status)

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
