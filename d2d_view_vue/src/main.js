import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Layout, Menu, Button, Breadcrumb } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Layout);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Breadcrumb);
// Vue.use(Footer);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
