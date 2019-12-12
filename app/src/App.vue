<template>
    <div id="app">
        <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
        <Header
            id="header"
        />
        <RouterView></RouterView>
        <!-- <Footer
            id="footer"
        /> -->
    </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
    name: 'app',
    components: {
        Header,
        // Footer
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