<template>
  <div class="list_content_wrap">
    <div class="list_content">
      <div class="list_module">
        <!--商品列表-->
        <ul class="home_goods_list">
          <li v-for="(item, index) in resultList" :key="index">
            <router-link :to="{name: 'Detail', params: {goodId: item.id}}">
              <div class="home_goods_cont">
                <span class="home_goodImg"><img :src="$imagesUrl + item.titleImage"/></span>
                <div class="home_goods_text">
                  <p class="desc">{{item.name}}</p>
                  <p class="iconfont price">{{item.price}}<small>返利{{item.rebateScale}}元</small></p>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="search-none" v-show="!searchNone">
          <img src="../../assets/search-none.png">
          <p class="text">抱歉，暂无任何商品</p>
          <router-link to="/" class="next">继续逛</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { jxPost } from '../../../config/utils/api'
export default {
  name: 'ListGood',
  data () {
    return {
      keywords: '',
      searchNone: true,
      resultList: []
    }
  },
  async created () {
    this.keywords = this.$route.params && this.$route.params.keywords
    console.log(this.keywords)
    let searchList = {
      'method': 'get.goods.byKeyword',
      'keyword': this.keywords
    }
    let searchdata = await jxPost(searchList)
    this.resultList = searchdata.list[0].pager.list
    console.log(searchdata.list[0].pager)
    if (this.resultList === undefined) {
      this.searchNone = false
    } else {
      this.searchNone = true
    }
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  }
}
</script>

<style>
@import '../../assets/styles/home.css';
@import '../../assets/styles/list.css'
</style>
