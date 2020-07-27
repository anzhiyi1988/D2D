<template>
    <div>
        <a-form layout="horizontal" :form="form">
            <a-form-item
                label="代码业务名称"
                :validate-status="code.valid.status"
                :help="code.valid.msg"
            >
                <a-input
                    style="width: 20%"
                    v-model="code.name"
                    @change="change(code.name)"
                />
            </a-form-item>
            <a-form-item label="数据库表名(上面名称的拼音)">
                <a-input disabled style="width: 20%" v-model="code.tableName" />
            </a-form-item>
            <p>下面开始填写代码值</p>
            <a-button type="primary" @click="addRow()">
                加一行
            </a-button>
            <a-form-item
                :key="row.index"
                v-for="row in code.rows"
                :validate-status="row.valid.status"
                :help="row.valid.msg"
            >
                <a-input-group>
                    <a-input
                        v-model="row.dmz"
                        style="width: 10%"
                        placeholder="代码值"
                    />
                    <a-input
                        v-model="row.dmmc"
                        style="width: 10%"
                        placeholder="代码名称"
                    />
                    <a-select
                        v-model="row.dmsfyx"
                        style="width: 10%"
                        placeholder="是否有效"
                    >
                        <a-select-option value="1">
                            是
                        </a-select-option>
                        <a-select-option value="2">
                            否
                        </a-select-option>
                    </a-select>
                    <a-input
                        v-model="row.dmms"
                        style="width: 10%"
                        placeholder="备注"
                    />
                    <a-icon
                        v-if="code.rows.length > 1"
                        type="minus-circle-o"
                        @click="() => removeRow(row)"
                    />
                    <a-icon type="plus-circle" @click="() => addRow(row)" />
                </a-input-group>
            </a-form-item>
            <a-button type="primary" @click="handleSubmit">
                保存
            </a-button>
        </a-form>
    </div>
</template>

<script src="./index.js"></script>
<style lang="less">
@import "./index.less";
</style>
