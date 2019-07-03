<template>
  <div class="cart_wrap">
    <div class="list_content cart_content">
      <center-nav></center-nav>
      <cart-list></cart-list>
    </div>
    <div class="list_module">
      <p class="list_module_head">猜你喜欢</p>
      <!-- <list-good></list-good> -->
    </div>
  </div>
</template>

<script>
import CenterNav from '../percent/centnav/Nav'
import CartList from './components/List'
// import ListGood from '../list/components/Good'
export default {
  name: 'Cart',
  components: {
    CenterNav,
    CartList
    // ListGood
  }
}
</script>

<style>
@import '../../assets/styles/home.css';
@import '../../assets/styles/list.css';
@import '../../assets/styles/cart.css'
</style>
