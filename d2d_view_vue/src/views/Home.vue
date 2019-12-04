<template>
    <a-layout id="components-layout-demo-top-side-2">
        <a-layout-header class="header">
            <div class="logo">D2D</div>
            <a-menu
                theme="dark"
                mode="horizontal"
                :selectedKeys="selectedKeys"
                :style="{ lineHeight: '64px' }"
            >
                <template v-for="d in menuData">
                    <a-menu-item
                        :key="d.path"
                        @click="() => $router.push({ path: d.path })"
                    >
                        {{ d.meta.title }}
                    </a-menu-item>
                </template>
            </a-menu>
        </a-layout-header>
        <router-view></router-view>
        <a-layout-footer :style="{ textAlign: 'center' }">
            D2D ©2019 Created by Anzhiyi
        </a-layout-footer>
    </a-layout>
</template>
<script>
export default {
    watch: {
        "$route.path": function(val) {
            this.selectedKeys = this.selectedKeysMap[val];
        }
    },
    data() {
        this.selectedKeysMap = {};
        const menuData = this.getMenuData();
        return {
            menuData,
            selectedKeys: this.selectedKeysMap[this.$route.path],
            collapsed: true
        };
    },
    methods: {
        getMenuData() {
            let menuData = [];
            for (let d of this.$router.options.routes) {
                if (d.name == "home") {
                    menuData = d.children;
                    for (let dd of d.children) {
                        this.selectedKeysMap[dd.path] = [dd.path];
                    }
                }
            }
            return menuData;
        }
    }
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
}
</style>
