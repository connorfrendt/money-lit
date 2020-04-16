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
            required: false
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
    background: red;
    margin: 10px;
}

.ghost {
    background-color: lightgrey;
}
</style>