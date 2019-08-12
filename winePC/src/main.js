// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import './assets/styles/nav-top.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.$imagesUrl = 'http://images.xqgmx.com/'
router.beforeEach((to, from, next) => {
  // 获取用户登录成功后储存的登录标志
  const getFlag = localStorage.getItem("Flag")
  // 如果登录标志存在且为isLogin，即用户已登录
  if (getFlag === "isLogin") {
    // 设置vuex登录状态为已登录
    store.state.isLogin = true
    next ()
    if (!to.meta.isLogin) {
      //iviewUi友好提示
      // iView.Message.error('请先退出登录')
      next ({
        path: '/home'
      })
    }
  // 如果登录标志不存在，即未登录
  } else {
    // 用户想进入需要登录的页面，则定向回登录界面
    if (to.meta.isLogin) {
      next ({
        path: '/login'
      })
      //iviewUi友好提示
      // iView.Message.info('请先登录')
      // 用户进入无需登录的界面，则跳转继续
    } else {
      next ()
    }
  }
}),
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})