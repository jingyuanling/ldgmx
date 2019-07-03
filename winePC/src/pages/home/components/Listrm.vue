<template>
  <div class="time_buy">
    <div class="home_modul_header">
      <div class="modul_header_left">
        <span class="modul_head">热门</span>
        <span class="small_desc">感动人心 价格厚道</span>
      </div>
      <router-link to="/list" class="iconfont more">更多</router-link>
    </div>
    <ul class="home_goods_list">
      <li v-for="item of list" :key="item.id">
        <router-link :to="{name: 'Detail', params: {goodId: item.id}}">
          <div class="home_goods_cont">
            <span class="home_goodImg"><img :src="$imagesUrl + item.indexImage"/></span>
            <div class="home_goods_text">
              <p class="desc">{{item.name}}</p>
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
  name: 'HomeListrm',
  goodId: 0,
  props: {
    list: Array
  },
  mounted () {
    this.goodId = this.$route.params.goodId
  }
}
</script>

<style scoped src="../../../assets/styles/home.css">
</style>
