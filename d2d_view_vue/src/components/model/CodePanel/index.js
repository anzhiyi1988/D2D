import Axios from "axios";

const columns = [
    {
        title: "代码名称",
        dataIndex: "name",
        key: "name",
        scopedSlots: { customRender: "name" }
    },
    {
        title: "表名",
        dataIndex: "tableName",
        key: "tableName"
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
    watch: {
        groupId: function(val) {
            this.getCodeList(val);
        }
    },
    mounted() {
        this.getCodeList(this.groupId);
    },
    methods: {
        openAddCodeForm(groupId) {
            const path = this.$router.resolve({
                name: "code_add",
                query: { gId: groupId }
            });
            window.open(path.href, "_blank");
        },
        openEditCodeForm(code) {
            console.log("update code :", code);
        },
        viewCode(code) {
            console.log("display code :", code);
        },
        delCode(code) {
            console.log("delete code :", code);
        },
        addCode(groupId) {
            console.log("add code to this group : ", groupId);
        },
        getCodeList(codeGroupId) {
            console.log("select code list :", codeGroupId);
            let url = this.MYURL.model.CodeList;
            Axios.get(url, { params: { groupId: codeGroupId } })
                .then(res => {
                    this.codeList = res.data;
                })
                .catch(e => {
                    console.log(
                        "Failed to get data, please check URL：" + url,
                        e
                    );
                });
        }
    }
};
