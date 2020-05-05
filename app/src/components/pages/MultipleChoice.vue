<template>
    <div>
        <form @submit.prevent="checkAnswers">
            <div class="question">
                <div>Question: Foo or Bar?</div>
                    <label>
                        <input name="q1" value="FOO" type="radio" v-model="question1"/> <!-- Correct -->
                        Foo
                    </label>

                    <label>
                        <input name="q1" value="BAR" type="radio" v-model="question1"/>
                        Bar
                    </label>

                    <label>
                        <input name="q1" value="FOO BAR" type="radio" v-model="question1"/>
                        Foo Bar
                    </label>

                    <div v-if="isQ1Correct">{{ correct }}</div>
                    <div v-if="isQ1Correct === false">{{ wrong }}</div>
            </div>

            <div class="question">
                <div>Question: Foo1 or Bar1?</div>
                    <label>
                        <input name="q2" value="FOO1" type="radio" v-model="question2" />
                        Foo1
                    </label>

                    <label>
                        <input name="q2" value="BAR1" type="radio" v-model="question2" />
                        Bar1
                    </label>

                    <label>
                        <input name="q2" value="FOO BAR1" type="radio" v-model="question2"/>
                        Foo Bar1
                    </label>

                    <div v-if="isQ2Correct">{{ correct }}</div>
                    <div v-if="isQ2Correct === false">{{ wrong }}</div>
            </div>

            <div class="question">
                <div>Question: Foo2 or Bar2?</div>
                    <label>
                        <input name="q3" value="FOO2" type="radio" v-model="question3"/>
                        Foo2
                    </label>

                    <label>
                        <input name="q3" value="BAR2" type="radio" v-model="question3"/>
                        Bar2
                    </label>

                    <label>
                        <input name="q3" value="FOO BAR2" type="radio" v-model="question3"/>
                        Foo Bar2
                    </label>

                    <div v-if="isQ3Correct">{{ correct }}</div>
                    <div v-if="isQ3Correct === false">{{ wrong }}</div>
            </div>

            <button>SUBMIT</button>

        </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            question1: null,
            question2: null,
            question3: null,
            isQ1Correct: null,
            isQ2Correct: null,
            isQ3Correct: null,
            correctAnswers: ['FOO', 'BAR1', 'FOO BAR2'],
            correct: 'That\'s correct!',
            wrong: 'Nope!  Try Again.',
        };
    },
    methods: {
        checkAnswers() {
            if(this.question1 === this.correctAnswers[0]) this.isQ1Correct = true;
            if(this.question1 !== this.correctAnswers[0]) this.isQ1Correct = false;

            if(this.question2 === this.correctAnswers[1]) this.isQ2Correct = true;
            if(this.question2 !== this.correctAnswers[1]) this.isQ2Correct = false;

            if(this.question3 === this.correctAnswers[2]) this.isQ3Correct = true;
            if(this.question3 !== this.correctAnswers[2]) this.isQ3Correct = false;
        }
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