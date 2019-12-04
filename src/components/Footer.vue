<template>
    <div>
        <hr />
        <button>&lt;&#8209; BACK</button>
        <button @click="nextPage()">NEXT &#8209;&gt;</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            to: Function,
            // currentPage: '/',
            pages: ['/', '/PageTwo', 'PageThree']
        }
    },
    methods: {
        nextPage() {
            console.log('hello');
            return this.pages[1];
        }
    }
}
</script>

<style>

</style>