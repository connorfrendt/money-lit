<template>
    <div>
        <div
            v-for="n in needsBox"
            :key="n.id"
            class="needs-items"
        >
            <Need />
        </div>
    </div>
</template>

<script>
import Need from './need/Need';

export default {
    props: {
        needsBox: Array
    },
    components: {
        Need
    }
};
</script>

<style>

</style>