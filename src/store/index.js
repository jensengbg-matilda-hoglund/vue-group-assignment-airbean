import Vue from "vue";
import Vuex from "vuex";
import postOrder from "./modules/postOrder";
import getMenu from "./modules/getMenu";
import getUuid from "./modules/getUuid";
import getOrderHistory from "./modules/getOrderHistory";
import postUser from "./modules/postUser";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menu: getMenu,
    order: postOrder,
    uuid: getUuid,
    orders: getOrderHistory,
    register: postUser
  }
});
