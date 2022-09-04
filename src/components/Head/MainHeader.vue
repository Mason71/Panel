<template>
  <div class="header">
    <div class="ins">
      <v-breadcrumbs :items="items">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
            {{ item.text.toUpperCase() }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </div>
    <div>
      <div class="payy">
        <v-icon style="margin-right: 12px"
          >{{ "mdi-bell-ring-outline" }}
        </v-icon>

        <div class="usermoney">$ {{ Users.balance }}</div>

        <button @click="sayInfo = !sayInfo">
          <img
            style="margin-left: 12px"
            src="../../assets/Images/v-avatar.png"
          />
        </button>
      </div>
      <div>
        <div class="moshakhasat" v-if="sayInfo">
          <div>Name :{{ Users.first_name }}</div>
          <div>LastName :{{ Users.last_name }}</div>
          <div>Email :{{ Users.email }}</div>
          <div>Your Wallet :{{ Users.balance }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    items: [
      {
        text: "Instances",
        disabled: false,
        href: "#",
      },
      {
        text: "New Insstances",
        disabled: true,
        href: "breadcrumbs_link_1",
      },
    ],
    Users: {},
    sayInfo: false,
  }),

  mounted() {
    this.UserInfo();
  },
  methods: {
    UserInfo() {
      axios
        .get("https://assignment.abrnoc.com/user-info")
        .then((response) => {
          this.Users = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {});
    },
  },
};
</script>

<style scoped>
.header {
  border-left: 1px solid #f1f9fe;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
}

.payy {
  height: 50px;
  display: flex;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
}
::v-deep .v-input__slot::before {
  border: unset !important;
}
::v-deep .v-text-field__slot {
  width: 150px;
  padding: 0 6px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
}
.usermoney {
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px 25px;
}
.moshakhasat {
  padding: 5px;
  right: 0%;
  border: 1px solid rgb(5, 5, 5);
  border-radius: 5px;
  position: absolute;
  background-color: #b3cad8;
  box-shadow: 10px 5px 5px red;
}
</style>
