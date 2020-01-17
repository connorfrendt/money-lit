<template>
    <div id="home">
        <div v-if="$route.path === '/'">
            <h2>MoneyLit:</h2>
            <p>Understanding the difference between <i>needs</i> and <i>wants</i> helps you be strategic about your spending.</p>
            <button><RouterLink to="/Auth">TO LOG IN</RouterLink></button>
        </div>
        <RouterView v-else />
        <!-- <Auth
            v-if="user"
        />
        <PageTwo
            v-else
        /> -->
    </div>
</template>

<script>
// import Auth from '../auth/Auth';
// import PageTwo from '../PageTwo';
import api from '../../services/api';

export default {
    data() {
        return {
            user: null
        };
    },
    components: {
        // Auth,
        // PageTwo
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
    text-align: left;
}

p {
    margin: 10px 0;
}
</style>