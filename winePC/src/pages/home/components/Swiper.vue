<template>
  <div class="home_banner">
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for="item of list" :key="item.id"><img class="swiper-img" :src="$imagesUrl + item.titlePage" alt=""></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: false,
        pagination: '.swiper-pagination',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
      }
    }
  }
}
</script>

<style scoped src="../../../assets/styles/home.css">
</style>
