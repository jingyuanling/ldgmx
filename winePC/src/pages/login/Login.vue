<template>
  <div>
    <login-head></login-head>
    <div class="login_wrap">
      <login-cont></login-cont>
    </div>
  </div>
</template>

<script>
import LoginHead from './components/Head'
import LoginCont from './components/Cont'
export default {
  name: 'Login',
  components: {
    LoginHead,
    LoginCont
  },
  created () {
    this.$emit('navu', false)
    this.$emit('navd', false)
  }
}
</script>

<style>
  @import '../../assets/styles/login.css'
</style>
