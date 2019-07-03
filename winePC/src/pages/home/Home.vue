<template>
  <div class="home_content_wrap">
    <div class="home_content">
      <div class="banner-nav">
        <home-class :list="classList"></home-class>
        <home-swiper :list="swiperList"></home-swiper>
      </div>
      <home-icons :list="iconsList"></home-icons>
      <!-- <home-listxs :list="listxsList"></home-listxs> -->
      <home-listrm :list="listrmList"></home-listrm>
    </div>
  </div>
</template>

<script>
import HomeClass from './components/Class'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeListxs from './components/Listxs'
import HomeListrm from './components/Listrm'
import { jxPost } from '../../../config/utils/api'
export default {
  name: 'Home',
  components: {
    HomeClass,
    HomeSwiper,
    HomeIcons,
    HomeListxs,
    HomeListrm
  },
  data () {
    return {
      classList: [],
      swiperList: [],
      iconsList: [],
      listxsList: [],
      listrmList: []
    }
  },
  async created () {
    // 轮播
    let carousel = {
      'method': 'carousel.get'
    }
    // 一级分类
    let classList = {
      'method': 'goods.category.get.first'
    }
    // 热门
    let listrmList = {
      'method': 'goods.get.index'
    }
    let carouselData = await jxPost(carousel)
    this.swiperList = carouselData.list.sliderList
    this.iconsList = carouselData.list.navigationList
    let classData = await jxPost(classList)
    this.classList = classData.list
    let listrmData = await jxPost(listrmList)
    this.listrmList = listrmData.list
    console.log(classData)
  }
}
</script>

<style scoped src="../../assets/styles/home.css">
</style>
