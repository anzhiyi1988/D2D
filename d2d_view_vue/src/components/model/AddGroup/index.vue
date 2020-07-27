<template>
    <a-modal
        :visible="visible"
        title="新建分组"
        cancelText="取消"
        okText="保存"
        @ok="handleSubmit"
        @cancel="handleCancel"
    >
        <a-form layout="vertical" :form="form">
            <a-form-item
                label="业务分组名称"
                :validate-status="validateStatus"
                :help="errorMsg"
            >
                <a-input
                    v-decorator="[
                        'logic_group_name',
                        {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input name!'
                                }
                            ]
                        }
                    ]"
                />
            </a-form-item>
        </a-form>
        <p>
            新建立分组后，会在其下面自动建立代码分组和模型分组，所以不要害怕！
        </p>
    </a-modal>
</template>

<script src="./index.js"></script>
<style lang="less">
@import "./index.less";
</style>
