<template>
    <div
        :id="id"
        class="card"
        :draggable="draggable"
        @dragstart="dragStart"
        @dragover.stop
        @end="onEnd"
    >
        <slot />
    </div>
</template>

<script>
export default {
    data() {
        return {
            oldIndex: '',
            newIndex: ''
        };
    },
    props: ['id', 'draggable'],
    methods: {
        dragStart(e) {
            const target = e.target;
            e.dataTransfer.setData('card_id', target.id);
            setTimeout(() => {
                target.style.display = 'none';
            }, 0);
        },
        onEnd(event) {
            this.oldIndex = event.oldIndex;
            this.newIndex = event.newIndex;
        }
    }
};
</script>

<style>

</style>