import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 设置属性
  state: {
    isLogin: true
  },
  // 设置属性状态
  getters: {
  	// 获取登陆状态
  	isLogin: state => state.isLogin
  },
  // 设置属性状态
  mutations: {
    userStatus(state, flag) {
      state.isLogin = flag
    }
  },
  // 应用mutations
  actions: {
  	// 获取登录状态
  	userLogin({commit}, flag) {
  	  commit("userStatus", flag)
  	}
  }
})
