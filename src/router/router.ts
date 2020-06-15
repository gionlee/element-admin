import Vue from "vue";
import Router from "vue-router";
import { routes } from "./routers";
Vue.use(Router);
export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});
