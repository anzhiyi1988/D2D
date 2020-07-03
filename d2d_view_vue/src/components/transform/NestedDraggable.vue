<template>
    <draggable
        class="dragArea"
        tag="ul"
        :list="subs"
        :group="{ name: 'people', put: this.isPut }"
    >
        <li v-for="el in subs" :key="el.name">
            <p>{{ el.id }},{{ el.name }} {{ isPut }}</p>
            <nested-draggable :subs="el.subs" :isPut="isPut" />
        </li>
    </draggable>
</template>
<script>
import draggable from "vuedraggable";

export default {
    name: "NestedDraggable",
    props: {
        subs: {
            required: true,
            type: Array
        },
        isPut: {
            required: true,
            type: Boolean,
            default() {
                return true;
            }
        }
    },
    components: {
        draggable
    }
};
</script>
<style scoped>
.dragArea {
    min-height: 50px;
    outline: 1px dashed;
}
</style>
