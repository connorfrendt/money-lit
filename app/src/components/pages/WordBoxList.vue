<template>
    <draggable
                
                ghost-class="ghost"
                group="needsAndWants"
                @end="onEnd"
            >
                <transition-group id="word-box" type="transition" name="flip-list">
                    <div
                        v-for="item in wordBox"
                        :key="item.id"
                        class="items"
                    >
                        <Word :item="item" />
                    </div>
                </transition-group>
            </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import Word from './Word';

export default {
    data() {
        return {
            oldIndex: '',
            newIndex: ''
        };
    },
    props: {
        wordBox: Array,
        item: null
    },
    components: {
        draggable,
        Word
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

</style>