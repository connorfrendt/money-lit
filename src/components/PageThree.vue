<template>
    <div id="flex-box">
        <div
            v-for="need in needs"
            :key="need"
            class="foo"
        >
            <div class="bar">
                {{ need }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            needs: ['Food', 'Water', 'Shelter']
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