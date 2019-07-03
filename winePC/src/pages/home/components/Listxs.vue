<template>
  <div class="time_buy">
    <div class="home_modul_header">
      <div class="modul_header_left">
        <span class="modul_head">限时购</span>
        <!--倒计时-->
        <div class="home_countdown">
          <span class="time_remin"><img src="../../../assets/home-clock.png"/>距离结束还有</span>
          <ul class="home_clock">
            <li>{{h}}</li>
            <li>{{m}}</li>
            <li>{{s}}</li>
          </ul>
        </div>
      </div>
      <router-link to="/list" class="iconfont more">更多</router-link>
    </div>
    <ul class="home_goods_list">
      <li v-for="item of list" :key="item.id">
        <router-link to="/detail">
          <div class="home_goods_cont">
            <span class="home_goodImg"><img :src="item.imgUrl"/></span>
            <div class="home_goods_text">
              <p class="desc">{{item.desc}}</p>
              <p class="iconfont price">{{item.price}}<small>会员价</small></p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'HomeListxs',
  data () {
    return {
      h: '',
      m: '',
      s: ''
    }
  },
  props: {
    list: Array
  },
  methods: {
    countTime () {
      const date = new Date()
      const now = date.getTime()
      const endDate = new Date('2019-4-23 15:0:0')
      const end = endDate.getTime()
      const leftTime = end - now
      if (leftTime >= 0) {
        this.h = Math.floor(leftTime / 1000 / 60 / 60 % 24)
        this.m = Math.floor(leftTime / 1000 / 60 % 60)
        this.s = Math.floor(leftTime / 1000 % 60)
      } else if (leftTime < 0) {
        this.h = 0
        this.m = 0
        this.s = 0
      }
      setTimeout(this.countTime, 1000)
    }
  },
  mounted () {
    this.countTime()
  }
}
</script>

<style scoped src="../../../assets/styles/home.css">
</style>
