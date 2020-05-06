<template>
    <div>
        <form>

            <QuestionOne
                v-if="myAnswers.length === 0"
                @q1-answer="q1SubmittedAnswer"
            />

            <QuestionTwo
                v-if="myAnswers.length === 1"
                @q2-answer="q2SubmittedAnswer"
            />

            <QuestionThree
                v-if="myAnswers.length === 2"
                @q3-answer="q3SubmittedAnswer"
            />


            <input
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
            />

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
            myAnswers: []
        };
    },
    methods: {
        q1SubmittedAnswer(questionOneAnswer){
            this.myAnswers.push(questionOneAnswer.choice);
        },
        q2SubmittedAnswer(questionTwoAnswer){
            this.myAnswers.push(questionTwoAnswer.choice);
        },
        q3SubmittedAnswer(questionThreeAnswer) {
            this.myAnswers.push(questionThreeAnswer.choice);
        },
        confirmAnswers() {
            this.$router.push('/Leaderboard');
        },
        lastPage() {
            this.myAnswers.pop();
        }
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

.correct{
    background-color: lightgreen;
}

.wrong {
    background-color: rgb(255, 0, 0)
}

#hello {
    background-color: red;
}
</style>