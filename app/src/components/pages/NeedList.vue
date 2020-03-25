<template>
  <Need
    :v-for="need in needsBox"
    :key="need.id"
    :need="need"
    class="needs-items"
  />
</template>

<script>
import Need from './Need';

export default {
    props: {
        needsBox: null,
        need: null
    },
    components: {
        Need
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
</style>