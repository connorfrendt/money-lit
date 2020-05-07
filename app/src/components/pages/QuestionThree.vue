<template>
    <form @submit.prevent="onSubmitQ3">
        <div>Question 3?</div>

            <label>
                <input type="radio" value="Answer One" v-model="q3Choice">
                Answer One
            </label>

            <label>
                <input type="radio" value="Answer Two" v-model="q3Choice">
                Answer Two
            </label>

            <label>
                <input type="radio" value="Answer Three" v-model="q3Choice">
                Answer Three
            </label>

            <div v-if="isCorrect === false">Nope!  Try Again.</div>

        <input type="submit" value="Submit" :disabled="!q3Choice">
  </form>
</template>

<script>
export default {
    data() {
        return {
            q3Choice: null,
            correctAnswer: 'Answer Three',
            isCorrect: null
        };
    },
    methods: {
        onSubmitQ3() {
            let questionThreeAnswer = {
                choice: this.q3Choice
            };
            if(this.q3Choice !== this.correctAnswer){
                this.isCorrect = false;
            }
            else {
                this.isCorrect = true;
                this.$emit('q3-answer', questionThreeAnswer);
            }
        }
    }
};
</script>

<style>

</style>