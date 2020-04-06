<template>
    <draggable group="needsAndWants">
            <div
                v-for="item in wordBox"
                :key="item.id"
                class="items"
            >
                <Word :item="item" />
            </div>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import Word from './Word';

export default {
    props: {
        wordBox: {
            type: Array,
            required: true
        },
        item: {
            type: Object,
            required: false
        }
    },
    components: {
        draggable,
        Word
    }
};
</script>

<style>

</style>