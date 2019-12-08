<template>
    <div id="footer">
        <hr />
        <div id="buttons">
            <button>&lt;&#8209; BACK</button>
            <button @click="nextPage()">NEXT &#8209;&gt;</button>
        </div>
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
#footer {
    position: fixed;
    bottom: 30px;
    width: 100vw;
}

#buttons {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 10px;
    width: 100vw;
}
</style>