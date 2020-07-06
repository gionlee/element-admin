import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import ElementUI from "element-ui";
import "./styles.scss";
const context = require.context("./components", true, /\.vue$/);
context.keys().forEach((key) => {
  if (!context(key).name) {
    context(key).name = key.replace(/\.vue$/, "").replace(/^\.\//, "");
  }
  Vue.component(context(key).name, context(key).default);
});
Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
