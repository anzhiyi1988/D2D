import LogicGroupPanel from "../../components/model/LogicGroupPanel/index.vue";
import CodePanel from "../../components/model/CodePanel/index.vue";
import ModelPanel from "../../components/model/ModelPanel/index.vue";
import Axios from "axios";

export default {
    name: "Model",
    components: { LogicGroupPanel, CodePanel, ModelPanel },
    data() {
        return {
            groupType: this.MYCONST.LogicGroup,
            groupTree: [],
            currPath: [],
            gotoGroupId: ""
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
        },
        getGroupTree() {
            let url = this.MYURL.model.GroupTree;
            Axios.get(url)
                .then(res => {
                    console.log("model group tree is :", res.data);
                    this.groupTree = res.data;
                })
                .catch(e => {
                    console.log("获取数据失败，访问url ：" + url, e);
                });
        },
        gotoLogicPanel() {
            console.log("it is me !");
            this.currPath = [];
            this.groupType = this.MYCONST.LogicGroup;
        }
    }
};
