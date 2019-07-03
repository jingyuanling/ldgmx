<template>
  <div>
    <div class="cart_head">
      <div class="all_txt">
        <span class="iconfont select cart_selectAll" @click="checkedAll()" :class="{'cart_select_active' : isCheckAll}">&#xe601;</span>
        <span class="selectAll_text">全选</span></div>
      <div class="product">商品信息</div>
      <div class="price">单价</div>
      <div class="num">数量</div>
      <div class="total">金额</div>
      <div class="edit">操作</div>
    </div>
    <div class="same_shop_goods" v-for="(storeItem, index) in cartGoodsList" :key="index">
      <div class="same_shop_goods_tit">
        <p class="cart_shop_name">
          <span class="iconfont select cart_selectStore" @click="checkedStore(storeItem)" :class="{'cart_select_active' : storeItem.checked}">&#xe601;</span>
          <span>{{storeItem.storeName}}</span></p>
        <span class="freight">免运费</span>
      </div>
      <ul class="cart_goods_list">
        <li v-for="(goodsItem, goodIndex) in storeItem.goodsList" :key="goodIndex">
          <div class="all_txt">
            <!-- 选择单个商品 -->
            <span class="iconfont select cart_selectOne" @click="checkedOne(storeItem, goodsItem)" :class="{'cart_select_active' : goodsItem.isChecked}">&#xe601;</span>
            <span class="cart_goodsImg"><img src="../../../assets/home-banner.jpg"/></span>
          </div>
          <div class="product"><p class="text">{{goodsItem.desc}}</p></div>
          <div class="iconfont price">{{goodsItem.price}}</div>
          <div class="num">
            <div class="buy_num">
              <span class="reduce" @click="goodsItem.num>1?goodsItem.num--:'1'">--</span>
              <input class="inp_num" type="text" onkeyup = "value=value.replace(/[^\d]/g,'')" name="" id="" :value="goodsItem.num" />
              <span class="increase clickable" @click="goodsItem.num<goodsItem.amount?goodsItem.num++:'30'">+</span>
            </div>
          </div>
          <div class="iconfont total">{{goodsItem.price * goodsItem.num}}</div>
          <div class="iconfont edit" @click="deletePro(index, goodIndex)">&#xe608;</div>
        </li>
      </ul>
    </div>
    <div class="cart_tical">
      <div class="all_txt"><span class="iconfont select cart_selectAll" @click="checkedAll()" :class="{'cart_select_active' : isCheckAll}">&#xe601;</span><span class="selectAll_text">全选</span><div class="total_num">已选<span>{{allCount}}</span>件</div></div>
      <div class="cart_tical_right">
        合计：<span class="iconfont set_amount">{{allPrice}}</span>
        <div class="cart_settlement" :class="{ 'disable' : !checkedHave }">去结算</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'CartList',
  data () {
    return {
      checkedHave: false,
      checkedHaveCount: 0,
      cartGoodsList: [{
        storeName: '光明行旗舰店',
        checked: false,
        checkedCount: 0,
        goodsList: [{
          isChecked: false,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          desc: '云米互联网浴霸 风暖版 白色',
          price: '1',
          num: '2',
          amount: '30'// 库存
        }]
      }, {
        storeName: '聚鑫旗舰店',
        checked: false,
        checkedCount: 0,
        goodsList: [{
          isChecked: false,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          desc: '云米互联网浴霸 风暖版 白色',
          price: '3',
          num: '1',
          amount: '30'
        }, {
          isChecked: false,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          desc: '云米互联网浴霸 风暖版 白色',
          price: '3',
          num: '1',
          amount: '30'
        }]
      }],
      isCheckAll: false,
      allPrice: 0,
      allShops: 0,
      allCount: 0
    }
  },
  methods: {
    deletePro (index, goodIndex) {
      if (this.cartGoodsList[index].goodsList.length === 1) {
        this.cartGoodsList[index].goodsList.splice(goodIndex, 1)
        this.cartGoodsList.splice(goodIndex, 1)
      } else {
        this.cartGoodsList[index].goodsList.splice(goodIndex, 1)
      }
    },
    checkedOne (storeItem, goodsItem) {
      !goodsItem.isChecked ? this._checkTrue(storeItem, goodsItem) : this._checkFalse(storeItem, goodsItem)
    },
    checkedStore (storeItem) {
      !storeItem.checked ? this._shopTrue(storeItem) : this._shopFalse(storeItem)
    },
    checkedAll () {
      this.isCheckAll = !this.isCheckAll
      this.isCheckAll ? this.cartGoodsList.forEach((storeItem) => { this._shopTrue(storeItem) }) : this.cartGoodsList.forEach((storeItem) => { this._shopFalse(storeItem) })
    },
    _totalPeice () {
      // 每次调用此方法，将初始值为0，遍历价格并累加
      this.allPrice = 0
      this.cartGoodsList.forEach(storeItem => {
        let products = storeItem.goodsList
        products.forEach(goodsItem => {
          if (goodsItem.isChecked) {
            this.allPrice += goodsItem.price * goodsItem.num
          }
        })
      })
    },
    _totalCount () {
      this.allCount = 0
      this.cartGoodsList.forEach(storeItem => {
        this.allCount += storeItem.checkedCount
      })
    },
    _checkTrue (storeItem, goodsItem) {
      goodsItem.isChecked = true
      this.checkedHaveCount++
      ++storeItem.checkedCount === storeItem.goodsList.length ? storeItem.checked = true : ''
      // 每选中一个商品，被选中的商品数加一，如果数值等于商品数，商店的全选状态为true
      storeItem.checked ? ++this.allShops === this.cartGoodsList.length ? this.isCheckAll = true : this.isCheckAll = false : ''
      // 当商店全选状态，每全选一个商店，被选中商店数加一，数值等于所有商店数，全选状态为true
      this.checkedHave = true
    },
    _checkFalse (storeItem, goodsItem) {
      goodsItem.isChecked = false
      this.checkedHaveCount--
      // 改变状态为false
      --storeItem.checkedCount
      // 被选中的商品数减一
      if (storeItem.checked) {
        storeItem.checked = false
        // 当商店状态为选中时改变false
        --this.allShops
        // 商店数减一
      }
      this.isCheckAll = false
      // 全选状态为false
      console.log(this.checkedHaveCount)
      if (this.checkedHaveCount > 0) {
        this.checkedHave = true
      } else {
        this.checkedHave = false
      }
    },
    _shopTrue (storeItem) {
      // 遍历商店每一个商品，状态为false的改变为true，又在_checkTrue()方法中将商店状态改为true
      storeItem.goodsList.forEach((goodsItem) => {
        goodsItem.isChecked === false ? this._checkTrue(storeItem, goodsItem) : ''
      })
    },
    _shopFalse (storeItem) {
      storeItem.goodsList.forEach((goodsItem) => {
        // 同上
        goodsItem.isChecked === true ? this._checkFalse(storeItem, goodsItem) : ''
      })
    }
  },
  watch: {
    cartGoodsList: {
      deep: true,
      handler (val, oldval) {
        this._totalPeice()
        this._totalCount()
      }
    }
  }
}
</script>
