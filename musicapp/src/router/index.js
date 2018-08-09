import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import List from '@/components/List/List'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
