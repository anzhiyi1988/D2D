const columns = [
    {
        title: "代码名称",
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
    name: "CodePanel",

    props: {
        groupId: {
            type: String,
            require: true
        }
    },

    data() {
        return {
            codeList: [],
            columns
        };
    },
    mounted() {
        this.getCodeList(this.groupId);
    },
    methods: {
        viewCode(code) {
            console.log("display code :", code);
        },
        updCode(code) {
            console.log("update code :", code);
        },
        delCode(code) {
            console.log("delete code :", code);
        },
        addCode(groupId) {
            console.log("add code to this group : ", groupId);
        },
        getCodeList(codeGroupId) {
            console.log("select code list :", codeGroupId);
        }
    }
};
