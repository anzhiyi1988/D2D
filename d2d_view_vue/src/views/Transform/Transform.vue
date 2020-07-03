<template>
    <div class="row">
        <div class="div-inline">
            <h3>标准代码列表</h3>

            <a-menu
                style="width: 256px"
                mode="inline"
                :default-selected-keys="[dmList[0].id]"
                :default-open-keys="[dmList[0].code[0].id]"
                :selected-keys="[current]"
                @click="handleClick"
            >
                <template v-for="dl in dmList">
                    <a-sub-menu :key="dl.id">
                        <span slot="title"
                            ><span>{{ dl.name }}</span></span
                        >
                        <template v-for="c in dl.code">
                            <a-menu-item
                                :key="c.id"
                                @click="handleClick($event, dl, c)"
                            >
                                {{ c.name }}
                            </a-menu-item>
                        </template>
                    </a-sub-menu>
                </template>
            </a-menu>
        </div>
        <transformNested v-if="isNested == true" />
        <transformNonnested v-if="isNested == false" />
    </div>
</template>

<script>
import transformNested from "../../components/transform/TransformNested";
import transformNonnested from "../../components/transform/TransformNonnested";
export default {
    name: "Transform",
    display: "Custom Clone",
    order: 3,
    components: { transformNested, transformNonnested },
    data() {
        return {
            isNested: false,
            current: 1,
            dmList: [
                {
                    name: "监察委代码",
                    id: 1,
                    code: [
                        {
                            name: "性别",
                            id: 1,
                            content: "内容内容内容。。。。",
                            isNested: false
                        },
                        {
                            name: "职级",
                            id: 2,
                            content: "内容内容内容。。。。",
                            isNested: false
                        },
                        {
                            name: "行政区划",
                            id: 3,
                            content: "内容内容内容。。。。",
                            isNested: true
                        }
                    ]
                },
                {
                    name: "法院代码",
                    id: 2,
                    code: [
                        {
                            name: "性别",
                            id: 4,
                            content: "内容内容内容。。。。",
                            isNested: false
                        },
                        {
                            name: "案件类别",
                            id: 5,
                            content: "内容内容内容。。。。",
                            isNested: false
                        },
                        {
                            name: "审判程序",
                            id: 6,
                            content: "内容内容内容。。。。",
                            isNested: false
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        handleClick(e, lev1, lev2) {
            console.log("click ", e);
            console.log(lev1);
            console.log(lev2);
            this.current = e.key;
            this.isNested = lev2.isNested;
        }
    }
};
</script>

<style scoped>
.div-inline {
    float: left;
    width: 500px;
}
</style>
