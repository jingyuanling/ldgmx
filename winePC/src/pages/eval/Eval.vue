<template>
  <div class="goods_eval_wrap">
    <div class="goods_eval_cont_wrap">
      <div class="goods_eval_cont">
        <div class="eval_center">
          <eval-left></eval-left>
          <eval-right></eval-right>
        </div>
        <eval-btn></eval-btn>
      </div>
    </div>
  </div>
</template>

<script>
import EvalLeft from './components/Left'
import EvalRight from './components/Right'
import EvalBtn from './components/Btn'
export default {
  name: 'Eval',
  components: {
    EvalLeft,
    EvalRight,
    EvalBtn
  }
}
</script>

<style>
@import '../../assets/styles/goods-eval.css'
</style>
