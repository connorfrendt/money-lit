<template>
    <div id="footer">
        <hr />
        <div id="buttons">
            <button id="back">&lt;&#8209; BACK</button>
            <button id="next" @click="nextPage()">NEXT &#8209;&gt;</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        
    },
    methods: {
        nextPage() {
            console.log('hello');
            console.log('world');
        }
    }
}
</script>

<style>
#footer {
    position: fixed;
    bottom: 45px;
    width: 100vw;
}

#buttons {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 10px;
    width: 100vw;
}

#back {
    padding: 10px;
    margin-right: 5px;
}
#next {
    padding: 10px;
    margin-left: 5px;
}
</style>