<template>
  <div class="home_content">
    <home-banner></home-banner>
  </div>
</template>

<script>
import HomeBanner from './components/Banner'
export default {
  name: 'Home',
  components: {
    HomeBanner
  }
}
</script>

<style>
  .home_content
    width:1200px
</style>
