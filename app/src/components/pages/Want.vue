<template>
    <div>
        <div id="want-box-item">{{ want.name }}</div>
        <img :src="getImgURL(want)" style="height: 50px" />
    </div>
</template>

<script>
export default {
    props: {
        want: null
    },
    methods: {
        getImgURL(pic) {
            if(pic.src === '') {
                return;
            }
            return require(`../../assets/${pic.src}.jpg`);
        },
    }
};
</script>

<style>

</style>