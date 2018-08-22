<template>
    <div>
        <nav-bar :title="title"/>
        <div class="news-title">
            <p>{{newsDetail.title}}</p>
            <div>
                <span>{{newsDetail.click}}次点击</span>
                <span>分类:民生经济</span>
                <span>添加时间:{{newsDetail.add_time | convertTime('YYYY-MM-DD')}}</span>
            </div>
        </div>
        <div class="news-content" v-html="newsDetail.content">新闻明细</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      newsDetail: {},
      title: ''
    }
  },
  created () {
    let id = this.$route.query.id
    this.$axios.get('getnew/' + id)
      .then(res => {
        this.newsDetail = res.data.message[0]
      })
      .catch(err => console.log(err))
  },
  //路由确认前，组件渲染前的守卫函数
  beforeRouteEnter (to, from, next) {
    let title = ''
    if (from.name == null) {
      if (to.name === '') {
        title = '新闻详情'
      } else if (to.name === 'photo.info') {
        title = '商品图文介绍'
      }
    } else if (from.name === 'news.list') {
      title = '新闻详情'
    } else if (from.name === 'goods.detail') {
      title = '商品图文介绍'
    }
    next(vm => {
        vm.title = title // vm就是未来组件的this
    })
  }
}
</script>

<style scoped>
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}
.news-title span {
    margin-right: 30px;
}
.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2)
}
</style>
