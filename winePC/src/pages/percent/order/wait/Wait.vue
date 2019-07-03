<template>
  <div class="person_center_wrap">
    <div class="person_content_wrap">
      <center-nav></center-nav>
      <div class="person_content">
        <center-sidebar></center-sidebar>
        <div class="person_right_box">
          <div class="item_order">
            <order-head></order-head>
            <center-order></center-order>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import CenterNav from '../../centnav/Nav'
import CenterSidebar from '../../sidebar/Sidebar'
import OrderHead from '../common/Head'
import CenterOrder from '../common/Order'
export default {
  name: 'Data',
  components: {
    CenterNav,
    CenterSidebar,
    OrderHead,
    CenterOrder
  }
}
</script>

<style>
  @import '../../../../assets/styles/person-center.css'
</style>
