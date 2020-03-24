import Vue from "vue";
import Vuex from "vuex";
import postOrder from "./modules/postOrder";
import getMenu from "./modules/getMenu";
import getProfile from "./modules/getProfile";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menu: getMenu,
    order: postOrder,
    profile: getProfile
  }
});
