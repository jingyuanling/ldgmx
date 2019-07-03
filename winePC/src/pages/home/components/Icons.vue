<template>
  <ul class="home_recom_class">
    <li v-for="item of list" :key="item.id">
      <router-link to="/list">
        <span><img :src="$imagesUrl + item.titlePage"/></span>
        <p>{{item.title}}</p>
      </router-link>
    </li>
  </ul>
</template>

<script type="text/javascript">
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  }
}
</script>

<style scoped src="../../../assets/styles/home.css">
</style>
