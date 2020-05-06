<template>
    <form @submit.prevent="onSubmitQ1">
        <div>Question 1?</div>

            <label>
                <input
                    type="radio" value="q1answerOne" v-model="q1Choice">
                Q1 Answer One
            </label>

            <label>
                <input type="radio" value="q1answerTwo" v-model="q1Choice">
                Q1 Answer Two
            </label>

            <label>
                <input type="radio" value="q1answerThree" v-model="q1Choice">
                Q1 Answer Three
            </label>
            
        <input type="submit" value="Submit" :disabled="!q1Choice">
  </form>
</template>

<script>
export default {
    data() {
        return {
            q1Choice: null
        };
    },
    methods: {
        onSubmitQ1() {
            let questionOneAnswer = {
                choice: this.q1Choice
            };
            this.$emit('q1-answer', questionOneAnswer);
        }
    }
};
</script>

<style>

</style>