<template>
  <div>
    <h2>Region</h2>
    <div class="main-country">
      <region-card
        :title="countries[0].name"
        :logo="require(`@/assets/Images/country/us.png`)"
        style="width: 30%"
        @clicked="clicked(countries[0], 0)"
        :activeCard="selectedItemIndex == 0 && true"
      />
      <region-card
        :title="countries[1].name"
        :logo="require(`@/assets/Images/country/german.png`)"
        style="width: 30%"
        @clicked="clicked(countries[1], 1)"
        :activeCard="selectedItemIndex == 1 && true"
      />
      <region-card
        :title="countries[2].name"
        :logo="require(`@/assets/Images/country/spain.png`)"
        style="width: 30%"
        @clicked="clicked(countries[2], 2)"
        :activeCard="selectedItemIndex == 2 && true"
      />
      <region-card
        :title="countries[3].name"
        :logo="require(`@/assets/Images/country/japon.png`)"
        style="width: 30%"
        @clicked="clicked(countries[3], 3)"
        :activeCard="selectedItemIndex == 3 && true"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RegionCard from "../Cards/regionCard.vue";
export default {
  components: { RegionCard },
  data() {
    return {
      countries: [],
      selectedItem: {},
      selectedItemIndex: null,
    };
  },
  mounted() {
    this.getCountry();
    setTimeout(() => {
      this.clicked(this.countries[1], 1);
    }, 500);
  },
  methods: {
    clicked(payload, index) {
      this.selectedItem = payload;
      this.selectedItemIndex = index;
      axios
        .get(`https://assignment.abrnoc.com/plans?region=${payload.name}`)
        .then((res) => {
          this.$emit("ipDatas", res.data);
        });
    },
    getCountry() {
      axios
        .get("https://assignment.abrnoc.com/regions")
        .then((response) => {
          this.countries = response.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
    },
  },
};
</script>

<style scoped>
.main-inst {
  width: 70%;
  height: 100%;
  margin: 23px;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
}
.country-box {
  display: flex;
  border: 1px solid #000;
  width: 226px;
  height: 72px;
}
.main-country {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
</style>
