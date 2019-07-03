<template>
  <div class="list_content_wrap">
    <div class="list_content">
      <!-- <center-nav></center-nav> -->
      <ul class="list_nav">
        <li class="iconfont"><a href="home.html">首页</a></li>
        <li class="iconfont"><a href="list.html">{{classNames}}</a></li>
      </ul>
      <div class="list_module">
        <p class="list_module_head">{{classNames}}</p>
        <!--商品列表-->
        <ul class="home_goods_list">
          <li v-for="(item, index) in goodsList" :key="index">
            <router-link to="###">
              <div class="home_goods_cont">
                <span class="home_goodImg"><img :src="$imagesUrl + item.titleImage"/></span>
                <div class="home_goods_text">
                  <p class="desc">{{item.description}}</p>
                  <p class="iconfont price">{{item.price}}<small>返利{{item.rebateScale}}元</small></p>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { jxPost } from '../../../config/utils/api'
export default {
  name: 'List',
  data () {
    return {
      goodsList: [],
      classNames: ''
    }
  },
  async created () {
    let goodId = this.$route.params && this.$route.params.goodId
    let name = this.$route.params && this.$route.params.num
    let className = this.$route.params && this.$route.params.className
    this.classNames = className
    // 一级分类商品列表
    let classGoodsList = {
      'method': 'get.goods.byCategoryId',
      'name': name
    }
    let classId = {
      'id': goodId
    }
    let goodsListData = await jxPost(classGoodsList, classId)
    this.goodsList = goodsListData.pager.list
  }
}
</script>

<style>
@import '../../assets/styles/home.css';
@import '../../assets/styles/list.css'
</style>
