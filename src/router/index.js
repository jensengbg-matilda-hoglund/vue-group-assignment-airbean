import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import About from "../views/About.vue";
import Menu from "../views/Menu.vue";
import OrderStatus from "../views/OrderStatus.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu
  },
  {
    path: "/order-status",
    name: "OrderStatus",
    component: OrderStatus
  }
];

const router = new VueRouter({
  routes
});

export default router;
