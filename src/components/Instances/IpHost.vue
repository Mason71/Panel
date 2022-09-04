<template>
  <div>
    <h2>Plan</h2>
    <template>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="tableData"
        :single-select="singleSelect"
        item-key="cpu_cores"
        show-select
        class="elevation-1"
      >
      </v-data-table>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
    },
  },
  data() {
    return {
      singleSelect: true,
      selected: [],
      headers: [
        {
          text: "CPU",
          value: "cpu_cores",
          align: "center",
        },
        { text: "Hourly Price", value: "hourly_price", align: "center" },
        { text: "Storage", value: "memory_size_in_GB" },
        { text: "Connection speed", value: "connection_up_bound_speed" },
        { text: "Monthly price", value: "monthly_price" },
      ],
    };
  },
};
</script>

<style scoped>
::v-deep .v-data-footer {
  display: none;
}
</style>
