<template>
    <a-layout>
        <a-layout-sider width="200" style="background: #fff">
            <a-menu
                mode="inline"
                :selected-keys="[currKey]"
                :openKeys="[currOpenKey]"
                :style="{ height: '100%', borderRight: 0 }"
            >
                <template v-for="group in groupTree">
                    <a-sub-menu :key="group.id" @titleClick="titleClick">
                        <span slot="title">
                            <span>{{ group.name }}</span>
                        </span>
                        <template v-for="subGroup in group.child">
                            <a-menu-item
                                :key="subGroup.id"
                                @click="changePanel(group, subGroup)"
                            >
                                {{ subGroup.name }}
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
            <a-breadcrumb>
                <a-breadcrumb-item>
                    <a @click="gotoLogicPanel">模型管理</a>
                </a-breadcrumb-item>
                <template v-for="item in currPath">
                    <a-breadcrumb-item :key="item.id">
                        {{ item.name }}
                    </a-breadcrumb-item>
                </template>
            </a-breadcrumb>
            <GroupPanel
                v-if="groupType === this.MYCONST.LogicGroup"
                @listenGroupChange="listenGroupChange"
                @listenSelectGroup="listenSelectGroup"
            />
            <CodePanel
                v-if="groupType === this.MYCONST.CodeGroup"
                :groupId="gotoGroupId"
            />
            <ModelPanel v-if="groupType === this.MYCONST.ModelGroup" />
        </a-layout-content>
    </a-layout>
</template>

<script src="./index.js"></script>

<style scoped></style>
