<template>
  <div class="main-instances">
    <div style="width: 70%">
      <div class="left-side">
        <div><CoutryHost @ipDatas="IpHostData($event)" /></div>
        <div><IpHost :tableData="tableData" /></div>
      </div>
    </div>
    <div class="right-side"><PaymentSide /></div>
  </div>
</template>

<script>
import CoutryHost from "./CoutryHost.vue";
import IpHost from "./IpHost.vue";
import PaymentSide from "../PaymentSide/PaymentSide.vue";

export default {
  components: { CoutryHost, IpHost, PaymentSide },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    IpHostData(payload) {
      this.tableData = payload;
    },
  },
};
</script>

<style scoped>
.main-instances {
  padding: 32px;
  display: flex;
}
.right-side {
  width: 30%;
  margin-left: 30px;
  background: #ffffff;
  border-radius: 8px;
}
.left-side {
  background: #ffffff;
  border-radius: 8px;
  padding: 12px;
}
</style>
