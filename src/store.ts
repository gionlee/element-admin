import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuList: [],
    navList:[{
      path:'/',
      name:'index',
      meta: {
        title: '首页'
      }
    }]
  },
  mutations: {
    setMenuList (state,value) {
      state.menuList = value
    },
    setNavList (state,value) {
      state.navList = value
    }
  },
  actions: {
  },
});
  