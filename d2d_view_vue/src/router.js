import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Source from "./views/Source/Source.vue";
import Model from "./views/Model/Model.vue";
import Introduce from "./views/Introduce/Introduce.vue";
import Transform from "./views/Transform/Transform.vue";
import Config from "./views/Config/Config.vue";
import Version from "./views/Version/Version.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: Home,
            redirect: "/introduce",
            children: [
                {
                    path: "/introduce",
                    name: "introduce",
                    hideInMenu: true,
                    meta: { title: "系统简介" },
                    component: Introduce
                },
                {
                    path: "/source",
                    name: "source",
                    meta: { title: "数据源" },
                    component: Source
                },
                {
                    path: "/model",
                    name: "model",
                    meta: { title: "模型管理" },
                    component: Model
                },
                {
                    path: "/transform",
                    name: "transform",
                    meta: { title: "转换管理" },
                    component: Transform
                },
                {
                    path: "/config",
                    name: "config",
                    meta: { title: "系统设置" },
                    component: Config
                },
                {
                    path: "/version",
                    name: "version",
                    hideInMenu: true,
                    meta: { title: "发版日志" },
                    component: Version
                }
            ]
        }
    ]
});
