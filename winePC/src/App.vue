<template>
  <div id="app">
    <div class="home_wrap">
      <common-navu v-if="navu_show"></common-navu>
      <common-navd v-if="navd_show"></common-navd>
      <keep-alive>
        <router-view v-on:navu="navu" v-on:navd="navd" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-on:navu="navu" v-on:navd="navd" v-if="!$route.meta.keepAlive" />
    </div>
  </div>
</template>

<script>
import CommonNavu from './pages/components/Navu'
import CommonNavd from './pages/components/Navd'
export default {
  name: 'App',
  data () {
    return {
      navu_show: true,
      navd_show: true
    }
  },
  components: {
    CommonNavu,
    CommonNavd
  },
  methods: {
    // 是否显示头部
    navu (bool) {
      this.navu_show = bool
    },
    // 是否显示底部
    navd (bool) {
      this.navd_show = bool
    }
  }
}
</script>

<style>
  #app{
    width:100%;
    height:100%;
  }
</style>
