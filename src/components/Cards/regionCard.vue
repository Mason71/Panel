<template>
  <div
    @click="clicked"
    class="allcard"
    :style="activeCard ? 'border: 2px solid blue' : 'border: 1px solid gray'"
  >
    <div
      :style="{ backgroundImage: 'url(' + logo + ')' }"
      class="image-logo"
    ></div>
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "",
      type: String,
    },
    logo: {
      default: "",
      type: String,
    },
    activeCard: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    clicked() {
      this.$emit("clicked");
    },
  },
};
</script>

<style scoped>
.allcard {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 16px 24px;
  margin: 10px;
}
.image-logo {
  border-radius: 50% !important;
  width: 40px;
  height: 40px;
  background-size: 85px;
  background-position: center;
  margin-right: 10px;
}

</style>
