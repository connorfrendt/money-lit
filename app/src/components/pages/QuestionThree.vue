<template>
    <form @submit.prevent="onSubmitQ3">
        <div>Question 3?</div>

            <label>
                <input type="radio" value="answerOne" v-model="q3Choice">
                Answer One
            </label>

            <label>
                <input type="radio" value="answerTwo" v-model="q3Choice">
                Answer Two
            </label>

            <label>
                <input type="radio" value="answerThree" v-model="q3Choice">
                Answer Three
            </label>
        <input type="submit" value="Submit" :disabled="!q3Choice">
  </form>
</template>

<script>
export default {
    data() {
        return {
            q3Choice: null
        };
    },
    methods: {
        onSubmitQ3() {
            let questionThreeAnswer = {
                choice: this.q3Choice
            };
            this.$emit('q3-answer', questionThreeAnswer);
        }
    }
};
</script>

<style>

</style>