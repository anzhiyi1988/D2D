import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Sjy from "./views/sjy/Sjy.vue";
import Mxgl from "./views/mxgl/Mxgl.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "",
            redirect: "/home"
        },
        {
            path: "/home",
            name: "home",
            component: Home,
            redirect: "/home/sjy",
            children: [
                {
                    path: "/home/sjy",
                    name: "sjy",
                    meta: { title: "数据源" },
                    component: Sjy
                },
                {
                    path: "/home/mxgl",
                    name: "mxgl",
                    meta: { title: "模型管理" },
                    component: Mxgl
                }
            ]
        }
    ]
});
