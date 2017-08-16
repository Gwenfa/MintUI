import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from './../components/test'
import Home from './../components/home'
Vue.use(Router)

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
