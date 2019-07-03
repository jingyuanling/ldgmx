<template>
  <div class="m-site-top">
    <div class="container">
      <div class="nav-left">
        <span class="welcome">欢迎来到灵动酒行！</span>
        <!--未登录-->
        <!--<a class="nav-login" href="login.html">请登录</a>-->
        <!--***-->
        <!--已登录-->
        <div class="nav-login present-user">
          <a href="person-center.html" class="nav-userName">
            <span class="userPhoto"><img src="../../assets/home-clock.png"/></span>
            <span class="iconfont userName"><i>name</i></span>
          </a>
          <ul class="nav-user-list">
            <li><a href="my-order.html">我的订单</a></li>
            <li><a href="my-account.html">我的账户</a></li>
            <li><a href="my-agent.html">我的代理</a></li>
            <li><a href="team-manage.html">团队管理</a></li>
            <li><a href="my-service-collect.html">我的服务</a></li>
            <li><a href="personal-data.html">个人资料</a></li>
          </ul>
        </div>
        <a class="nav-register" href="register.html">免费注册</a>
      </div>
      <div class="nav-right">
        <ul class="nav-right-ul">
          <li>
            <router-link to="/" class="iconfont home-link">首页</router-link>
          </li>
          <li>
            <router-link to="/">我的订单 </router-link>
          </li>
          <li>
            <router-link to="/">备案中心</router-link>
          </li>
          <li>
            <span>关注微信</span>
          </li>
          <li>
            <span>网站导航</span>
          </li>
          <li>
            <a href="/help">帮助中心</a>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'CommonNavu'
}
</script>

<style>

<style>
