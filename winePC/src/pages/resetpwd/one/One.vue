<template>
  <div class="register_table">
      <div class="register_table_cell">
        <div class="register_content">
          <one-cont></one-cont>
        </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import OneCont from './components/Cont'
export default {
  name: 'One',
  components: {
    OneCont
  }
}
</script>

<style>
  @import '../../../assets/styles/login.css'
</style>
