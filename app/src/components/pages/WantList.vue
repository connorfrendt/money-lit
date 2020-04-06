<template>
    <draggable group="needsAndWants">
            <div
                v-for="want in wantsBox"
                :key="want.id"
                class="wants-items"
            >
                <Want :want="want" />
            </div>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import Want from './Want';

export default {
    props: {
        wantsBox: {
            type: Array,
            required: true
        },
        want: {
            type: Object,
            required: false
        }
    },
    components: {
        draggable,
        Want
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
.wants-items {
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