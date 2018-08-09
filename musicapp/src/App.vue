<template>
  <div id="app">
    <mt-header title="我的App"></mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/img/icon-主页.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/img/icon-个人.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="list">
        <img slot="icon" src="./assets/img/icon-列表.png">
        列表
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/img/icon-搜索.png">
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
  watch: {
    selected (newV, oleV) {
      this.$router.push({
        name: newV
      })
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
