import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MYCONST from "./global/const.js";
import MYURL from "./global/url.js";

Vue.prototype.MYURL = MYURL;
Vue.prototype.MYCONST = MYCONST;

import {
    Layout,
    Menu,
    Button,
    Breadcrumb,
    Icon,
    Tree,
    Table,
    Divider
} from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Layout);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Breadcrumb);
Vue.use(Icon);
Vue.use(Tree);
Vue.use(Table);
Vue.use(Divider);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
