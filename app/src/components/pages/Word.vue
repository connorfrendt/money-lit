<template>
    <div>
        <div>{{ item.name }}</div>
        <img :src="getImgURL(item)" style="height: 50px" />
    </div>
</template>

<script>
export default {
    props: {
        item: {
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