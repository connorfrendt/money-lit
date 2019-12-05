<template>
    <div>
        <draggable
            v-model="wordBox"
            @end="onEnd"
        >
            <transition-group type="transition">
                <div
                    v-for="item in wordBox"
                    :key="item"
                >
                    <div>{{ item }}</div>
                </div>
            </transition-group>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
    data() {
        return {
            wordBox: ['Food', 'Water', 'Shelter'],
            oldIndex: '',
            newIndex: ''
        }
    },
    components: {
        draggable
    },
    methods: {
        onEnd(event) {
            console.log(event);
            this.oldIndex = event.oldIndex;
            this.newIndex = event.newIndex;
        }
    }
}
</script>

<style>
    .foo {
        border: 1px solid black;
    }
</style>