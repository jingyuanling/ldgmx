<template>
  <div class="person_center_wrap">
    <div class="person_content_wrap">
      <center-nav></center-nav>
      <div class="person_content">
        <center-sidebar></center-sidebar>
        <div class="person_right_box">
          <div class="agent_wrap">
            <team-up></team-up>
            <team-down></team-down>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import CenterNav from '../centnav/Nav'
import CenterSidebar from '../sidebar/Sidebar'
import TeamUp from './components/Up'
import TeamDown from './components/Down'
export default {
  name: 'Team',
  components: {
    CenterNav,
    CenterSidebar,
    TeamUp,
    TeamDown
  }
}
</script>

<style>
  @import '../../../assets/styles/person-center.css';
  .person_item li:nth-child(4) a{
    color: #845f3f;
  }
  .person_item li:nth-child(4):before{
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
