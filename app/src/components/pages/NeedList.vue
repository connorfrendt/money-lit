<template>
    <draggable group="needsAndWants">
            <div
                v-for="need in needsBox"
                :key="need.id"
                class="needs-items"
            >
                <Need :need="need" />
            </div>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import Need from './Need';

export default {
    props: {
        needsBox: {
            type: Array,
            required: true
        },
        need: {
            type: Object,
            required: false
        }
    },
    components: {
        draggable,
        Need
    },
    methods: {
        onEnd(event) {
            this.oldIndex = event.oldIndex;
            this.newIndex = event.newIndex;
        }
    }
};
</script>

<style>
.needs-items {
    text-align: center;
    position: relative;
    cursor: move;
    border: 1px solid black;
    margin: 5px;
    padding: 5px;
}

.ghost {
    background-color: lightgrey;
}

.flip-list-move {
    transition: transform 0.5s;
}
</style>