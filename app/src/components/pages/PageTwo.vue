<template>
    <div> <!-- Main Div -->

        <Water v-if="pageCount === 0"/>
        <Food v-if="pageCount === 1"/>
        <Clothing v-if="pageCount === 2"/>
        <Shelter v-if="pageCount === 3"/>
        <Transportation v-if="pageCount === 4"/>
        <Exercise v-if="pageCount === 5"/>
        <Entertainment v-if="pageCount === 6"/>

        <MultipleChoice v-if="pageCount === 7"/>

        <button @click="pageDec">Back</button>
        <button @click="pageInc">Next</button>
    </div> <!-- End Main Div -->
</template>

<script>
import Water from './Water';
import Food from './Food';
import Clothing from './Clothing';
import Shelter from './Shelter';
import Transportation from './Transportation';
import Exercise from './Exercise';
import Entertainment from './Entertainment';
import MultipleChoice from './MultipleChoice';

export default {
    data() {
        return {
            pageCount: 0
        };
    },
    components: {
        Water,
        Food,
        Clothing,
        Shelter,
        Transportation,
        Exercise,
        Entertainment,
        MultipleChoice
    },
    methods: {
        pageInc() {
            this.pageCount++;
        },
        pageDec() {
            if(this.pageCount === 0) return;
            else this.pageCount--;
        }
    }
};
</script>

<style>

</style>