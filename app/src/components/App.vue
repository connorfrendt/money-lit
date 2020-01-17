<template>
    <div id="app">
        <header>
            <span v-if="user">
                {{changeName(user.username)}}
                <a href="#" class="nav" @click="handleLogout">Logout</a>
            </span>
        </header>
        <main>
            <Home />
        </main>
    </div>
</template>

<script>
import Home from './home/Home';

export default {
    data() {
        return {
            user: null
        };
    },
    components: {
        Home
    }
};
</script>

<style>
#app {
    text-align: center;
    margin-top: 60px;
}

#navbar {
    display: flex;
    justify-content: flex-end;
}

.nav {
    padding: 5px;
    margin: 0 5px;
    border: 1px solid black;
}
</style>