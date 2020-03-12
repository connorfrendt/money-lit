<template>
    <div>
        <div id="need-box-item">{{ need.name }}</div>
        <img :src="getImgURL(need)" style="height: 50px" />
    </div>
</template>

<script>
export default {
    props: {
        need: null
    }
};
</script>

<style>

</style>