<template>
  <div class="good_up_right">
    <p class="good_name">{{goodslist.name}}</p>
    <div class="good_price_wrap">
      售价<span class="iconfont price">{{goodslist.maxPrice == goodslist.minPrice ? goodslist.minPrice : goodslist.minPrice + '~' + goodslist.maxPrice}}</span><span class="rebate">返利{{goodslist.minRebateScale == goodslist.maxRebateScale ? goodslist.minRebateScale : goodslist.minRebateScale + '~' + goodslist.maxRebateScale}}元</span>
    </div>
    <div class="speci_parent">
      <!-- 规格 -->
      <!-- <div class="speci_line" v-for="(specItem, classIndex) in specifications" :key="classIndex">
        <span class="speci_tit">{{specItem.name}}</span>
        <ul class="speci_datail">
          <li
            v-for="(oItem, speciIndex) in specItem.item" :key="speciIndex"
            @click="speciBtn(classIndex, speciIndex)" v-bind:class="{'speci-active' : oItem.select == true}"
          >{{oItem.name}}</li>
        </ul>
      </div> -->
      <div class="speci_line">
        <span class="speci_tit">购买数量</span>
        <div class="buy_num">
          <span class="sub" @click="count>1?count--:'1'">--</span>
          <input id="buy_num" type="text" onkeyup = "value=value.replace(/[^\d]/g,'')" name="" :value="count" />
          <span class="add" @click="count<30?count++:'30'">＋</span>
          <div>{{errorMessages}}</div>
        </div>
      </div>
      <div class="buy_cart_btn">
        <button class="buy_now">立即购买</button>
        <router-link to="../../cart"><button class="add_cart">加入购物车</button></router-link>
      </div>
      <div class="buy_cart_btn">
        <div class="add_collect" :class="{'add_collect_active' : !collectType}" @click="collectBtn()">
          <span class="iconfont" v-if="collectType">&#xe607;</span>
          <span class="iconfont" v-else>&#xe606;</span>
          <p v-if="collectType">收藏</p>
          <p v-else>已收藏</p>
        </div>
        <a href="###" class="link_service">
          <span class="iconfont">&#xe600;</span>
          <p>客服</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'DetailDesc',
  props: {
    goodslist: Object
  },
  data () {
    return {
      collectType: true,
      count: 1,
      errorMessages: '',
      select: false,
      specifications: [{
        name: '酒类度数',
        item: [{
          name: '42°',
          select: false
        }, {
          name: '52°',
          select: false
        }, {
          name: '62°',
          select: false
        }]
      },
      {
        name: '购买数量',
        item: [{
          name: '单瓶',
          select: false
        }, {
          name: '整箱六瓶',
          select: false
        }]
      }]
    }
  },
  methods: {
    speciBtn (classIndex, speciIndex) {
      for (var i = 0; i < this.specifications.length; i++) {
        if (classIndex === i) {
          for (var j = 0; j < this.specifications[i].item.length; j++) {
            this.specifications[i].item[j].select = false
            this.specifications[classIndex].item[speciIndex].select = true
          }
        }
      }
    },
    collectBtn () {
      this.collectType = !this.collectType
    }
  }
}
</script>

<style scoped src="../../../assets/styles/home.css">
</style>
<style scoped src="../../../assets/styles/goods-detail.css">
</style>
