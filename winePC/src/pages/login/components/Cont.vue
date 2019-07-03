<template>
  <div class="login_content">
    <div class="login_content_left">
      <img src="../../../assets/login-security.jpg"/>
    </div>
    <div class="login_content_right">
      <div class="login_right_header_wrap">
        <span class="line"></span>
        <ul class="login_right_header">
          <li><router-link to='###'><span class="header_span_active">账户密码登录</span></router-link></li>
          <li><router-link to='###'><span>短信验证码登录</span></router-link></li>
        </ul>
      </div>
      <div class="login_inp_wrap">
        <div class="login_right_inp">
          <span class="iconfont">&#xe623;</span>
          <input type="text" name="" id="" value="" placeholder="用户名/手机号" />
          <p class="infor_error">用户名为空</p>
        </div>
        <div class="login_right_inp">
          <span class="iconfont">&#xe625;</span>
          <input type="text" name="" id="" value="" placeholder="请输入密码" />
          <p class="infor_error">用户名为空</p>
        </div>
        <p class="forgot_pwd"><a href="reset-pwd.html">忘记密码？</a></p>
        <button class="login_btn">登   录</button>
        <p class="iconfont free_register_link"><router-link to="###">免费注册 有惊喜</router-link></p>
        <p class="login_divider"><span class="line1"></span>使用以下账号登录<span class="line2"></span></p>
        <ul class="third_party">
          <li><router-link class="iconfont QQ" to="###">QQ</router-link></li>
          <li><router-link class="iconfont WX" to="###">微信</router-link></li>
        </ul>
      </div>
      <div class="login_veri_wrap">
        <div class="login_right_inp">
          <span class="iconfont">&#xe623;</span>
          <input type="text" name="" id="" value="" placeholder="用户名/手机号" />
          <p class="infor_error">用户名为空</p>
        </div>
        <div class="login_right_inp">
          <div class="login_right_veri">
             <input class="code_inp" type="text" placeholder="请输入验证码" />
            <button class="register_code_btn">获取短信验证码</button>
          </div>
          <p class="infor_error">验证码有误</p>
        </div>
        <button class="login_btn">登   录</button>
        <p class="iconfont free_register_link"><router-link to="###">免费注册 有惊喜</router-link></p>
        <p class="login_divider"><span class="line1"></span>使用以下账号登录<span class="line2"></span></p>
        <ul class="third_party">
          <li><router-link class="iconfont QQ" to="###">QQ</router-link></li>
          <li><router-link class="iconfont WX" to="###">微信</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'LoginCont'
}
</script>
