<template>
  <div class="person_center_wrap">
    <div class="person_content_wrap">
      <center-nav></center-nav>
      <div class="person_content">
        <center-sidebar></center-sidebar>
        <div class="person_right_box">
          <div class="account_wrap">
            <account-up></account-up>
            <account-down></account-down>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import CenterNav from '../centnav/Nav'
import CenterSidebar from '../sidebar/Sidebar'
import AccountUp from './components/Up'
import AccountDown from './components/Down'
export default {
  name: 'Account',
  components: {
    CenterNav,
    CenterSidebar,
    AccountUp,
    AccountDown
  }
}
</script>

<style>
  @import '../../../assets/styles/person-center.css';
  .person_item li:nth-child(2) a{
    color: #845f3f;
  }
  .person_item li:nth-child(2):before{
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
