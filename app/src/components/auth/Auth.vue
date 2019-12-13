<template>
    <section>
        <div v-if="method === 'signin'">
            <form @submit.prevent="onSignIn(profile)">
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
                    <button @click="method === 'signup'">Sign Up</button>
                </p>
            </form>
        </div>

        <div v-else>
            <form @submit.prevent="method === 'signup'">
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
            </form>
        </div>
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
    methods: {
        onSignIn() {
            console.log('SIGN IN');
            this.error = '';
            
        },
        onSignUp() {
            console.log('SIGN UP');
        }
    }
}
</script>

<style>

</style>