<template>
    <div id="app">
        <!-- <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet"> -->
        <header>
            <span v-if="user">
                Welcome {{ changeName(user.username) }}
            </span>
            <nav id="navbar" v-if="user">
                <!-- <RouterLink class="nav" to="/PageTwo">PageTwo</RouterLink> -->
                <a href="#" class="nav" @click="handleLogout">Logout</a>
            </nav>
        </header>
        
        <main>
            <RouterView
                v-if="user"
                :user="user"
            />
            <Auth v-else
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
                    console.log('////////here////////\n', 'the user is', user);
                    this.setUser(user);
                })
                .then(thisUser => {
                    console.log('this user', thisUser);
                });
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
        changeName(name) {
            return api.normalize(name);
        },
        handleLogout() {
            this.setUser(null);
            this.$router.push('/');
        }
    }
}
</script>

<style>
#app {
    text-align: center;
    margin-top: 60px;
}

body {
    background-color: rgba(255, 255, 255, 1);
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

#header {
    font-family: 'Bebas Neue', cursive;
}
</style>