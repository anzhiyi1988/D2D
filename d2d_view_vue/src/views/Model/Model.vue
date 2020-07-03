<template>
    <a-layout>
        <a-layout-sider width="200" style="background: #fff">
            <a-menu
                mode="inline"
                :default-selected-keys="[modelTree.id]"
                :default-open-keys="[modelTree.id]"
                :style="{ height: '100%', borderRight: 0 }"
            >
                <a-menu-item
                    :key="modelTree.id"
                    @click="showMangement(modelTree.type)"
                >
                    {{ modelTree.name }}
                </a-menu-item>
                <template v-for="lev2 in modelTree.subs">
                    <a-sub-menu :key="lev2.id">
                        <span slot="title">
                            <span>{{ lev2.name }}</span>
                        </span>
                        <template v-for="lev3 in lev2.subs">
                            <a-menu-item
                                :key="lev3.id"
                                @click="showMangement(lev3.type)"
                            >
                                {{ lev3.name }}
                            </a-menu-item>
                        </template>
                    </a-sub-menu>
                </template>
            </a-menu>
        </a-layout-sider>
        <a-layout-content
            :style="{
                background: '#fff',
                padding: '24px',
                margin: 0,
                minHeight: '280px'
            }"
        >
            <GroupManage v-if="nodeType === 'root'" />
            <CodeManage v-if="nodeType === 'code'" />
            <ModelManage v-if="nodeType === 'model'" />
        </a-layout-content>
    </a-layout>
</template>

<script src="./index.js"></script>

<style scoped></style>
