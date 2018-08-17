<template>
    <div>
        <nav-bar title="新闻详情"/>
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
      newsDetail: {}
    }
  },
  created () {
    let id = this.$route.query.id
    this.$axios.get('getnew/' + id)
      .then(res => {
        this.newsDetail = res.data.message[0]
      })
      .catch(err => console.log(err))
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
