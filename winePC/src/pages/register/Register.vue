<template>
  <div class="register_table">
    <div class="register_table_cell">
      <register-cont></register-cont>
    </div>
  </div>
</template>

<script>
import RegisterCont from './components/Cont'
export default {
  name: 'Register',
  components: {
    RegisterCont
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
