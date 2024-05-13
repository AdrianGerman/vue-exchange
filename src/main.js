import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  // eslint-disable-next-line prettier/prettier
  render: (h) => h(App)
}).$mount("#app");
