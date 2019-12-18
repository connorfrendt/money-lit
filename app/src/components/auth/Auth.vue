<template>
    <section>
        <div v-if="method === 'signin'">
            <form @submit.prevent="handleSignInSubmit(profile)">
                <h3>Sign In:</h3>
                    <div>
                        <label>Username:
                            <input v-model="profile.username">
                        </label>
                    </div>
                    <div>
                        <label>Password:
                            <input v-model="profile.password" type="password">
                        </label>
                    </div>
                <button>Sign In</button>
            </form>
                <p>
                    Need to register?
                    <button @click="method = 'signup'">Sign Up</button>
                </p>
            
        </div>

        <div v-else>
            <form @submit.prevent="handleSignUpSubmit(profile)">
                <div>
                    <h3>Sign Up:</h3>
                        <label>
                            Username:
                            <input v-model="profile.username">
                        </label>
                        <br />
                        <label>
                            Password:
                            <input type="password" v-model="profile.password">
                        </label>
                        <br />
                        <label>
                            <button>Sign Up</button>
                        </label>
                </div>
            </form>
                <p>
                    Already have an account?
                    <button @click="method = 'signin'">Sign In</button>
                </p>
            
        </div>

        <pre v-if="error">{{ error }}</pre>

    </section>
</template>

<script>
export default {
    data() {
        return {
            method: 'signin',
            error: '',
            profile: {
                username: '',
                password: ''
            }
        }
    },
    props: {
        onSignIn: Function,
        onSignUp: Function
    },
    methods: {
        handleSignInSubmit() {
            this.error = '';
            this.onSignIn(this.profile)
                .catch(error => {
                    this.error = error.error;
                });
        },
        handleSignUpSubmit() {
            this.error = '';
            this.onSignUp(this.profile)
                .catch(error => {
                    this.error = error.error;
                });
        }
    }
}
</script>

<style>

</style>