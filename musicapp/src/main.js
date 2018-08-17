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
// 引入自己的组件
import MyUl from '../src/components/common/MyUl.vue'
import MyLi from '../src/components/common/MyLi.vue'
import NavBar from '../src/components/common/NavBar'
import Moment from 'moment'
import Comment from '../src/components/common/Comment'
// 注册全局组件
Vue.component(NavBar.name, NavBar)
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(Comment.name, Comment)
// 定义moment 全局日期过滤器
Vue.filter('convertTime', function (data, formatStr) {
  return Moment(data).format(formatStr)
})

Vue.filter('relativeTime', function (previousTime) {
  return Moment(previousTime).fromNow()
})

Vue.use(VuePreview)
// Vue.component('vue-preview', componentObj)

Vue.config.productionTip = false

// 配置公共URL
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
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
