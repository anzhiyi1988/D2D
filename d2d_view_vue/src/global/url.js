const server = "http://172.16.193.19:8090/d2d";

const url = {
    model: {
        GroupTree: `${server}/model/group/tree`,
        GroupList: `${server}/model/group/list`,
        AddGroup: `${server}/model/group/add`,
        AddCode: `${server}/model/code/add`,
        CodeList: `${server}/model/code/list`
    }
};

export default url;
