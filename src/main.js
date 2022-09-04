import Vue from "vue"
import app from "./App.vue"
import routes from "./router"
import VueRouter from "vue-router"


import vuetify from "./plugins/vuetify"


Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  vuetify,
  router,
  render: (h) => h(app),
}).$mount("#app");


