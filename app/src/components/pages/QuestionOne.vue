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
            <div v-if="isCorrect === false">Nope!  Try Again.</div>
            
        <input type="submit" value="Submit">
  </form>
</template>

<script>
export default {
    data() {
        return {
            isCorrect: null,
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
            if(this.questionOneChoices[0].checked === true &&
               this.questionOneChoices[1].checked === true) {
                let myQ1Answers = this.myQ1Answers;
                this.isCorrect = true;
                this.myQ1Answers.push(this.questionOneChoices[0]);
                this.myQ1Answers.push(this.questionOneChoices[1]);
                this.$emit('q1-answer', myQ1Answers);
            }
            else {
                this.isCorrect = false;
                this.questionOneChoices.map(x => x.checked = false);
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