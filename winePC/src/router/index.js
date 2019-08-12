import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
// import Register from '@/pages/register/Register'
import Detail from '@/pages/detail/Detail'
import List from '@/pages/list/List'
import Search from '@/pages/search/Search'
import Eval from '@/pages/eval/Eval'
import Cart from '@/pages/cart/Cart'
import Succ from '@/pages/cart/success/Succ'
import Account from '@/pages/percent/account/Account'
import Agent from '@/pages/percent/agent/Agent'
import Team from '@/pages/percent/team/Team'
import Address from '@/pages/percent/address/Address'
import Wait from '@/pages/percent/order/wait/Wait'
import Dasis from '@/pages/percent/data/dasis/Dasis'
import Fail from '@/pages/percent/data/approve/fail/Fail'
import Success from '@/pages/percent/data/approve/success/Success'
import One from '@/pages/resetpwd/one/One'
import Two from '@/pages/resetpwd/two/Two'
import Three from '@/pages/resetpwd/three/Three'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {keepAlive: true}
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        keepAlive: true,
        isLogin: false
      }
    }, {
    //   path: '/register',
    //   name: 'Register',
    //   component: Register,
    //   meta: {
    //     keepAlive: true,
    //     isLogin: false
    //   }
    // }, {
      path: '/detail/:goodId',
      name: 'Detail',
      component: Detail,
      meta: {keepAlive: false}
    }, {
      path: '/list/:goodId/:className/:num',
      name: 'List',
      component: List,
      meta: {keepAlive: false}
    }, {
      path: '/search/:keywords',
      name: 'Search',
      component: Search,
      meta: {keepAlive: true}
    }, {
      path: '/eval',
      name: 'Eval',
      component: Eval,
      meta: {keepAlive: false}
    }, {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        keepAlive: true,
        isLogin: true
      }
    }, {
      path: '/cart/success',
      name: 'Succ',
      component: Succ,
      meta: {keepAlive: true}
    }, {
      path: '/percent/account',
      name: 'Account',
      component: Account,
      meta: {keepAlive: true}
    }, {
      path: '/percent/agent',
      name: 'Agent',
      component: Agent,
      meta: {keepAlive: true}
    }, {
      path: '/percent/team',
      name: 'Team',
      component: Team,
      meta: {keepAlive: true}
    }, {
      path: '/percent/address',
      name: 'Address',
      component: Address,
      meta: {keepAlive: true}
    }, {
      path: '/percent/order/wait',
      name: 'Wait',
      component: Wait,
      meta: {keepAlive: true}
    }, {
      path: '/percent/data/dasis',
      name: 'Dasis',
      component: Dasis,
      meta: {keepAlive: true}
    }, {
      path: '/percent/data/approve/fail',
      name: 'Fail',
      component: Fail,
      meta: {keepAlive: true}
    }, {
      path: '/percent/data/approve/success',
      name: 'Success',
      component: Success,
      meta: {keepAlive: true}
    }, {
      path: '/resetpwd/one',
      name: 'One',
      component: One,
      meta: {keepAlive: true}
    }, {
      path: '/resetpwd/two',
      name: 'Two',
      component: Two,
      meta: {keepAlive: true}
    }, {
      path: '/resetpwd/three',
      name: 'Three',
      component: Three,
      meta: {keepAlive: true}
    }
  ]
})
