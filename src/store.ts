import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuList: [],
    navList: [],
  },
  mutations: {
    setMenuList(state, value) {
      state.menuList = value;
    },
    setNavList(state, value) {
      state.navList = value;
    },
  },
  actions: {},
});
