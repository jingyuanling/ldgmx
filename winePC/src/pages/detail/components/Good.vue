<template>
  <div class="good_up_left">
    <div class="good_bigImg_wrap">
      <ul class="good_bigImg">
        <li><img :src="$imagesUrl + ImgUrl"/></li>
      </ul>
    </div>
    <div class="good_samllImg_wrap">
      <div class="iconfont good_prev" id="prev" @click="prevClick()">&#xe63f;</div>
      <div class="iconfont good_next" id="next" @click="nextClick()">&#xe63f;</div>
      <ul class="good_samllImg_ul">
        <li v-for="(item, index) in list" :key="item.id" :class="{samllImg_active : index == goodIndex}" @click="goodSwiperBtn(index, item.image)">
          <img :src="$imagesUrl + item.image"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'DetailGood',
  props: {
    list: Array
  },
  data () {
    return {
      x: '0',
      ImgUrl: '',
      goodIndex: '0',
      nextIndex: '0'
    }
  },
  methods: {
    goodSwiperBtn (index, itemImgUrl) {
      this.goodIndex = index
      this.ImgUrl = itemImgUrl
      console.log(index + '***' + this.goodIndex)
    },
    prevClick () {
      this.goodIndex--
      if (this.goodIndex <= 0) {
        this.goodIndex = 0
      }
      this.ImgUrl = this.list[this.goodIndex].image
      console.log(this.goodIndex)
    },
    nextClick () {
      this.goodIndex++
      if (this.goodIndex >= this.list.length) {
        this.goodIndex = this.list.length - 1
      }
      this.ImgUrl = this.list[this.goodIndex].image
      console.log(this.goodIndex)
    }
  },
  watch: {
    list (newValue, oldValue) {
      this.ImgUrl = newValue[0].image
    }
  }
}
</script>

<style scoped src="../../../assets/styles/home.css">
</style>
<style scoped src="../../../assets/styles/goods-detail.css">
</style>
