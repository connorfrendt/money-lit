<template>
    <draggable
                id="need-parent-box"
                v-model="needsBox"
                ghost-class="ghost"
                group="needsAndWants"
                @end="onEnd"
    >
        <transition-group id="need-box" type="transition" name="flip-list">
            <Needs />
        </transition-group>
    </draggable>
</template>

<script>
import Needs from './needs/Needs';

export default {
    data() {
        return {
            needsBox: [
                { id:22, name: '', src: '' },
                { id:23, name: '', src: '' },
                { id:24, name: '', src: '' },
                { id:25, name: '', src: '' },
                { id:26, name: '', src: '' },
                { id:27, name: '', src: '' },
                { id:28, name: '', src: '' },
                { id:29, name: '', src: '' },
                { id:30, name: '', src: '' },
                { id:31, name: '', src: '' },
                { id:32, name: '', src: '' },
                { id:33, name: '', src: '' },
                { id:34, name: '', src: '' },
                { id:35, name: '', src: '' },
                { id:36, name: '', src: '' },
                { id:37, name: '', src: '' },
                { id:38, name: '', src: '' },
                { id:39, name: '', src: '' },
                { id:40, name: '', src: '' },
                { id:41, name: '', src: '' },
                { id:42, name: '', src: '' }
            ]
        };
    },
    components: {
        Needs
    }
};
</script>

<style>
#need-parent-box {
    background-color: lightblue;
    padding: 10px;
    width: 50%;
    margin: 10px;
}
#need-box {
    display: grid;
    grid-template: repeat(3, minmax(55px, 1fr)) / repeat(7, 1fr);
}
#need-box-item {
    height: 100%;
}
.needs-items {
    text-align: center;
    position: relative;
    cursor: move;
}
</style>