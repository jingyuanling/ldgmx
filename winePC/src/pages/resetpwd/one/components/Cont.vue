<template>
  <div>
    <p class="register_logo"><img src="../../../../assets/login-logo.png"/></p>
    <h1 class="register_head">重置密码</h1>
    <div class="reset_pwd_infor">
      <p class="reset_pwd_head">请输入注册的手机号或灵动酒行账号</p>
      <ul class="register_infor_line">
        <li class="register_li">
          <div class="infor_line_main">
            <input class="infor_input" type="text" placeholder="请输入您的手机号" />
          </div>
          <!--<p class="infor_error">账号输入有误</p>-->
        </li>
        <li class="register_li">
          <div class="infor_line_main">
            <input class="code_img_inp" type="text" placeholder="图片验证码" />
            <button class="code_img"><img src="../../../../assets/home-banner.jpg"/></button>
          </div>
          <p class="infor_error">验证码输入有误</p>
        </li>
      </ul>
      <button class="register_now">下一步</button>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'OneCont'
}
</script>

<style>
</style>
