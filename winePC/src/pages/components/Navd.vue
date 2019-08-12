<template>
  <div class="home_nav" :class="{'home_nav_active' : !showNavd}">
    <div class="home_nav_content">
      <a href="home.html" class="home-logo"><img src="../../assets/home-logo.png"/></a>
      <div class="nav-part" v-show="!showNavd" @mouseenter="moreMouseenter()" @mouseleave="moreMouseleave()">
        <div class="iconfont nav-arrow-container">分类</div>
        <div class="nav-container-box">
          <home-class :list="classList" v-show="!showClass"></home-class>
        </div>
      </div>
      <ul class="home_nav_center">
        <li><a href="###">酒水年货节</a></li>
        <li><a href="###">创业礼包</a></li>
        <li><a href="###">限时抢购</a></li>
      </ul>
      <div class="home_nav_right">
        <div class="iconfont home_nav_inp">
            <button class="navSearchBtn" @click="searchBtn(keywords)"></button>
          <input type="text" name="" id="searchNavInp" v-model="name" value="this.keywords" @keyup.enter="searchBtn()" placeholder="年货节喝好酒 满299减50" />
        </div>
        <!-- <div class="iconfont home-cart" @click="handleCart()">&#xe61b;<span class="num">10</span></div> -->
        <router-link to="/cart" class="iconfont home-cart">&#xe61b;<span class="num">10</span></router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import HomeClass from '../home/components/Class'
import { jxPost } from '../../../config/utils/api'
export default {
  name: 'CommonNavd',
  components: {
    HomeClass
  },
  data () {
    return {
      name: '',
      keywords: '',
      showNavd: true,
      showClass: true,
      classList: []
    }
  },
  mounted () {
    // this.$store.commit('userStatus', 'true')
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 535) {
        this.showNavd = false
      } else {
        this.showNavd = true
      }
    },
    moreMouseenter () {
      this.showClass = false
      console.log(false)
    },
    moreMouseleave () {
      this.showClass = true
      console.log(true)
    },
    searchBtn () {
      this.keywords = this.name.toUpperCase()
      this.$router.push({path: '/Search/' + this.keywords})
    },
    handleCart () {
      alert(this.$store.state.isLogin)
      const isLogin = this.$store.state.isLogin
      if (isLogin == '0') {
        this.$router.push ({
          'path': '/Login'
        })
      } else {
        this.$router.push ({
          'path': '/cart'
        })
      }
    }
  },
  async created () {
    // 一级分类
    let classList = {
      'method': 'goods.category.get.first'
    }
    let classData = await jxPost(classList)
    this.classList = classData.list
    // 监测滚动轴
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>

<style>
