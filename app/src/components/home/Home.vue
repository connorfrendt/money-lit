<template>
    <div id="home">
        <header>
            <span v-if="user" id="header">
                Welcome {{ changeName(user.username) }}
                <a href="#" class="nav" @click="handleLogout">Logout</a>
            </span>
        </header>

        <br />
        <br />

        <div v-if="$route.path === '/'">
            <h2>MoneyLit:</h2>
            <p>Understanding the difference between <i>needs</i> and <i>wants</i> helps you be strategic about your spending.</p>
            <button><RouterLink to="/Auth">TO LOG IN</RouterLink></button>
        </div>
        
        <RouterView
            v-else
            :user="user"
            :onSignUp="handleSignUp"
            :onSignIn="handleSignIn"
        />
    </div>
</template>

<script>
import api from '../../services/api';

export default {
    data() {
        return {
            user: null
        };
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
#home {
    text-align: center;
}

#header {
    display: flex;
    justify-content: space-between;
}
</style>