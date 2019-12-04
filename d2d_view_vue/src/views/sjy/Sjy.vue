<template>
    <a-layout>
        <a-layout-sider width="200" style="background: #fff">
            <a-menu
                theme="dark"
                mode="inline"
                :defaultSelectedKeys="['1']"
                :defaultOpenKeys="['sub1']"
                :style="{ height: '100%', borderRight: 0 }"
            >
                <a-menu-item key="1">连接池管理</a-menu-item>
                <a-menu-item key="2">文件源管理</a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
            <a-breadcrumb style="margin: 16px 0">
                <a-breadcrumb-item>数据源</a-breadcrumb-item>
                <a-breadcrumb-item>连接池管理</a-breadcrumb-item>
            </a-breadcrumb>
            <a-layout-content
                :style="{
                    background: '#fff',
                    padding: '24px',
                    margin: 0,
                    minHeight: '280px'
                }"
            >
                Content
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
export default {
    name: "Sjy"
};
</script>

<style scoped></style>
