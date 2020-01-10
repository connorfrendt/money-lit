<template>
    <div id="app">
        <Auth
            v-if="toLogIn"
        />
        <Home
            v-else
            :pizzaLogIn="toLogIn"
        />
        <div>{{ toLogIn }}</div>
    </div>
</template>

<script>
import api from '../services/api';
import Home from './home/Home';
import Auth from './auth/Auth';

export default {
    data() {
        return {
            user: null,
            toLogIn: false
        };
    },
    components: {
        Home,
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
                    this.setUser(user);
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