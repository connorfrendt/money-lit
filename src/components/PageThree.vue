<template>
    <div>
        <div
            v-for="need in needs"
            :key="need"
        >
            <div>
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

</style>