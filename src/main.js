import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify/lib";
import vuetify from "./plugins/vuetify";
import "@mdi/font/css/materialdesignicons.css";
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(Vuelidate);
Vue.config.devtools = true;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
