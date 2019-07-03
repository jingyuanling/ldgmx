<template>
  <div class="register_content">
    <p class="register_logo"><img src="../../../assets/login-logo.png"/></p>
    <h1 class="register_head">注册灵动酒行账号</h1>
    <div class="register_infor">
      <ul class="register_infor_line">
        <li>
          <div class="infor_line_main">
            <span class="headline">手&nbsp;机：</span>
            <input class="infor_input" type="text" placeholder="请输入您的手机号" />
          </div>
          <p class="infor_explain infor_error">手机号输入有误</p>
        </li>
        <li>
          <div class="infor_line_main">
            <span class="headline">密&nbsp;码：</span>
            <input class="infor_input" type="text" placeholder="请输入您要注册账号的密码" />
          </div>
          <p class="infor_explain">密码长度8～16位，数字、字母、字符至少包含两种 拷贝</p>
        </li>
        <li>
          <div class="infor_line_main">
            <span class="headline">确认密码：</span>
            <input class="infor_input" type="text" placeholder="请再次输入您要注册账号的密码" />
          </div>
          <p class="infor_explain">密码长度8～16位，数字、字母、字符至少包含两种 拷贝</p>
        </li>
        <li>
          <div class="infor_line_main">
            <span class="headline">验证码：</span>
            <div class="infor_input infor_security">
              <input class="code_inp" type="text" placeholder="请输入验证码" />
              <button class="register_code_btn">获取短信验证码</button>
            </div>
          </div>
        </li>
        <li>
          <div class="infor_line_main">
            <span class="infor_checkbox">
              <input class="checkbox_inp" type="checkbox" />我已经仔细阅读并接受 注册许可协议
            </span>
          </div>
        </li>
      </ul>
      <button class="register_now">立即注册</button>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'RegisterCont'
}
</script>
