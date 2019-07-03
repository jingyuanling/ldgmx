<template>
  <div class="nav-container" @mouseleave="classMouseleave()">
    <ul class="nav-list">
      <li class="nav-item">
        <span style="width: 100%;text-align: left;">
          <router-link to="/" class="recom">聚鑫推荐</router-link>
        </span>
      </li>
      <li class="nav-item" v-for="(item, index) in list" :key="item.id" v-if="index % 2 == 0"
       @mouseenter="classMouseenter(index < list.length ? list[index].id : '', index+1 < list.length ? list[index+1].id : '', list[index].name, index+1 < list.length ? list[index+1].name : '')"
      >
        <span v-if="index < list.length"><router-link :to="{name: 'List', params: {goodId: list[index].id, num: 1, className: list[index].name}}">{{list[index].name}}</router-link></span>
        <span v-if="index+1 < list.length" class="iconfont"><router-link :to="{name: 'List', params: {goodId: list[index+1].id, num: 1, className: list[index+1].name}}">{{list[index+1].name}}</router-link></span>
      </li>
    </ul>
    <div class="nav-detail" v-show="!secondShow">
      <div class="cate-detail-group">
        <p class="title">{{classOne}}</p>
        <ul class="cate-detail-list">
          <li class="m-tag-a" v-for="(secondItem, secondIndex) in secondDataOne" :key="secondIndex">
            <router-link :to="{name: 'List', params: {goodId: secondItem.id, num: 2, className: secondItem.name}}">
              <img :src="$imagesUrl + secondItem.image"/>
              <span>{{secondItem.name}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="cate-detail-group">
        <p class="title">{{classTwo}}</p>
        <ul class="cate-detail-list">
          <li class="m-tag-a" v-for="(secondItem, secondIndex) in secondDataTwo" :key="secondIndex">
            <router-link :to="{name: 'List', params: {goodId: secondItem.id, num: 2, className: secondItem.name}}">
              <img :src="$imagesUrl + secondItem.image"/>
              <span>{{secondItem.name}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { jxPost } from '../../../../config/utils/api'
export default {
  name: 'HomeClass',
  data () {
    return {
      classOne: '',
      classTwo: '',
      secondShow: true,
      classSecondDataTwo: [],
      secondDataOne: [],
      secondDataTwo: []
    }
  },
  props: {
    list: Array
  },
  methods: {
    classMouseleave () {
      this.secondShow = true
    },
    async classMouseenter (itemIdOne, itemIdTwo, classOne, classTwo) {
      this.secondShow = false
      this.classOne = classOne
      this.classTwo = classTwo
      let classSecondList = {
        'method': 'get.category.byId',
        'name': '2'
      }
      let classSecondListId = {
        'id': itemIdOne
      }
      let classSecondListIdTwo = {
        'id': itemIdTwo
      }
      let classSecondData = await jxPost(classSecondList, classSecondListId)
      this.classSecondDataTwo = await jxPost(classSecondList, classSecondListIdTwo)
      this.secondDataTwo = this.classSecondDataTwo.list
      this.secondDataOne = classSecondData.list
      console.log(this.secondDataOne)
    }
  }
}
</script>

<style scoped src="../../../assets/styles/home.css">
</style>
