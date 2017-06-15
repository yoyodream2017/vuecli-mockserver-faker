import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules, // Object {products: Object, user: Object}, 后面每个object含有actions，getters等
  strict: process.env.NODE_ENV !== 'production'
})
