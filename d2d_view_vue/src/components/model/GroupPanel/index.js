import Axios from "axios";
import AddGroup from "../AddGroup/index.vue";

const columns = [
    {
        title: "组名称",
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
    name: "GroupPanel",
    components: { AddGroup },
    data() {
        return {
            logicList: [],
            columns,
            visible: false
        };
    },
    mounted() {
        this.getGroupList();
    },

    methods: {
        getGroupList() {
            let url = this.MYURL.model.GroupList;
            Axios.get(url)
                .then(res => {
                    this.logicList = res.data;
                })
                .catch(e => {
                    console.log(
                        "Failed to get data, please check URL：" + url,
                        e
                    );
                });
        },

        publishModelGroup(p) {
            console.log("需要发布的的模型为：", p);
        },

        viewModelGroup(id) {
            console.log("tell upper which group i will view");
            this.$emit("listenSelectGroup", id);
        },

        showAddGroupForm() {
            this.visible = true;
        },

        listenGroupChange1() {
            console.log("i will reload group list");
            this.getGroupList();
            this.$emit("listenGroupChange");
        },
        listenVisible(p) {
            this.visible = p;
        }
    }
};
