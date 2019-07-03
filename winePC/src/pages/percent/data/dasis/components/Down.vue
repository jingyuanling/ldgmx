<template>
  <div>
    <p class="person_data_head">您的安全服务</p>
    <div class="basic_content">
      <div class="safety_level">
        <div class="left">安全等级 ：</div>
        <div class="level">
          中<div class="level_bar_bg"><div class="level_bar"></div></div>
          <img src="../../../../../assets/level-icon.png"/>
          <p class="level_p">完成 以下设置 ，提升账户安全。</p>
        </div>
      </div>
      <div class="security_service">
        <div class="security security1"><span class="stateImg"><img src="../../../../../assets/fail-icon.png"/></span><p>已完成</p></div>
        <div class="security security2">身份认证</div>
        <div class="security security3">用于提升账号的安全性和信任级别。认证后的有卖家记录的账号不 能修改认证信息。</div>
        <a href="javaScript:void(0);" class="security security4">去认证<!--查看--></a>
      </div>
      <div class="security_service">
        <div class="security security1"><span class="stateImg"><img src="../../../../../assets/success-icon.png"/></span><p>已完成</p></div>
        <div class="security security2">登陆密码</div>
        <div class="security security3">安全性高的密码可以使账号更安全。建议您定期更换密码，且设置 一个包含数字和字母，并长度超过6位以上的密码。</div>
        <a href="javaScript:void(0);" class="security security4">修改</a>
      </div>
      <div class="security_service">
        <div class="security security1"><span class="stateImg"><img src="../../../../../assets/fail-icon.png"/></span><p>已完成</p></div>
        <div class="security security2">绑定手机</div>
        <div class="security security3">绑定手机后，您即可享受灵动酒行丰富的手机服务，如手机找回密码等。</div>
        <a href="javaScript:void(0);" class="security security4">去绑定<!--修改--></a>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'DasisDown'
}
</script>
