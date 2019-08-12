<template>
  <div class="login_content">
    <div class="login_content_left">
      <img src="../../../assets/login-security.jpg"/>
    </div>
    <div class="login_content_right">
      <div class="login_right_header_wrap">
        <!-- <span class="line"></span> -->
        <ul class="login_right_header">
          <!-- <li><router-link to='###'><span class="header_span_active">账户密码登录</span></router-link></li> -->
          <li style="width: 100%;"><router-link to='###'><span>短信验证码登录</span></router-link></li>
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
        <!-- <p class="iconfont free_register_link"><router-link to="/register">免费注册 有惊喜</router-link></p> -->
        <p class="login_divider"><span class="line1"></span>使用以下账号登录<span class="line2"></span></p>
        <ul class="third_party">
          <li><router-link class="iconfont QQ" to="###">QQ</router-link></li>
          <li><router-link class="iconfont WX" to="###">微信</router-link></li>
        </ul>
      </div>
      <div class="login_veri_wrap">
        <div class="login_right_inp">
          <span class="iconfont">&#xe623;</span>
          <input type="text" name="" id="" value="" v-model="phone" placeholder="用户名/手机号" />
          <p class="infor_error">{{errors.phone}}</p>
        </div>
        <div class="login_right_inp">
          <div class="login_right_veri">
            <input class="code_inp" type="text" placeholder="请输入验证码" v-model="verifyCode" />
            <button class="register_code_btn" :disabled="disabled" @click="validateBtn()">{{btnTitle}}</button>
          </div>
          <p class="infor_error">{{errorsC.code}}</p>
        </div>
        <button class="login_btn" :disabled="submit" @click="loginBtn()">登   录</button>
        <!-- <p class="iconfont free_register_link"><router-link to="###">免费注册 有惊喜</router-link></p> -->
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
import { jxPost } from '../../../../config/utils/api'
export default {
  name: 'LoginCont',
  data () {
    return {
      phone: "",
      verifyCode: "",
      time: 59,
      btnTitle: "获取验证码",
      disabled: false,
      submit: true,
      errors: {},
      errorsC: {},
      getCodeDate: ''
    }
  },
  methods: {
    async getDetection () {
      if (!this.phone) {
        this.disabled = true
        this.errors = {
          phone: "手机号码不能为空"
        }
        this.disabled = false
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        this.disabled = true
        this.errors = {
          phone: "请输入正确的手机号"
        }
        this.disabled = false
      } else {
        this.submit = false
        this.disabled = false
        this.errors = {}
        const timer = setInterval (() => {
          if (this.time == 0) {
            clearInterval (timer)
            this.disabled = false
            this.btnTitle = "获取验证码"
          } else {
            this.btnTitle = this.time + '秒后重试'
            this.disabled = true
            this.time--
          }
        }, 1000)
        // 获取验证码
        let getCode = {
          'method': 'sms.code',
          'phoneNum': this.phone
        }
        let getCodeData = await jxPost(getCode)
        this.getCodeDate = getCodeData.list[0].sessionId
        return true
      }
    },
    async loginDetection () {
      if (!this.verifyCode || !/^\d{6}$/.test(this.verifyCode)) {
        this.submit = true
        this.errorsC = {
          code: "验证码有误"
        }
        this.submit = false
        return true
      } else {
        console.log(this.getCodeDate)
        let memberLogin = {
          'method': 'member.login',
          'phoneNum': this.phone,
          'sessionId': this.getCodeDate,
          'smsCode': this.verifyCode
        }
        let loginData = await jxPost(memberLogin)
        console.log(loginData)
        if (loginData.returnCode == 'SUCCESS') {
          // 存储会员信息
          this.errorsC = {}
          this.$router.push({
            path: '/'
          })
        } else {
           this.errorsC = {
            code: loginData.returnMsg
          }
        }
        
        return false
      }
    },
    validateBtn () {
      this.getDetection ()
    },
    loginBtn () {
      this.loginDetection ()
    }
  }
}
</script>
