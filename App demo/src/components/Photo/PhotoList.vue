<template>
    <div class="tmpl">
        <nav-bar title="图文列表"/>
        <div class="photo-header">
            <ul>
                <li v-for="c in categorys" :key="c.id">
                    <a @click="loadImgsCategoryId(c.id)">{{c.title}}</a>
                </li>
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="img in imgs" :key="img.id">
                    <router-link :to="{name: 'photo.detail', query:{id: img.id}}">
                        <img v-lazy="img.img_url" alt="">
                        <p>
                            <span>{{img.title}}</span>
                            <br>
                            <span>{{img.zhaiyao | convertStr(45)}}</span>
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      imgs: [],
      categorys: []
    }
  },
  created () {
    let categoryId = this.$route.params.categoryId
    this.loadImgById(categoryId)
    this.$axios.get('getimgcategory')
      .then(res => {
        this.categorys = res.data.message
        this.categorys.unshift({
          id: 0,
          title: '全部'
        })
      })
      .catch(err => console.log('分类信息获取失败', err))
  },
  beforeRouteUpdate (to, from, next) {
    this.loadImgById(to.params.categoryId)
    next()
  },
  methods: {
    loadImgsCategoryId (categoryId) {
      this.$router.push({
        name: 'photo.list',
        params: {
          categoryId
        }
      })
    },
    loadImgById (id) {
      this.$axios.get('getimages/' + id)
        .then(res => {
          this.imgs = res.data.message
          if (this.imgs.length === 0) {
            this.$toast({
              message: '没有图片!',
              iconClass: 'iconfont icon-cuowu'
            })
          }
        })
        .catch(err => console.log('图片列表获取失败', err))
    }
  }
}
</script>

<style scoped>
.photo-header li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}
.photo-header ul {
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5;
}

/* 下面的图片 */

.photo-list li {
    list-style: none;
    position: relative;
}
.photo-list li img {
    width: 100%;
    height: 230px;
    vertical-align: top;
}
.photo-list ul {
    padding-left: 0px;
    margin: 0px;
}
.photo-list p {
    position: absolute;
    bottom: 0px;
    color: rgb(212, 201, 201);
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
}
.photo-list p span:nth-child(1) {
    font-size: 16px;
    font-weight: bold;
    color: white
}
/* 图片懒加载样式 */
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
