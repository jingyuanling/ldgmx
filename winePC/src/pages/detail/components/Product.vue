<template>
  <div class="good_down_left">
    <ul class="good_down_head">
      <li v-on:click="detailClick" v-bind:class="shows == true ? 'li_active' : ''">商品详情</li>
      <li v-on:click="evalClick" v-bind:class="shows == false ? 'li_active' : ''">评论</li>
    </ul>
    <div class="good_detailImg" v-if="!detailShow" v-html="produce"></div>
    <div class="good_eval_module" v-else>
      <div class="satisfy_degree">
        <div class="left"><span>98%</span>满意</div>
        <div class="right">用户评价：<span class="iconfont">&#xe606;&#xe606;&#xe606;</span></div>
      </div>
      <ul class="eval_head_class">
        <li v-for="(evalClass, index) in evalClass" v-on:click="evalClassClick(index)" :key="index" v-bind:class="{ class_active : index == current }">{{ evalClass.text + evalClass.num }}</li>
      </ul>
      <ul class="good_eval_wrap">
        <li class="eval_content" v-for="(item, index) in evalList" :key="index">
          <div class="eval_photo"><img :src="item.photo"></div>
          <div class="eval_detail_tit">
            <span class="eval_name">{{item.userName}}</span>
            <p class="right_eval_time">
              <span class="iconfont">&#xe606;&#xe606;&#xe606;</span>
              <span class="eval_time">2019-02-13  22:04</span>
            </p>
          </div>
          <p class="eval_detail">{{item.text}}</p>
          <div class="eval_img">
            <div class="img" v-for="(item1, index) in item.evalImgUrl" :key="index">
              <img :src="item1">
            </div>
          </div>
          <div class="eval_big_img">
            <div class="img" v-for="(item1, index) in item.evalImgUrl" :key="index">
              <img :src="item1">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'DetailProduce',
  props: {
    produce: String
  },
  data () {
    return {
      shows: true,
      detailShow: false,
      current: 0,
      evalClass: [
        { text: '全部', num: '100' },
        { text: '好评', num: '200' },
        { text: '中评', num: '300' },
        { text: '差评', num: '400' }
      ],
      evalList: [{
        photo: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
        userName: '张三',
        text: '很好,一直喜欢小米的东西,我买的小米产品。以前从不去评价,不知浪费了多少的积分,现在总算知道积分可以换 钱,就要好好地评价了,',
        evalImgUrl: [
          'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
        ]
      }, {
        photo: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
        userName: '张三',
        text: '很好,一直喜欢小米的东西,我买的小米产品。以前从不去评价,不知浪费了多少的积分,现在总算知道积分可以换 钱,就要好好地评价了,',
        evalImgUrl: [
          'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
        ]
      }, {
        photo: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
        userName: '张三',
        text: '很好,一直喜欢小米的东西,我买的小米产品。以前从不去评价,不知浪费了多少的积分,现在总算知道积分可以换 钱,就要好好地评价了,',
        evalImgUrl: [
          'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg',
          'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
        ]
      }]
    }
  },
  methods: {
    detailClick () {
      this.shows = true
      this.detailShow = false
    },
    evalClick () {
      this.shows = false
      this.detailShow = true
    },
    evalClassClick (index) {
      this.current = index
    }
  }
}
</script>

<style scoped src="../../../assets/styles/home.css">
</style>
<style scoped src="../../../assets/styles/goods-detail.css">
</style>
