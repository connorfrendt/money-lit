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
        
        <main>
            <RouterView
                :user="user"
                :onSignUp="handleSignUp"
                :onSignIn="handleSignIn"
            />
            <Auth
                :onSignUp="handleSignUp"
                :onSignIn="handleSignIn"
                />
        </main>
    </div>
</template>

<script>
import api from '../services/api';
import Auth from './auth/Auth';

export default {
    data() {
        return {
            user: null
        };
    },
    components: {
        Auth
    },
    created() {
        const json = window.localStorage.getItem('profile');
        if(json) {
            this.setUser(JSON.parse(json));
        }
    },
    methods: {
        handleSignUp(profile) {
            return api.signUp(profile)
                .then(user => {
                    console.log('////////here////////\n', user);
                    this.setUser(user);
                })
                .then(asdf => console.log(asdf));
        },
        handleSignIn(credentials) {
            return api.signIn(credentials)
                .then(user => {
                    this.setUser(user);
                });
        },
        setUser(user) {
            this.user = user;
            if(user) {
                api.setToken(user.id);
                window.localStorage.setItem('profile', JSON.stringify(user));
            }
            else {
                api.setToken();
                window.localStorage.removeItem('profile');
            }
        },
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