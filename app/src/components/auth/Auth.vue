<template>
    <section>
        <div v-if="method === 'signin'">
            <form @submit.prevent="handleSignInSubmit(profile)">
                <div class="sign-in">
                    <h3>Sign In:</h3>
                        <div>
                            <label>Username:
                                <input v-model="profile.username" required>
                            </label>
                        </div>
                        <div>
                            <label>Password:
                                <input v-model="profile.password" type="password" required>
                            </label>
                        </div>
                    <button>Sign In</button>
                    <hr />
                    <p>
                        Need to register?
                        <button @click="method = 'signup'">Sign Up</button>
                    </p>
                </div>
            </form>
        </div>

        <div v-else>
            <form @submit.prevent="handleSignUpSubmit(profile)">
                <div class="sign-in">
                    <h3>Sign Up:</h3>
                        <label>
                            Username:
                            <input v-model="profile.username" required>
                        </label>
                        <br />
                        <label>
                            Password:
                            <input type="password" v-model="profile.password" required>
                        </label>
                        <br />
                        <label>
                            <button>Sign Up</button>
                        </label>
                
                        <hr />
                        <p>
                            Already have an account?
                            <button @click="method = 'signin'">Sign In</button>
                        </p>
                </div>
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
            this.onSignUp(this.profile)
                .catch(error => {
                    this.error = error.error;
                });
        }
    }
}
</script>

<style>
label {
    display: block;
    padding: 10px 0;
}

.sign-in {
    display: inline-block;
    border: 1px solid black;
    padding: 10px;
    background: rgb(230, 228, 228);
    box-shadow: 4px 4px 10px black;
}

pre {
    color: red;
}
</style>