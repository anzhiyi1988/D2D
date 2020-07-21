const columns = [
    {
        title: "模型名称",
        dataIndex: "name",
        key: "name",
        scopedSlots: { customRender: "name" }
    },
    {
        title: "描述",
        dataIndex: "readme",
        key: "readme"
    },
    {
        title: "操作",
        key: "action",
        scopedSlots: { customRender: "action" }
    }
];

export default {
    name: "ModelPanel",
    props: {
        groupId: {
            type: String,
            require: true
        }
    },

    data() {
        return {
            modelList: [],
            columns
        };
    },
    mounted() {
        this.getCodeList(this.groupId);
    },
    methods: {
        viewCode(code) {
            console.log("display model :", code);
        },
        updCode(code) {
            console.log("update model :", code);
        },
        delCode(code) {
            console.log("delete model :", code);
        },
        addCode(groupId) {
            console.log("add model to this group : ", groupId);
        },
        getCodeList(codeGroupId) {
            console.log("select model list :", codeGroupId);
        }
    }
};
