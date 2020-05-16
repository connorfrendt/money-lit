<template>
    <div>
        <form>

            <QuestionOne
                v-if="!questionOneBoolean
                && !questionTwoBoolean
                && !quesitonThreeBoolean"
                @q1-answer="q1SubmittedAnswer"
                @q1-bool="q1Boolean"
            />

            <QuestionTwo
                v-if="questionOneBoolean && !questionTwoBoolean"
                @q2-answer="q2SubmittedAnswer"
                @q2-bool="q2Boolean"
            />

            <QuestionThree
                v-if="questionTwoBoolean && !quesitonThreeBoolean"
                @q3-answer="q3SubmittedAnswer"
            />


            <!-- <input
                v-if="myAnswers.length > 0"
                type="submit"
                value="Back"
                :disabled="myAnswers.length === 0"
                @click="lastPage"
            />
            <input
                type="submit"
                value="Confirm Answers"
                v-if="myAnswers.length === 3"
                @click="confirmAnswers"
            /> -->

        </form>
  </div>
</template>

<script>
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';

export default {
    data() {
        return {
            myAnswers: [],
            questionOneBoolean: null,
            questionTwoBoolean: null
        };
    },
    methods: {
        q1SubmittedAnswer(myQ1Answers) {
            this.myAnswers.push(myQ1Answers);
        },
        q1Boolean(isQ1Correct) {
            this.questionOneBoolean = isQ1Correct;
        },
        q2SubmittedAnswer(myQ2Answers) {
            this.myAnswers.push(myQ2Answers);
        },
        q2Boolean(isQ2Correct) {
            this.questionTwoBoolean = isQ2Correct;
        }
        
        // confirmAnswers() {
        //     // let myAnswers = this.myAnswers;
        //     // this.$emit('these-are-my-answers', myAnswers);
        //     this.$router.push('/Leaderboard');
        // },
        // lastPage() {
        //     this.myAnswers.pop();
        // }
    },
    components: {
        QuestionOne,
        QuestionTwo,
        QuestionThree
    }
};
</script>

<style>
.question {
    padding: 10px;
    border: 1px solid black;
    margin: 20px;
    background-color: rgb(204, 156, 252);
}

</style>