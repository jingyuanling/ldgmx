<template>
  <div class="good_detail_wrap">
    <div class="good_content_wrap">
      <div class="good_content">
        <div class="good_up">
          <detail-good :list="goodsImgList"></detail-good>
          <detail-desc :goodslist="goodsDetail"></detail-desc>
        </div>
        <div class="good_down">
          <detail-product :produce="detailProduct"></detail-product>
          <detail-recom></detail-recom>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailGood from './components/Good'
import DetailDesc from './components/Desc'
import DetailProduct from './components/Product'
import DetailRecom from './components/Recom'
import { jxPost } from '../../../config/utils/api'
export default {
  name: 'Detail',
  components: {
    DetailGood,
    DetailDesc,
    DetailProduct,
    DetailRecom
  },
  data () {
    return {
      goodsImgList: [],
      goodsDetail: {},
      detailProduct: ''
    }
  },
  async created () {
    let goodId = this.$route.params && this.$route.params.goodId
    let detailBigImg = {
      'method': 'get.goodsDetail.byId'
    }
    let detailImgId = {
      'id': goodId
    }
    let detailImgData = await jxPost(detailBigImg, detailImgId)
    this.goodsImgList = detailImgData.list[0].goodsImages
    this.goodsDetail = detailImgData.list[0].goodsMap
    this.detailProduct = detailImgData.list[0].goodsMap.introduction
    console.log(detailImgData)
  }
}
</script>

<style scoped src="../../assets/styles/home.css">
</style>
<style scoped src="../../assets/styles/goods-detail.css">
</style>
