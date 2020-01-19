<template>
    <div id="app">
        <Home />
    </div>
</template>

<script>
import Home from './home/Home';

export default {
    components: {
        Home
    }
};
</script>

<style>
#app {
    margin-top: 60px;
}

.nav {
    padding: 5px;
    margin: 0 5px;
    border: 1px solid black;
}
</style>