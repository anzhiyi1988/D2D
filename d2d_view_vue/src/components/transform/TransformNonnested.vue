<template>
    <div class="row">
        <div class="div-inline">
            <h3>已匹配代码</h3>
            <draggable
                class="dragArea list-group"
                :list="list2"
                group="people"
                @change="log"
            >
                <div
                    class="list-group-item"
                    v-for="element in list2"
                    :key="element.id"
                >
                    {{ element.id }},{{ element.name }}
                </div>
            </draggable>
        </div>
        <div class="div-inline">
            <h3>未匹配代码</h3>
            <draggable
                class="dragArea list-group"
                :list="list1"
                :group="{ name: 'people', put: false }"
                :clone="cloneYDM"
                @change="log"
            >
                <div
                    class="list-group-item"
                    v-for="element in list1"
                    :key="element.id"
                >
                    {{ element.id }}, {{ element.name }}
                </div>
            </draggable>
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
    name: "TransformNonnested",
    display: "Custom Clone",
    order: 3,
    components: {
        draggable
    },
    data() {
        return {
            list1: [
                { name: "原始代码1", id: 1, content: "内容内容内容。。。。" },
                { name: "原始代码2", id: 2, content: "内容内容内容。。。。" },
                { name: "原始代码3", id: 3, content: "内容内容内容。。。。" },
                { name: "原始代码4", id: 4, content: "内容内容内容。。。。" },
                { name: "原始代码5", id: 5, content: "内容内容内容。。。。" },
                { name: "原始代码6", id: 6, content: "内容内容内容。。。。" },
                { name: "原始代码7", id: 7, content: "内容内容内容。。。。" }
            ],
            list2: [
                { name: "标准代码1", id: 1, content: "内容内容内容。。。。" },
                { name: "标准代码2", id: 2, content: "内容内容内容。。。。" },
                { name: "标准代码3", id: 3, content: "内容内容内容。。。。" }
            ]
        };
    },
    methods: {
        log: function(evt) {
            window.console.log(evt);
        },

        cloneYDM(e) {
            return e;
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
