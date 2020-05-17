<template>
    <form @submit.prevent="onSubmitQ2">
        <div><b>Food</b></div>

        <div>
            Our bodies need food as fuel, the healthier foods the better = nutritous home cooked or frozen meals
            including veggies and essential vitamins are some examples.  However, this basic need can turn into a
            want for more expensive and less healthy options like eating out or fast food.
        </div>
            <br /> <!-- USE CSS!!! -->
        <div>Select the best choices that you actually <u>need</u>:</div>
            <br /> <!-- USE CSS!!! -->
            <div id="question-two">
                <label v-for="questionTwoChoice in questionTwoChoices" :key="questionTwoChoice.option">
                    <input type="checkbox" v-model="questionTwoChoice.checked">
                    {{ questionTwoChoice.option }}
                </label>
            </div>

            <div v-if="isQ2Correct === false">Nope! Try Again.</div>
            <div v-if="isQ2Correct">You did it!</div>

        <input type="submit" value="Submit">
    </form>
</template>

<script>
export default {
    data() {
        return {
            isQ2Correct: null,
            myQ2Answers: [],
            questionTwoChoices: [
                { option: 'Home Cooked Meals', checked: false },
                { option: 'Nutritous Frozen Foods (complete meals including vegetables)', checked: false },
                { option: 'Frozen Foods (pizza, fries, etc.)', checked: false },
                { option: 'Restaurants', checked: false },
                { option: 'Fast Food', checked: false }
            ]
        };
    },
    methods: {
        onSubmitQ2() {
            
            for(let i = 0; i < this.questionTwoChoices.length; i++) {
                if(this.questionTwoChoices[i].checked === true) {
                    this.myQ2Answers.push(this.questionTwoChoices[i]);
                }
            }

            let hasHomeCooked = (corrElement) => corrElement.option === 'Home Cooked Meals';
            let hasFrozenFood = (corrElement) => corrElement.option === 'Nutritous Frozen Foods (complete meals including vegetables)';

            let hasIncorrectAnswer = (inCorrElement) => {
                return inCorrElement.option === 'Frozen Foods (pizza, fries, etc.)'
                    || inCorrElement.option === 'Restaurants'
                    || inCorrElement.option === 'Fast Food';
            };

            if(this.myQ2Answers.some(hasHomeCooked)
            && this.myQ2Answers.some(hasFrozenFood)
            && this.myQ2Answers.some(hasIncorrectAnswer) === false) {
                this.isQ2Correct = true;
                let isQ2Correct = this.isQ2Correct;
                let myQ2Answers = this.myQ2Answers;

                this.$emit('q2-answer', myQ2Answers);
                this.$emit('q2-bool', isQ2Correct);
            }
            else {
                this.isQ2Correct = false;
                this.myQ2Answers = [];
                this.quesitonTwoChoices.map(choice => choice.checked = false);
            }
        }
    }
};
</script>

<style>
#question-two {
    margin: 0 auto;
    text-align: left;
    width: 300px;
}
</style>