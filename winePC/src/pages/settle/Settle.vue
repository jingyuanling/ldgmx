<template>
  <div class="settle_wrap">
    <div class="express-append">
      <div class="settle_content">
        <center-nav></center-nav>
      </div>
    </div>
  </div>
</template>

<script>
import CenterNav from '../percent/centnav/Nav'
export default {
  name: 'Settle',
  components: {
    CenterNav
  }
}
</script>

<style>
  @import '../../assets/styles/settle.css'
</style>
