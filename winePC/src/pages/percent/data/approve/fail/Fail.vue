<template>
  <div class="person_center_wrap">
    <div class="person_content_wrap">
      <center-nav></center-nav>
      <div class="person_content">
        <center-sidebar></center-sidebar>
        <div class="person_right_box" style="padding-top: 0;">
          <div class="person_data_wrap">
            <fail-state></fail-state>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import CenterNav from '../../../centnav/Nav'
import CenterSidebar from '../../../sidebar/Sidebar'
import FailState from './components/state'
export default {
  name: 'Fail',
  components: {
    CenterNav,
    CenterSidebar,
    FailState
  }
}
</script>

<style>
  @import '../../../../../assets/styles/person-center.css';
  .person_item li:nth-child(7) a{
    color: #845f3f;
  }
  .person_item li:nth-child(7):before{
    content: '';
    width: 6px;
    height: 6px;
    display: inline-block;
    background-color: #845F3F;
    border-radius: 50%;
    position: absolute;
    top: 22px;
    left: 40px;
  }
</style>
