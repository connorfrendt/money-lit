<template>
    <div>
        <draggable
            v-model="wordBox"
            @end="onEnd"
        >
            <transition-group id="word-box">
                <div
                    v-for="item in wordBox"
                    :key="item"
                    class="foo"
                >
                    <div id="word-box-item">{{ item }}</div>
                </div>
            </transition-group>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
    data() {
        return {
            wordBox: [
                'Housing', 'Food', 'Clothing', 'Water', 'Electricity/Gas', 'Transportation', 'Basic Phone Plan', 'Emergency Savings', 'Insurance',
                'Games', 'Coffehouse Drinks', 'Eating Out', 'Smartphone', 'Brand Name/Designer Clothing', 'Theater Movies/Concerts', 'Netflix/Hulu/Amazon Prime', 'Spotify/Pandora/Google Play Music', 'Brand Name Products', 'Luxury Vehicles', 'Travel', 'Gym Memberships'
            ],
            oldIndex: '',
            newIndex: ''
        }
    },
    components: {
        draggable
    },
    methods: {
        onEnd(event) {
            this.oldIndex = event.oldIndex;
            this.newIndex = event.newIndex;
        }
    }
}
</script>

<style>
    #word-box {
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(7, 1fr);
    }

    .foo {
        border: 1px solid black;
        text-align: center;
    }
</style>