<template>
  <div class="register_table">
      <div class="register_table_cell">
        <div class="register_content">
          <three-cont></three-cont>
        </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import ThreeCont from './components/Cont'
export default {
  name: 'Three',
  components: {
    ThreeCont
  }
}
</script>

<style>
  @import '../../../assets/styles/login.css'
</style>
