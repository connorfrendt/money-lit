<template>
    <div id="app">
        <!-- <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet"> -->
        <header>
            <span v-if="user">
                Welcome {{ user.username }}
            </span>
            <nav id="navbar" v-if="user">
                <RouterLink class="nav" to="/">Home</RouterLink>
                <RouterLink class="nav" to="/PageTwo">PageTwo</RouterLink>
                <a href="#" class="nav" @click="handleLogout">Logout</a>
            </nav>
        </header>


        <RouterView></RouterView>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: null
        };
    },
    components: {
        
    },
    methods: {
        handleLogout() {
            this.setUser(null);
            this.$router.push('/');
        }
    }
}
</script>

<style>
body {
    background-color: rgba(50, 205, 50, 0.537);
}
#header {
    font-family: 'Bebas Neue', cursive;
}
</style>