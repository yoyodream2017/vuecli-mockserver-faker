import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../pages/Hello'
import Scrollbar from '../pages/VueScrollbar'
import User from '../pages/User'
import Tool from '../pages/Tool'
import DataView from '../pages/DataView'
import NativeTest from '../pages/NativeTest'
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
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/tool',
      component: Tool
    },
    {
      path: '/dataview',
      component: DataView
    },
    {
      path: '/test',
      component: NativeTest
    }
  ]
})
