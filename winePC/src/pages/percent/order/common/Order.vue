<template>
  <!--订单列表-->
  <ul class="payment_list">
    <li>
      <div class="payment_head">
        订单日期：<span class="order_date">2019/02/15&nbsp;13:23:33</span><span>18</span>分钟后订单关闭
        <span class="pay_state">待付款</span>
      </div>
      <ol class="payment_wrap">
        <li class="payment_cont">
          <div class="payment_goodImg">
            <img src="../../../../assets/home-goodImg.jpg"/>
          </div>
          <div class="desc_table">
            <div class="desc_cell">
              <p class="desc">
                <span class="name">皇凤贡酒16 浓香型白酒52°500ml*6瓶整箱装 运费到付</span>
                <span class="num">1</span>
              </p>
              <p class="iconfont price">369</p>
            </div>
          </div>
        </li>
        <li class="payment_cont">
          <div class="payment_goodImg">
            <img src="../../../../assets/home-goodImg.jpg"/>
          </div>
          <div class="desc_table">
            <div class="desc_cell">
              <p class="desc">
                <span class="name">皇凤贡酒16 浓香型白酒52°500ml*6瓶整箱装 运费到付</span>
                <span class="num">1</span>
              </p>
              <p class="iconfont price">369</p>
            </div>
          </div>
        </li>
      </ol>
      <div class="order_total">
        <p class="total">共<span>2</span>件商品，订单总金额：<span class="total_sum">5000元</span></p>
          <a href="javaScript:void(0)" class="order_pay">去支付</a>
          <a href="javaScript:void(0)" class="order_cancel">取消订单</a>
      </div>
    </li>
    <li>
      <div class="payment_head">
        订单日期：<span class="order_date">2019/02/15&nbsp;13:23:33</span><span>18</span>分钟后订单关闭
        <span class="pay_state">待付款</span>
      </div>
      <ol class="payment_wrap">
        <li class="payment_cont">
          <div class="payment_goodImg">
            <img src="../../../../assets/home-goodImg.jpg"/>
          </div>
          <div class="desc_table">
            <div class="desc_cell">
              <p class="desc">
                <span class="name">皇凤贡酒16 浓香型白酒52°500ml*6瓶整箱装 运费到付</span>
                <span class="num">1</span>
              </p>
              <p class="iconfont price">369</p>
            </div>
          </div>
        </li>
      </ol>
      <div class="order_total">
        <p class="total">共<span>2</span>件商品，订单总金额：<span class="total_sum">5000元</span></p>
        <a href="javaScript:void(0)" class="order_pay">去支付</a>
        <a href="javaScript:void(0)" class="order_cancel">取消订单</a>
      </div>
    </li>
  </ul>
</template>

<script type="text/javascript">
export default {
  name: 'CenterOrder'
}
</script>
