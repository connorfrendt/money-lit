<template>
    <div>
        <div id="need-box-item">{{ need.name }}</div>
        <img :src="getImgURL(need)" style="height: 50px" />
    </div>
</template>

<script>
export default {
    props: {
        need: {
            type: Object,
            required: false
        }
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