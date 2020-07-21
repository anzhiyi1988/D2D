<template>
    <div>
        <a-button type="primary">
            新代码
        </a-button>
        <a-layout>
            <a-table :columns="columns" :data-source="codeList">
                <span slot="name" slot-scope="text, record">
                    <a @click="viewCode(record)">{{ text }}</a>
                </span>
                <span slot="action" slot-scope="record">
                    <a @click="updCode(record)">编辑</a>
                    <a-divider type="vertical" />
                    <a @click="delCode(record)">删除</a>
                </span>
            </a-table>
        </a-layout>
    </div>
</template>

<script src="./index.js"></script>
<style lang="less">
@import "./index.less";
</style>
