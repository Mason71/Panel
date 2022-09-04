<template>
  <div class="main-page">
    <SideBarLeft class="left-side" />
    <div class="right-side">
      <MainHeader />
      <IntancesServices />
    </div>
  </div>
</template>

<script>
import MainHeader from "./Head/MainHeader.vue";
import SideBarLeft from "./sideBar/sideBar.vue";
import IntancesServices from "./Instances/InstancesServices.vue";

export default {
  components: { MainHeader, SideBarLeft, IntancesServices },
};
</script>

<style scoped>
*{
  background-color: #F1F9FE;
}
.main-page {
  display: flex;
}
.left-side {
  width: 17%;
}
.right-side {
  width: 83%;
}
</style>
