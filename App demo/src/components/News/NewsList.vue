<template>
    <div>
        <nav-bar title="新闻列表"/>
        <div class="demo">
            <ul>
                <li v-for="news in newsList" :key="news.id">
                    <router-link :to="{name: 'news.detail', query: {id: news.id}}">
                        <img :src="news.img_url" alt="">
                        <div>
                            <span>{{news.title}}</span>
                            <div class="news-desc">
                                <p>点击数:{{news.click}}</p>
                                <p>发表时间:{{news.add_time | convertTime('YYYY-MM-DD')}}</p>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li class="line"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      newsList: []
    }
  },
  created () {
    this.$axios.get('getnewslist')
      .then(res => {
        this.newsList = res.data.message
      })
      .catch(err => console.log('新闻列表异常', err))
  }
}
</script>

<style scoped>
.demo li {
    height: 90px;
}
.demo a {
    display: block;
    width: 300px;
    height: 44px;
    color: #000;
    padding: 10px 10px;
}
.demo img {
    float: left;
    width: 42px;
    height: 42px;
    margin-right: 10px;
}
.demo a div {
    float: left;
    width: 238px;
    margin-right: 10px;
}
.demo span {
    display: block;
    width: 100%;
    font-size: 17px;
    line-height: 21px;
}
.demo a p {
    float: left;
    color: #0bb0f5;
    font-size: 14px;
    line-height: 21px;
}
.demo p:nth-child(2) {
    float: right;
}
.demo .line {
    margin-left: 16px;
    transform: scaleY(.5);
    border-bottom: 1px solid #c8c7cc;
    height: 20px;
}
</style>
