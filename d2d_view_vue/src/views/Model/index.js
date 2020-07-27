import GroupPanel from "../../components/model/GroupPanel/index.vue";
import CodePanel from "../../components/model/CodePanel/index.vue";
import ModelPanel from "../../components/model/ModelPanel/index.vue";
import Axios from "axios";

export default {
    name: "Model",
    components: { GroupPanel, CodePanel, ModelPanel },
    data() {
        return {
            groupType: this.MYCONST.LogicGroup,
            groupTree: [],
            currPath: [],
            gotoGroupId: "",
            currKey: "",
            currOpenKey: ""
        };
    },
    mounted() {
        console.log("获取模型树初始加载方法");
        this.getGroupTree();
    },
    methods: {
        changePanel(group, subGroup) {
            this.groupType = subGroup.type;
            this.currPath = [];
            this.currPath.push(group);
            this.currPath.push(subGroup);
            this.gotoGroupId = subGroup.id;
            this.currKey = subGroup.id;
            this.currOpenKey = group.id;
        },
        getGroupTree() {
            let url = this.MYURL.model.GroupTree;
            Axios.get(url)
                .then(res => {
                    this.groupTree = res.data;
                })
                .catch(e => {
                    console.log(
                        "Failed to get data, please check URL：" + url,
                        e
                    );
                });
        },
        gotoLogicPanel() {
            this.currPath = [];
            this.groupType = this.MYCONST.LogicGroup;
        },
        listenGroupChange() {
            console.log("i will reload group tree");
            this.getGroupTree();
        },
        listenSelectGroup(key) {
            this.groupTree.forEach(group => {
                let id = group.id;
                if (id === key) {
                    this.changePanel(group, group.child[0]);
                }
            });
        },
        titleClick(e) {
            this.currOpenKey = e.key;
        }
    }
};
