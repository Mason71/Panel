<template>
  <div>
    <div class="payment">
      <h3 style="padding-top: 30px">Instance Quantity</h3>
    </div>

    <div class="add-num">
      <button @click="count--">-</button>
      <h4>{{ count }}</h4>
      <button @click="count++">+</button>
    </div>
    <div class="check-box">
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox"><p>Enable IPv4</p></label>
    </div>
    <div><h2 class="finall-price">Total :</h2></div>

    <div class="deploy"><v-btn block> Deploy NOW </v-btn></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
};
</script>

<style scoped>
.payment {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.add-num {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  height: 25px;
  width: auto;
  margin: 0 20px;
}
h4 {
  margin: 7px;
  width: 60%;
  height: 25px;
  border: 1px solid #bdbdbd;
}
.check-box {
  margin: 20px;
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 35px;
}
.finall-price {
  display: felx;

  margin-left: 25px;
}
::v-deep.v-btn {
  background-color: #00cd82 !important;
}
.deploy {
  margin: 20px !important;
}
</style>
