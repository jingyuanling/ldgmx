<template>
  <div class="register_table">
      <div class="register_table_cell">
        <div class="register_content">
          <two-cont></two-cont>
        </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import TwoCont from './components/Cont'
export default {
  name: 'Two',
  components: {
    TwoCont
  }
}
</script>

<style>
  @import '../../../assets/styles/login.css'
</style>
