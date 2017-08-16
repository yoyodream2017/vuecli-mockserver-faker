import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Scrollbar from '../components/VueScrollbar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/scrollbar',
      component: Scrollbar
    }
  ]
})
