<template>
    <div>

        <draggable
            id="foo"
            v-model="needsBox"
            group="needsAndWants"
            @end="onEnd"
        >
            <transition-group id="need-box" type="transition" name="flip-list">
                <div
                    v-for="n in 15"
                    :key="n"
                    class="needs-items"
                >
                    <div id="need-box-item">{{n}}</div>
                </div>
            </transition-group>
        </draggable>

        <draggable
            v-model="wordBox"
            ghost-class="ghost"
            group="needsAndWants"
            @end="onEnd"
        >
            <transition-group id="word-box" type="transition" name="flip-list">
                <div
                    v-for="item in wordBox"
                    :key="item"
                    class="items"
                >
                    <!-- <img :src="getImageURL"/> -->
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
                'Housing',
                'Food',
                'Clothing',
                'Water',
                'Electricity/Gas',
                'Transportation',
                'Basic Phone Plan',
                'Emergency Savings',
                'Insurance',
                'Games',
                'Coffehouse Drinks',
                'Eating Out',
                'Smartphone',
                'Brand Name/Designer Clothing',
                'Theater Movies/Concerts',
                'Netflix/Hulu/Amazon Prime',
                'Spotify/Pandora/Google Play Music',
                'Brand Name Products',
                'Luxury Vehicles',
                'Travel',
                'Gym Memberships'
            ],
            needsBox: [],
            oldIndex: '',
            newIndex: ''
        };
    },
    components: {
        draggable
    },
    methods: {
        onEnd(event) {
            this.oldIndex = event.oldIndex;
            this.newIndex = event.newIndex;
        },
        // getImageURL() {
        //     return '../assets/games.jpeg';
        // }
    }
};
</script>

<style>
#foo {
    min-height: 200px;
}

#word-box {
    display: grid;
    grid-template: repeat(3, minmax(65px, 1fr)) / repeat(7, 1fr);
}

.items {
    background-color: rgba(0, 187, 255, .5);
    border: 1px solid black;
    text-align: center;
    position: relative;
    cursor: move;
}

.needs-items {
    background-color: rgba(0, 255, 81, 0.5);
    border: 1px solid black;
    text-align: center;
    position: relative;
    cursor: move;
}

#word-box-item {
    margin: 0 auto;
}

.flip-list-move {
    transition: transform 0.5s;
}

.ghost {
    border: 5px solid red;
    /* opacity: .25; */
}

#need-box {
    display: grid;
    grid-template: repeat(3, minmax(55px, 1fr)) / repeat(5, 1fr);
}

#need-box-item {
    border: 1px solid black;
    height: 100%;
}
</style>