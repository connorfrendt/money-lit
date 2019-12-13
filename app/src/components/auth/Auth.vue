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
                
                <p>
                    Need to register?
                    <button @click="method = 'signup'">Sign Up</button>
                </p>
            </form>
        </div>

        <div v-else>
            <form @submit.prevent="handleSignUpSubmit(profile)">
                <div>
                    <h3>Sign Up:</h3>
                        <label>
                            Username:
                            <input v-model="profile.username">
                        </label>

                        <label>
                            Password:
                            <input type="password" v-model="profile.password">
                        </label>

                        <label>
                            <button>Sign Up</button>
                        </label>
                </div>

                <p>
                    Already have an account?
                    <button @click="method = 'signin'">Sign In</button>
                </p>
            </form>
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
            console.log('Sign Up Page');
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