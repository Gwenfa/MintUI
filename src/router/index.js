import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import Hello from '@/components/Hello'
import Test from './../components/test'
import Home from './../components/home'
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
    {
      path: '/',
      name: 'Home',
      component:Home
    }
  ]
})
