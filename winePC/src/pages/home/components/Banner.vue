<template>
  <div class="banner-nav">
    <div class="nav-container">
      <ul class="nav-list">
        <li class="nav-item ">
          <span>
            <a href="###" class="recom">灵动推荐</a>
          </span>
        </li>
        <li class="nav-item ">
          <span><a href="###">家居家纺</a></span>
          <span class="iconfont"><a href="###">家用电器</a></span>
        </li>
        <li class="nav-item ">
          <span><a href="###">家居家纺</a></span>
          <span class="iconfont"><a href="###">家用电器</a></span>
        </li>
        <li class="nav-item ">
          <span><a href="###">家居家纺</a></span>
          <span class="iconfont"><a href="###">家用电器</a></span>
        </li>
        <li class="nav-item ">
          <span><a href="###">家居家纺</a></span>
          <span class="iconfont"><a href="###">家用电器</a></span>
        </li>
        <li class="nav-item ">
          <span><a href="###">家居家纺</a></span>
          <span class="iconfont"><a href="###">家用电器</a></span>
        </li>
        <li class="nav-item ">
          <span><a href="###">家居家纺</a></span>
          <span class="iconfont"><a href="###">家用电器</a></span>
        </li>
        <li class="nav-item ">
          <span><a href="###">家居家纺</a></span>
          <span class="iconfont"><a href="###">家用电器</a></span>
        </li>
        <li class="nav-item ">
          <span><a href="###">家居家纺</a></span>
          <span class="iconfont"><a href="###">家用电器</a></span>
        </li>
      </ul>
      <div class="nav-detail">
        <div class="cate-detail-group">
          <p class="title">日用百货</p>
          <ul class="cate-detail-list">
            <li class="m-tag-a">
              <img src="img/home-clock.png"/>
              <span>新品</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="home_banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl" alt=""></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'HomeBanner',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: false,
        pagination: '.swiper-pagination',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home_banner >>> .swiper-button-prev,.home_banner >>> .swiper-button-next
    width: 42px
    height: 42px
    margin-top: -21px
    background-size: 16px 25px
    background-color: rgba(0,0,0,0.3)
    border-radius: 50%
  .home_banner >>> .swiper-pagination-bullet-active
    background: #ea4c28
    -webkit-box-shadow: 0 0 0 4px #ccc
    box-shadow: 0 0 0 4px #ccc
  .banner-nav
    width: 1200px
    height: 396px
    .nav-container
      position: relative
      height: 396px
      background-color: #845f3f
      padding: 20px 0 10px
      width: 247px
      float: left
      z-index: 2
      .nav-list
        overflow: hidden
        li
          float: left
          text-align: center
          cursor: pointer
          span
            float: left
          span:nth-child(2):before
            content: "\e60c"
            color: #fff
        .nav-item
          width: 247px
          padding: 0 30px
          height: 39px
          line-height: 39px
          font-size: 14px
          -webkit-transition: all .2s ease
          -o-transition: all .2s ease
          transition: all .2s ease
          text-align: left
          overflow: hidden
          a
            color: #fff
          .recom
            font-size: 25px
      .nav-detail
        display: blcok
        position: absolute
        top: 0
        left: 247px
        width: 953px
        height: 396px
        background-color: #fff
        border: 1px solid #eee
        padding: 20px 30px
        overflow-y: auto
        -webkit-transition: opacity 2s ease
        -o-transition: opacity 2s ease
        transition: opacity 2s ease
        .cate-detail-group
          overflow: hidden;
          margin-bottom: 15px;
          p.title
            color: #333;
            font-size: 14px;
    .home_banner
      width: 953px
      height: 396px
      float: left
      .swiper-img
        width:953px
        height:396px
</style>
