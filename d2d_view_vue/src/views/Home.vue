<template>
    <a-layout id="components-layout-demo-top-side-2">
        <a-layout-header class="header">
            <div
                class="logo"
                @click="() => $router.push({ path: '/introduce' })"
            >
                <h1>D2D</h1>
            </div>
            <a-menu
                theme="dark"
                mode="horizontal"
                :selectedKeys="selectedKeys"
                class="menu"
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
            <div class="right-menu">
                <a-icon type="user" class="icon" />
                <span>安致宜</span>
                <a-icon
                    type="profile"
                    class="icon"
                    @click="() => $router.push({ path: '/version' })"
                ></a-icon>
            </div>
        </a-layout-header>
        <router-view></router-view>
        <a-layout-footer
            :style="{
                position: 'fixed',
                bottom: '2px',
                width: '100%',
                textAlign: 'center',
                height: '40px',
                padding: '12px 50px'
            }"
        >
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
            let d = this.$router.options.routes[0];
            for (let dd of d.children) {
                const newdd = { ...dd };
                if (!dd.hideInMenu) {
                    menuData.push(newdd);
                }
                this.selectedKeysMap[dd.path] = [dd.path];
            }
            return menuData;
        }
    }
};
</script>

<style scoped lang="less">
.header {
    height: 50px;

    .logo {
        width: 120px;
        height: 50px;
        overflow: hidden;
        line-height: 50px;
        display: inline-block;

        h1 {
            color: #ffffff;
            font-size: 30px;
            height: 30px;
            vertical-align: middle;
            text-align: center;
            cursor: pointer;
        }
    }

    .menu {
        width: 70%;
        height: 50px;
        overflow: hidden;
        line-height: 50px;
        display: inline-block;
    }

    .right-menu {
        width: 150px;
        height: 50px;
        overflow: hidden;
        line-height: 50px;
        display: inline-block;
        float: right;

        span {
            color: #ffffff;
            font-size: 15px;
            height: 20px;
            vertical-align: middle;
            line-height: 20px;
            width: 50px;
        }

        .icon {
            font-size: 25px;
            color: #ffffff;
            vertical-align: middle;
        }
    }
}
</style>
