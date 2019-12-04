<template>
    <div id="flex-box">
        <div
            v-for="item in wordBox"
            :key="item"
            class="foo"
        >
            <div class="bar">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            wordBox: ['Food', 'Water', 'Shelter']
        }
    }
}
</script>

<style>
    
    #flex-box {
        display: flex;
        justify-content: space-around
    }
    .foo {
        border: 1px solid black;
    }

</style>