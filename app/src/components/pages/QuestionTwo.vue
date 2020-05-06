<template>
    <form @submit.prevent="onSubmitQ2">
        <div>Question 2?</div>

            <label>
                <input type="radio" value="q2answerOne" v-model="q2Choice">
                Q2 Answer One
            </label>

            <label>
                <input type="radio" value="q2answerTwo" v-model="q2Choice">
                Q2 Answer Two
            </label>

            <label>
                <input type="radio" value="q2answerThree" v-model="q2Choice">
                Q2 Answer Three
            </label>
            
        <input type="submit" value="Submit" :disabled="!q2Choice">
  </form>
</template>

<script>
export default {
    data() {
        return {
            q2Choice: null
        };
    },
    methods: {
        onSubmitQ2() {
            let questionTwoAnswer = {
                choice: this.q2Choice
            };
            this.$emit('q2-answer', questionTwoAnswer);
        }
    }
};
</script>

<style>

</style>