<template>
  <div id="app">
    <mt-header title="我的App"></mt-header>
    <router-view class="tmpl"/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img @click="changeHash" slot="icon" src="./assets/img/icon-主页.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img @click="changeHash" slot="icon" src="./assets/img/icon-个人.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="list">
        <img @click="changeHash" slot="icon" src="./assets/img/icon-列表.png">
        列表
      </mt-tab-item>
      <mt-tab-item id="search">
        <img @click="changeHash" slot="icon" src="./assets/img/icon-搜索.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: ''
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
</style>
