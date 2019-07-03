<template>
  <div>
    <p class="account_head">地址管理</p>
    <ul class="address_list">
      <li>
        <span class="checked_icon">默认</span>
        <p class="consignee consignee_name">张三</p>
        <p class="consignee consignee_tel">155****3419</p>
        <p class="consignee consignee_address">河南省郑州市金水区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区</p>
        <p class="consignee consignee_postcode">450000</p>
        <p class="consignee consignee_btn"><span class="consignee_change">修改</span><span class="consignee_del">删除</span></p>
      </li>
      <li>
        <span class="checked_icon">默认</span>
        <p class="consignee consignee_name">张三</p>
        <p class="consignee consignee_tel">155****3419</p>
        <p class="consignee consignee_address">河南省郑州市金水区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区区</p>
        <p class="consignee consignee_postcode">450000</p>
        <p class="consignee consignee_btn"><span class="set_checked_btn">设为默认地址</span><span class="consignee_change">修改</span><span class="consignee_del">删除</span></p>
      </li>
      <li class="address_add_btn">
        <div class="iconfont add_icon">&#xe608;</div>
        <p>添加新地址</p>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'AddressList'
}
</script>
