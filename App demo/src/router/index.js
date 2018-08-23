import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
// import List from '@/components/List/List'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import NewsList from '@/components/News/NewsList.vue'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList'
import PhotoDetail from '@/components/Photo/PhotoDetail'
import GoodsList from '@/components/Goods/GoodsList'
import GoodsDetail from '@/components/Goods/GoodsDetail'
import GoodsComment from '@/components/Goods/GoodsComment'
import Shopcart from '@/components/Shopcart/Shopcart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/Shopcart',
      name: 'Shopcart',
      component: Shopcart
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
    },
    // 新闻列表
    {
      name: 'news.list',
      path: '/news/list',
      component: NewsList
    },
    // 新闻联想
    {
      name: 'news.detail',
      path: '/news/detail',
      component: NewsDetail
    },
    // 图文列表
    {
      name: 'photo.list',
      path: '/photo/list/:categoryId',
      component: PhotoList
    },
    // 图文详情
    {
      name: 'photo.detail',
      path: '/photo/detail/',
      component: PhotoDetail
    },
    // 商品列表
    {
      name: 'goods.list',
      path: '/goods/list',
      component: GoodsList
    },
    // 商品详情
    {
      name: 'goods.detail',
      path: '/goods/detail/:id',
      component: GoodsDetail
    },
    // 商品图文介绍
    {
      name: 'photo.info',
      path: '/goods/photo/info',
      component: NewsDetail
    },
    // 商品评论
    {
      name: 'goods.comment',
      path: '/goods/comment',
      component: GoodsComment
    }
  ]
})
