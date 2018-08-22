let obj = {}

// 获取所有商品数据
obj.getGoodsList = function () {
  return JSON.parse(window.localStorage.getItem('goodslist') || '{}')
}

// 保存商品
obj.saveGoods = function (goodslist) {
  window.localStorage.setItem('goodslist', JSON.stringify(goodslist))
}

// 新增商品
obj.add = function (goods) {
  // 判断goodslist是否包含该商品，有则追加，无则赋值
  let goodslist = this.getGoodsList()
  if (goodslist[goods.id]) {
    goodslist[goods.id] += goods.num
  } else {
    goodslistp[goods.id] = goods.num
  }
}

// 保存数据
this.saveGoods(goodslist)

// 获取购物车数量总数
obj.getTotalCount = function () {
  let goodslist = this.getGoodsList()
  let values = Object.values(goodslist)
  let sum = 0

  values.forEach(val => sum += val)
  return val
}
export default pbj