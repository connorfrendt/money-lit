<template>
    <Word
        :v-for="item in wordBox"
        :key="item.id"
        :item="item"
    />
</template>

<script>
import Word from './Word';

export default {
    props: {
        wordBox: Array,
        item: Object
    },
    components: {
        Word
    }
};
</script>

<style>

</style>