// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 图片预览插件
import VuePreview from 'vue-preview'
// 配置axios
import Axios from 'axios'
// 配置MintUI
import MintUI from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
// 引入自己的css
import './assets/css/global.css'
// 引入图标css
import './assets/warnning/iconfont'
// 时间插件
import Moment from 'moment'
// 引入自己的组件
import MyUl from '../src/components/common/MyUl.vue'
import MyLi from '../src/components/common/MyLi.vue'
// 返回和标题
import NavBar from '../src/components/common/NavBar'
// 评论
import Comment from '../src/components/common/Comment'
// 首页和商品详情轮播
import MySwipe from '../src/components/common/MySwipe.vue'
// 注册全局组件
Vue.component(NavBar.name, NavBar)
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(Comment.name, Comment)
Vue.component(MySwipe.name, MySwipe)
// 定义moment 全局日期过滤器
// 中文定义
Moment.locale('zh-cn')
Vue.filter('convertTime', function (data, formatStr) {
  return Moment(data).format(formatStr)
})
// 相对时间
Vue.filter('relativeTime', function (previousTime) {
  return Moment(previousTime).fromNow()
})
// 处理字符串过长的过滤器
Vue.filter('convertStr', function (str, count) {
  return str.substring(0, count) + '...'
})

Vue.use(VuePreview)
// Vue.component('vue-preview', componentObj)

Vue.config.productionTip = false

// 配置公共URL
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
// 配置请求拦截器，显示loading图标
Axios.interceptors.request.use(function (config) {
  MintUI.Indicator.open({
    text: '正在加载中...'
  })
  return config
})
// 配置响应拦截器，关闭loading拦截器
Axios.interceptors.response.use(function (response) {
  MintUI.Indicator.close()
  return response
})
Vue.prototype.$axios = Axios

Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
