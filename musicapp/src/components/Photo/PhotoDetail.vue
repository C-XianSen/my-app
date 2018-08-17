<template>
    <div>
        <nav-bar title="图文详情"/>
        <div class="photo-title">
            <p>{{info.title}}</p>
            <span>发起日期:{{info.add_time | convertTime('YYYY-MM-DD')}}</span>
            <span>{{info.click}}次浏览</span>
            <span>分类:民生经济</span>
        </div>
        <vue-preview :slides="imgs"></vue-preview>
        <div class="photo-desc">
            <p v-html="info.content"></p>
        </div>
        <comment :cid="$route.query.id"/>
    </div>
</template>

<script>
export default {
  data () {
    return {
      info: {},
      imgs: []
    }
  },
  created () {
    let id = this.$route.query.id
    this.$axios.get('/getimageInfo/' + id)
      .then(res => {
        this.info = res.data.message[0]
      })
      .catch(err => console.log('图文详情获取失败！', err))
    this.$axios.get('getthumimages/' + id)
      .then(res => {
        this.imgs = res.data.message
        this.imgs.forEach(img => {
          img.msrc = img.src
          img.w = 600
          img.h = 400
        })
      })
      .catch(err => console.log('图片缩略图获取失败！', err))
  }
}
</script>

<style scoped>
li {
    list-style: none;
}
ul {
    margin: 0px;
    padding: 0px;
}
.photo-title {
    overflow: hidden;
}
.photo-title,
.photo-desc {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}
.photo-title p {
    color: #13c2f7;
    font-size: 20px;
    font-weight: bold
}
.photo-title span {
    margin-right: 20px;
}
.photo-desc p {
    font-size: 18px;
}
.cms-s-header {
    background-color: #f7f7f7;
}
.tmpl h1 {
    display: inline-block;
}
.page-title {
    margin-left: 25%;
}
</style>
