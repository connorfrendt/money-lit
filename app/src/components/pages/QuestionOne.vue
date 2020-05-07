<template>
    <form @submit.prevent="onSubmitQ1">
        <div>Question 1?</div>

            <label v-for="questionOneChoice in questionOneChoices" :key="questionOneChoice.option">
                <input type="checkbox" v-model="questionOneChoice.checked">
                {{ questionOneChoice.option }}
            </label>
            
            <div v-if="isCorrect === false">Nope!  Try Again.</div>
            
        <input type="submit" value="Submit">
  </form>
</template>

<script>
export default {
    data() {
        return {
            q1Choice: null,
            correctAnswer: 'q1answerOne',
            isCorrect: null,
            questionOneChoices: [
                { option: 'Q1 Answer One', checked: false },
                { option: 'Q1 Answer Two', checked: false },
                { option: 'Q1 Answer Three', checked: false },

            ]
        };
    },
    methods: {
        onSubmitQ1() {
            console.log(this.questionOneChoices[0].checked, this.questionOneChoices[1].checked, this.questionOneChoices[2].checked);
            // let questionOneAnswer = {
            //     choice: this.q1Choice
            // };
            // if(this.q1Choice !== this.correctAnswer) {
            //     this.isCorrect = false;
            // }
            // else {
            //     this.isCorrect = true;
            //     this.$emit('q1-answer', questionOneAnswer);
            // }
        }
    }
};
</script>

<style>

</style>