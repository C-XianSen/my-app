<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(img,index) in imgs" :key="index">
            <img :src="img.img || img.src">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
  name: 'my-swipe',
  props: ['url'],
  data () {
    return {
      imgs: []
    }
  },
  created () {
    this.$axios.get(this.url)
      .then(res => {
        this.imgs = res.data.message
      })
      .catch(err => console.log('首页/商品详情页轮播图获取异常', err))
  }
}
</script>

<style scoped>
.mint-swipe {
  height: 200px;
}
img {
    width: 100%;
}
</style>
