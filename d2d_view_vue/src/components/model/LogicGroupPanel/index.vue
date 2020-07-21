<template>
    <div>
        <a-button type="primary">
            新建分组
        </a-button>
        <a-layout>
            <a-table row-key="id" :columns="columns" :data-source="logicList">
                <span slot="name" slot-scope="text, record">
                    <a @click="viewModelGroup(record.id)">{{ text }}</a>
                </span>
                <span slot="action" slot-scope="record">
                    <a @click="publishModelGroup(record.id)">发布</a>
                    <a-divider type="vertical" />
                    <a>版本日志</a>
                    <a-divider type="vertical" />
                    <a>重命名</a>
                    <a-divider type="vertical" />
                    <a>删除</a>
                    <a-divider type="vertical" />
                    <a class="ant-dropdown-link">
                        更多 <a-icon type="down" />
                    </a>
                </span>
            </a-table>
        </a-layout>
    </div>
</template>

<script src="./index.js"></script>
<style lang="less">
@import "./index.less";
</style>
