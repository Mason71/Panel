import MainPage from "./components/MainPage.vue";
import InstancesServices from "./components/Instances/InstancesServices.vue";

const routes = [
  {
    name: "mainPage",
    path: "/",
    component: MainPage,
    children: [
      {
        name: "instances",
        path: "instances",
        component: InstancesServices,
      },
    ],
  },
];

export default routes;
