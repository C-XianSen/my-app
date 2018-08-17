<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                <img :src="img.img">
            </mt-swipe-item>
        </mt-swipe>
        <div class="grid">
            <my-ul>
                <my-li v-for="(grid,index) in grids" :key="index">
                    <router-link :to="grid.router">
                        <span :class="grid.className"></span>
                        <div>{{grid.title}}</div>
                    </router-link>
                </my-li>
            </my-ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      imgs: [],
      grids: [
        {className: 'cms-news', title: '新闻资讯', router: {name: 'news.list'}},
        {className: 'cms-photo', title: '图文分享', router: {name: 'photo.list', params: {categoryId: 0}}},
        {className: 'cms-show', title: '商品展示', router: {name: 'news.list'}},
        {className: 'cms-mess', title: '留言反馈', router: {name: 'news.list'}},
        {className: 'cms-search', title: '搜索资讯', router: {name: 'news.list'}},
        {className: 'cms-link', title: '联系我们', router: {name: 'news.list'}}
      ]
    }
  },
  created () {
    this.$axios
      .get('getlunbo')
      .then(res => {
        this.imgs = res.data.message
        console.log(res.data.message)
      })
      .catch(err => console.log('轮播图获取异常', err))
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
/* 九宫格 */
.grid li span{
    height: 50px;
    width: 50px;
    display: inline-block;
    margin-top: 10px;
}
.grid li a{
    text-decoration: none;
    display: block;
    color: #333;
}
/* 图标 */
.cms-news {
    background: url(../../assets/img/icon-动态.png) round;
}
.cms-photo {
    background: url(../../assets/img/icon-动态.png) round;
}
.cms-show {
    background: url(../../assets/img/icon-动态.png) round;
}
.cms-mess {
    background: url(../../assets/img/icon-动态.png) round;
}
.cms-search {
    background: url(../../assets/img/icon-动态.png) round;
}
.cms-link {
    background: url(../../assets/img/icon-动态.png) round;
}
</style>
