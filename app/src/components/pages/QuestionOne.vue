<template>
    <form @submit.prevent="onSubmitQ1">
        <div><b>Water</b></div>

        <div>
            To stay hydrated, all you need is tap water or filtered water. However, it’s
            easy for this inexpensive need to turn into a want for more costly things like
            bottled water, soda, coffeehouse drinks, and juices.
        </div>
            <br />
        <div>Select the best choices that you actually <u>need</u>:</div>
            <br />
            <div id="bar">
                <div id="foo">
                    <label v-for="questionOneChoice in questionOneChoices" :key="questionOneChoice.option">
                        <input type="checkbox" v-model="questionOneChoice.checked">
                        {{ questionOneChoice.option }}
                    </label>
                </div>
            </div>
            <div v-if="isQ1Correct === false">Nope!  Try Again.</div>
            <div v-if="isQ1Correct">You did it!</div>
            
        <input type="submit" value="Submit">
  </form>
</template>

<script>
export default {
    data() {
        return {
            isQ1Correct: null,
            myQ1Answers: [],
            questionOneChoices: [
                { option: 'Tap Water', checked: false },
                { option: 'Filtered Water', checked: false },
                { option: 'Drip Coffee', checked: false },
                { option: 'Bottled Water', checked: false },
                { option: 'Soda', checked: false },
                { option: 'Coffeehouse Drinks', checked: false },
                { option: 'Juices', checked: false },
            ]
        };
    },
    methods: {
        onSubmitQ1() {

            for(let i = 0; i < this.questionOneChoices.length; i++) {
                if(this.questionOneChoices[i].checked === true) {
                    this.myQ1Answers.push(this.questionOneChoices[i]);
                }
            }

            let hasTapWater = (CorrElement) => CorrElement.option === 'Tap Water';
            let hasFilteredWater = (CorrElement) => CorrElement.option === 'Filtered Water';

            let hasIncorrectAnswer = (InCorrElement) => {
                return InCorrElement.option === 'Bottled Water'
                    || InCorrElement.option === 'Soda'
                    || InCorrElement.option === 'Coffeehouse Drinks'
                    || InCorrElement.option === 'Juices';
            };

            if(this.myQ1Answers.some(hasTapWater)
            && this.myQ1Answers.some(hasFilteredWater)
            && this.myQ1Answers.some(hasIncorrectAnswer) === false) {
                this.isQ1Correct = true;
                let isQ1Correct = this.isQ1Correct;
                let myQ1Answers = this.myQ1Answers;
                
                this.$emit('q1-answer', myQ1Answers);
                this.$emit('q1-bool', isQ1Correct);
            }
            else {
                console.log('Try Again!', this.myQ1Answers);
                this.isQ1Correct = false;
                this.myQ1Answers = [];
                this.questionOneChoices.map(choice => choice.checked = false);
            }
        }
    }
};
</script>

<style>
#foo {
    margin: 0 auto;
    text-align: left;
    width: 200px;
}
</style>