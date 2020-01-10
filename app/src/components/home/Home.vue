<template>
    <div id="home">
        <h2>MoneyLit:</h2>
        <p>Understanding the difference between <i>needs</i> and <i>wants</i> helps you be strategic about your spending.</p>
        <button @click="$emit('login', pizzaLogIn)">TO LOG IN</button>
    </div>
</template>

<script>
export default {
    props: {
        pizzaLogIn: false
    },
    computed: {
        changeBoolean() {
            this.pizzaLogIn = true;
        }
    }
};
</script>

<style>
#home {
    text-align: left;
}

p {
    margin: 10px 0;
}
</style>