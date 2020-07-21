import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Source from "./views/Source/Source.vue";
import Model from "./views/Model/Model.vue";
import Introduce from "./views/Introduce/Introduce.vue";
import Transform from "./views/Transform/Transform.vue";
import Config from "./views/Config/Config.vue";
import Version from "./views/Version/Version.vue";
import Task from "./views/Task/Task.vue";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

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
                    path: "/source",
                    name: "source",
                    meta: { title: "数据源" },
                    component: Source
                },
                {
                    path: "/task",
                    name: "task",
                    meta: { title: "任务管理" },
                    component: Task
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
