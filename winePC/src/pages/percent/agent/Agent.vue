<template>
  <div class="person_center_wrap">
    <div class="person_content_wrap">
      <center-nav></center-nav>
      <div class="person_content">
        <center-sidebar></center-sidebar>
        <div class="person_right_box">
          <div class="agent_wrap">
            <agent-up></agent-up>
            <agent-down></agent-down>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import CenterNav from '../centnav/Nav'
import CenterSidebar from '../sidebar/Sidebar'
import AgentUp from './components/Up'
import AgentDown from './components/Down'
export default {
  name: 'Account',
  components: {
    CenterNav,
    CenterSidebar,
    AgentUp,
    AgentDown
  }
}
</script>

<style>
  @import '../../../assets/styles/person-center.css';
  .person_item li:nth-child(3) a{
    color: #845f3f;
  }
  .person_item li:nth-child(3):before{
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
