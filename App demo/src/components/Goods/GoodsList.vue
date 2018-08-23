<template>
    <div>
        <nav-bar title="商品展示"/>
        <mt-loadmore :auto-fill="false" :bottom-method="loadBottom" ref="loadmore" :bottom-all-loaded="isAllLoaded">
            <ul>
                <li v-for="goods in goodsList" :key="goods.id">
                    <router-link :to="{name: 'goods.detail',params:{id: goods.id}}">
                        <img :src="goods.img_url">
                        <div class="title">{{goods.title | convertStr(25)}}</div>
                        <div class="desc">
                            <div class="sell">
                                <span>￥{{goods.sell_price}}</span>
                                <s>￥{{goods.market_price}}</s>
                            </div>
                            <div class="detail">
                                <div class="hot">
                                    热卖中
                                </div>
                                <div class="count">
                                    剩{{goods.stock_quantity}}件
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>

<script>
export default {
  data () {
    return {
      goodsList: [],
      page: 1,
      isAllLoaded: false
    }
  },
  created () {
    this.page = this.$route.query.id || '1'
    this.loadByPage(this.page)
  },
  methods: {
    loadByPage () {
      this.$axios.get('getgoods?pageindex=' + this.page)
        .then(res => {
          this.goodsList = res.data.message
          this.page++
        })
        .catch(err => console.log(err, '商品列表获取失败'))
    },
    concatByPage () {
      this.$axios.get('getgoods?pageindex=' + this.page)
        .then(res => {
          if (res.data.message.length === 0) {
            this.$toast('下面没有商品了0.0')
            this.isAllLoaded = true
          }
          this.goodsList = this.goodsList.concat(res.data.message)
          this.$refs.loadmore.onBottomLoaded()
          this.page++
        })
        .catch(err => console.log(err, '商品列表获取失败-.-'))
    },
    loadBottom () {
      this.concatByPage(this.page)
    }
  }
}
</script>

<style scoped>
ul {
    overflow: hidden;
}
li{
    width: 50%;
    float: left;
    padding: 6px;
    box-sizing: border-box;
}
li > a:not(.mui-btn) {
    margin: 0px;
    padding: 0px;
    border: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
    width: 100%;
    display: block;
}
li > a:not(.mui-btn) {
    width: 100%;
}
.sell > span {
    float: left;
    color: red;
    text-align: left;
}
.detail > .hot {
    float: left;
    text-align: left;
    font-size: 15px;
}
.detail > .count {
    float: right;
    text-align: right;
    font-size: 15px;
}
.detail {
    overflow: hidden;
}
.title {
    height: 42px;
}
.desc {
    color: rgba(92, 92, 92, 0.8);
    background-color: rgba(0, 0, 0, 0.2)
}
img {
    /* height: 175px; */
    width: 175px;
}
</style>
