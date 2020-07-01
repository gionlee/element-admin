import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import ElementUI from "element-ui";
import "./styles.scss";
const context = require.context("./components", true, /\.vue$/);
context.keys().forEach((key) => {
  console.log(context(key).default.name);
  Vue.component(context(key).default.name, context(key).default);
});
Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
