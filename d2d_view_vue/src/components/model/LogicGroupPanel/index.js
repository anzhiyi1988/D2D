import Axios from "axios";

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
    name: "LogicGroupPanel",
    data() {
        return {
            logicList: [],
            columns
        };
    },
    mounted() {
        this.getLogicGroupList();
    },

    methods: {
        getLogicGroupList() {
            let url = this.MYURL.model.LogicGroupList;
            Axios.get(url)
                .then(res => {
                    console.log("数据是：", res);
                    this.logicList = res.data;
                })
                .catch(e => {
                    console.log(
                        "获取数据失败，请查看数据接口是否可访问：" + url,
                        e
                    );
                });
        },

        publishModelGroup(p) {
            console.log("需要发布的的模型为：", p);
        },

        viewModelGroup(p) {
            console.log("需要查看的模型为：", p);
        },
        addModelGroup() {}
    }
};
