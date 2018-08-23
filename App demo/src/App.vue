<template>
  <div id="app">
    <mt-header title="我的App"></mt-header>
    <transition name="rv" mode="out-in">
      <router-view class="tmpl"/>
    </transition>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img @click="changeHash" slot="icon" src="./assets/img/icon-主页.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img @click="changeHash" slot="icon" src="./assets/img/icon-个人.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="Shopcart">
        <img @click="changeHash" slot="icon" src="./assets/img/icon-列表.png">
        购物车
        <mt-badge type="error" szie="small">{{num}}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="search">
        <img @click="changeHash" slot="icon" src="./assets/img/icon-搜索.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import EventBus from './EventBus.js'
import GoodsTools from './GoodsTools.js'
export default {
  data () {
    return {
      selected: '',
      num: 0
    }
  },
  methods: {
    changeHash () {
      this.$nextTick(function () {
        this.$router.push({
          name: this.selected
        })
      })
    }
  },
  created () {
    this.num = GoodsTools.getTotalCount()

    EventBus.$on('addShopcart', data => {
      // console.log(data)
      // console.log(this)
      this.num += data
    })
  }
  // watch: {
  //   selected (newV, oleV) {
  //     this.$router.push({
  //       name: newV
  //     })
  //   }
  // }
}
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
.mint-tabbar{
  position: fixed;
  bottom: 0;
}
.rv-enter-active,
.rv-leave-active {
  transition: opacity .5s;
}
.rv-enter,
.rv-leave-to {
  opacity: 0;
}
</style>
