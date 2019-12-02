<template>
    <div>
        <hr />
        <button>&lt;&#8209; BACK</button>
        <router-link :to="nextPage()"><button>NEXT &#8209;&gt;</button></router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            to: Function,
            currentPage: '/'
        }
    },
    methods: {
        nextPage() {
            console.log('FIRST', this.currentPage)
            if(this.currentPage === '/') {
                console.log('SECOND', this.currentPage)
                this.currentPage = '/PageTwo';
                console.log('THIRD', this.currentPage)
                return '/PageTwo';
            }
            else if(this.currentPage === '/PageTwo') {
                console.log('FOURTH', this.currentPage)
                this.currentPage = '/PageThree';
                console.log('FIFTH', this.currentPage)
                return '/PageThree';
            }
            console.log('SIXTH', this.currentPage)
        }
    }
}
</script>

<style>

</style>