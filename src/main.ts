import Vue from "vue";

import store from "./store";

import App from "./App.vue";
import "./uni.promisify.adaptor";

Vue.config.productionTip = false;

store.dispatch("getSystemInfo");

const app = new (
  typeof App === "function" ? App : Vue.extend(Object.assign({ mpType: "app" }, App, store))
)();
app.$mount();
