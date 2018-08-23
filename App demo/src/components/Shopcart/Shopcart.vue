<template>
    <div>
        <nav-bar title="购物车"/>
        <div class="pay-detail">
            <ul>
                <li class="p-list" v-for="(goods, index) in shopcart" :key="goods.id">
                    <mt-switch v-model="goods.isSelected"></mt-switch>
                    <img :src="goods.thumb_path">
                    <div class="pay-calc">
                        <p>{{goods.title}}</p>
                        <div class="calc">
                            <span>￥{{goods.sell_price}}</span>
                            <span @click="substract(goods)">-</span>
                            <span>{{goods.num}}</span>
                            <span @click="add(goods)">+</span>
                            <a href="" @click="del(index)">删除</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="show-price">
            <div class="show-1">
                <p>总计(不含运费)：</p>
                <span>已经选择商品{{paymenet.count}}件，总价￥{{paymenet.price}}元</span>
            </div>
            <div class="show-2">
                <mt-button type="danger" size="large">去结算</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import GoodsTools from '../../GoodsTools.js'
export default {
  data () {
    return {
      shopcart: []
    }
  },
  computed: {
    paymenet () {
      let price = 0
      let count = 0
      this.shopcart.forEach(goods => {
        if (goods.isSelected) {
          count += goods.num
          price += goods.num * goods.sell_price
        }
      })
      return {
        count, price
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    if (confirm('要抛弃我了吗')) {
      let obj = {}
      this.shopcart.forEach(goods => {
        obj[goods.myid] = goods.num
      })
      GoodsTools.saveGoods(obj)
      next()
    } else {
      next(false)
    }
  },
  methods: {
    add (goods) {
      console.log('++')
      goods.num++
    },
    substract (goods) {
      console.log('--')
      goods.num--
    },
    del (index) {
      this.shopcart.splice(index, 1)
    }
  },
  created () {
    let goodsList = GoodsTools.getGoodsList()
    let ids = Object.keys(goodsList).join(',')
    this.$axios.get('http://localhost:3000/getshopcarlist?myid_like=8' + ids)
      .then(res => {
        res.data.forEach(goods => {
          if (goodsList[goods.myid]) {
            goods.num = goodsList[goods.myid]
          }
          goods.isSelected = true
        })
        this.shopcart = res.data
      })
      .catch(err => console.log('购物车数据异常', err))
  }
}
</script>
<style>
.pay-detail ul li {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 3px;
}
.pay-detail ul {
    padding-left: 5px;
    margin-top: 5px;
}
.pay-detail ul li img {
    width: 80px;
    height: 80px;
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
}
.pay-detail ul li >:nth-child(1),
.pay-detail ul li >:nth-child(3) {
    display: inline-block;
}
.pay-calc p {
    display: inline-block;
    width: 250px;
    overflow: hidden;
    color: blue;
    font-size: 15px;
    margin-bottom: 10px;
}
.pay-detail ul li >:nth-child(1) {
    line-height: 80px;
}
.calc:nth-child(1) {
    color: red;
    font-size: 20px;
}
.calc span:not(:nth-child(1)) {
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: inline-block;
    width: 20px;
    text-align: center;
}
.calc a {
    margin-left: 20px;
}
.show-1,
.show-2 {
    display: inline-block;
    margin-left: 30px;
}
.show-price {
    background-color: rgba(0, 0, 0, 0.2)
}

</style>
