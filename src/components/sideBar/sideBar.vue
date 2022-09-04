<template>
  <div class="sideleft2">
    <h2 class="title">
      <a href="https://github.com/Mason71">Mohsen NewCastle</a>
    </h2>
    <v-card class="pa-12" color="indigo darken-3" float>
      <v-card>
        <v-navigation-drawer floating permanent>
          <v-list-item-group color="blue" v-model="model">
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-navigation-drawer>
      </v-card>
    </v-card>

    <div class="end-sidebar">
      <div>
        <v-btn elevation="24" block x-large
          ><v-icon>{{ "mdi-headphones" }}</v-icon
          >Support
        </v-btn>
      </div>
      <div>
        <v-btn elevation="24" block x-large
          ><v-icon>{{ "mdi-help-circle-outline" }}</v-icon
          >Help!</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Instance", icon: "mdi-plus-box-outline" },
        { title: "SnapShots", icon: "mdi-content-copy" },
        { title: "SSH", icon: "mdi-key-outline" },
        { title: "Volume", icon: "mdi-dns-outline" },
        { title: "Billing", icon: "mdi-currency-usd" },
        { title: "Networking", icon: "mdi-wifi" },
        { title: "Report", icon: "mdi-file-chart-outline" },
      ],
      model: 1,
    };
  },
};
</script>

<style scoped>
.v-list {
  padding: 0 10px;
}
.title {
  background-color: rgb(241, 241, 241);
  padding: 8px;
  height: 50px;
}
.end-sidebar {
  padding-top: 300px;
  width: 100%;
  margin-bottom: 20px;
}
.sideleft2 {
  background-color: white;
}
::v-deep .v-list-item--link:before {
  background-color: #2c5eff !important;
}
::v-deep .theme--light.v-btn.v-btn--has-bg {
  background-color: white;
}
</style>
