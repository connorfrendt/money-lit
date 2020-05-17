<template>
    <div>
        <form>
            <div>Select the best choices that you actually <u>need</u>:</div>

            <b>Water</b>
             <br /> <!-- USE CSS!!! -->
            <div id="question-one">
                <label v-for="questionOneChoice in questionOneChoices" :key="questionOneChoice.option">
                    <input type="checkbox" v-model="questionOneChoice.checked">
                    {{ questionOneChoice.option }}
                </label>
            </div>

            <div><b>Food</b></div>

            <div id="question-two">
                <label v-for="questionTwoChoice in questionTwoChoices" :key="questionTwoChoice.option">
                    <input type="checkbox" v-model="questionTwoChoice.checked">
                    {{ questionTwoChoice.option }}
                </label>
            </div>
        </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            questionOneChoices: [
                { option: 'Tap Water', checked: false },
                { option: 'Filtered Water', checked: false },
                { option: 'Drip Coffee', checked: false },
                { option: 'Bottled Water', checked: false },
                { option: 'Soda', checked: false },
                { option: 'Coffeehouse Drinks', checked: false },
                { option: 'Juices', checked: false },
            ],
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