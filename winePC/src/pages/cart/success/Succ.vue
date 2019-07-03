<template>
  <div class="list_content_wrap">
    <div class="list_content">
      <succ-state></succ-state>
      <div class="list_module">
        <p class="prompt_recom_head">买购物车中商品的人还买了</p>
        <!-- <list-good></list-good> -->
      </div>
    </div>
  </div>
</template>

<script>
import SuccState from './components/State'
// import ListGood from '../../list/components/Good'
export default {
  name: 'Succ',
  components: {
    SuccState
    // ListGood
  }
}
</script>

<style>
@import '../../../assets/styles/home.css';
@import '../../../assets/styles/list.css'
</style>
