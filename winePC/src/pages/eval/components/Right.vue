<template>
  <div class="eval_right">
    <div class="eval_star">
      <div class="eval_star_level">
        <ul class="iconfont eval_star_ul">
          <li v-for="starItem of 5" :key="starItem" @click="starClick(starItem)" :class="{ 'starActive' : starCur < starItem }"></li>
        </ul>
        <span>非常满意</span>
      </div>
    </div>
    <div class="star-desc" style="display: block;">
      <div class="fop-label tit">具体描述</div>
      <div class="f-textarea">
        <textarea maxlength="200" placeholder="完善服务，我们会做得更好~">完善服务，我们会做得更好~</textarea>
        <div class="textarea-ext">还可输入200字</div>
      </div>
    </div>
    <div class="eval_up_img">
      <div class="fop-label tit">上传图片</div>
      <div class="eval_up_img_right">
        <div class="hetsma">
          <input name="fileName847970190464385024" class="txt" id="fileName847970190464385024" type="text" placeholder="晒图">
          <input name="file" class="file valid" id="filepic847970190464385024" onchange="$('#fileName847970190464385024').val(this.value);" type="file" size="28">
          <input name="btnUpload" class="btn" onclick="doUpload('847970190464385024');" type="button" value="上传">
          <img width="15" height="15" id="filepic847970190464385024wait" style="display: none;" src="/static/img/mall/waiting.gif">
          <input name="pic847970190464385024" id="pic847970190464385024" type="hidden" value="">
          <span class="up_num"><b id="uploadCount847970190464385024">0</b>/3</span>
        </div>
        <div id="piclist847970190464385024" class="pingjia_xiu">
          <div class="pingjia_xiu_a" itemid="847970190464385024" data="group1/M00/03/79/dP_gVFyutWSAQNMLAACJa-ZFpRE285.jpg">
            <div class="pingjia_xiu_b">
              <img src="http://images.xqgmx.com/group1/M00/03/79/dP_gVFyutWSAQNMLAACJa-ZFpRE285.jpg">
            </div>
            <span class="iconfont eval_img_del"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'EvalRight',
  data () {
    return {
      scoreStartNum: 5,
      starCur: 5
    }
  },
  mounted () {

  },
  methods: {
    starClick (starItem) {
      this.starCur = starItem
    }
  }
}
</script>
