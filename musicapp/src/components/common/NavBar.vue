<template>
    <div class="cms-s-header">
        <h1 @click="goback">&nbsp;<i></i></h1>
        <h1 class="page-title">{{title}}</h1>
    </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: ['title'],
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

h1 {
  margin-top: 0px;
  margin-bottom: 0px;
}
.cms-s-header {
    background-color: #f7f7f7;
}
h1 {
    display: inline-block;
}
.page-title {
    margin-left: 25%;
}
i {
    width: 25px;
    height: 25px;
    display: inline-block;
    background: url(../../assets/img/icon-返回.png) round;
    vertical-align: middle;
}
</style>
