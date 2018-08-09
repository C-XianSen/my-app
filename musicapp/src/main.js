// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 配置axios
import Axios from 'axios'
// 配置MintUI
import MintUI from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
// 引入自己的css
import './assets/css/global.css'
// 引入自己的ul和li组件
import MyUl from '../src/components/common/MyUl.vue'
import MyLi from '../src/components/common/MyLi.vue'
// 注册全局组件
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)

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
