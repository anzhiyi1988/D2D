<template>
    <div>
        <div class="div-inline">
            <h3>已匹配代码</h3>
            <nested-draggable :subs="list2" :isPut="true" />
        </div>
        <div class="div-inline">
            <h3>未匹配代码</h3>
            <nested-draggable :subs="list1" :isPut="false" />
        </div>
    </div>
</template>

<script>
import nestedDraggable from "./NestedDraggable";

export default {
    name: "TransformNested",
    order: 3,
    components: {
        nestedDraggable
    },
    data() {
        return {
            list1: [
                { name: "原始代码1", id: 1, subs: [] },
                { name: "原始代码2", id: 2, subs: [] },
                { name: "原始代码3", id: 3, subs: [] },
                { name: "原始代码4", id: 4, subs: [] },
                { name: "原始代码5", id: 5, subs: [] },
                { name: "原始代码6", id: 6, subs: [] },
                { name: "原始代码7", id: 7, subs: [] }
            ],
            list2: [
                { name: "标准代码1", id: 1, subs: [] },
                { name: "标准代码2", id: 2, subs: [] },
                { name: "标准代码3", id: 3, subs: [] }
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
