<template>
  <div>
    <p class="account_head">我的账户</p>
    <div class="account_state">
      <div class="left_balance">
        <p class="tit">我的可用余额</p>
        <p class="num">0.<small>00</small></p>
      </div>
      <div class="middle_state">
        <p><img src="../../../../assets/icon-balance.png"/>当前全部余额：0</p>
        <p><img src="../../../../assets/icon-income.png" alt="" />当前预估结算收入：0</p>
        <p><img src="../../../../assets/icon-state.png"/>当前账户状态：有效</p>
      </div>
      <div class="right_withdraw_btn">提现</div>
    </div>
    <div class="account_touch_head">
      <span>时间</span>
      <span>金额</span>
      <span>状态</span>
      <span>备注</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'AccountUp'
}
</script>
