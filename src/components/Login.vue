<template>
    <section>
        <div v-if="method === 'signin'">
            <form @submit.prevent="onSignIn">
                <h3>Log In:</h3>
                    <div>
                        <label>Username:
                            <input v-model="signIn.username">
                        </label>
                    </div>
                    <div>
                        <label>Password:
                            <input v-model="signIn.password" type="password">
                        </label>
                    </div>
                <button>Log In</button>
                <!-- <hr /> -->
                <p>
                    Need to register?
                    <button @click="method === 'signup'">Sign Up</button>
                </p>
            </form>
        </div>

        <div v-else>
            <form @submit.prevent="onSignUp">
                <h3>Sign Up:</h3>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            method: 'signin',
            signIn: {},
            signUp: {}
        }
    },
    methods: {
        onSignIn() {
            console.log('Sign In');
        },
        onSignUp() {
            console.log('Sign Up');
        }
    }
}
</script>

<style>

</style>