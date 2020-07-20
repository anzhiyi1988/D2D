import GroupManage from "../../components/model/GroupManage/index.vue";
import CodeManage from "../../components/model/CodeManage/index.vue";
import ModelManage from "../../components/model/ModelManage/index.vue";
export default {
    name: "Model",
    components: { GroupManage, CodeManage, ModelManage },
    data() {
        return {
            nodeType: "root",
            modelTree: {
                id: "root",
                name: "所有模型分组",
                type: "root",
                level: "1",
                subs: [
                    {
                        id: "1",
                        name: "中央信访原始库",
                        level: "2",
                        subs: [
                            {
                                name: "业务代码",
                                level: "3",
                                type: "code"
                            },
                            {
                                name: "业务模型",
                                level: "3",
                                type: "model"
                            }
                        ]
                    },
                    {
                        id: "2",
                        name: "中央信访标准库",
                        level: "2",
                        subs: [
                            {
                                name: "业务代码",
                                level: "3",
                                type: "code"
                            },
                            {
                                name: "业务模型",
                                level: "3",
                                type: "model"
                            }
                        ]
                    },
                    {
                        id: "3",
                        name: "中央信访主题库",
                        level: "2",
                        subs: [
                            {
                                name: "业务代码",
                                level: "3",
                                type: "code"
                            },
                            {
                                name: "业务模型",
                                level: "3",
                                type: "model"
                            }
                        ]
                    }
                ]
            }
        };
    },
    methods: {
        showMangement(type) {
            console.log("root is clicked ", type);
            this.nodeType = type;
        }
    }
};
