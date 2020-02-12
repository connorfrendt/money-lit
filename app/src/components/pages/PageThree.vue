<template>
    <div>
            <draggable
            id="need-parent-box"
            v-model="needsBox"
            ghost-class="ghost"
            group="needsAndWants"
            @end="onEnd"
        >
            <transition-group id="need-box" type="transition" name="flip-list">
                <div
                    v-for="n in needsBox"
                    :key="n"
                    class="needs-items"
                >
                    <div id="need-box-item">{{ n.name }}</div>
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
                    <div id="word-box-item">{{ item.name }}</div>
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
                { id: 1, name: 'Housing' },
                { id: 2, name: 'Food' },
                { id: 3, name: 'Clothing' },
                { id: 4, name: 'Water' },
                { id: 5, name: 'Electricity/Gas' },
                { id: 6, name: 'Transportation' },
                { id: 7, name: 'Basic Phone Plan' },
                { id: 8, name: 'Emergency Savings' },
                { id: 9, name: 'Insurance' },
                { id:10, name: 'Games' },
                { id:11, name: 'Coffehouse Drinks' },
                { id:12, name: 'Eating Out' },
                { id:13, name: 'Smartphone' },
                { id:14, name: 'Brand Name/Designer Clothing' },
                { id:15, name: 'Theater Movies/Concerts' },
                { id:16, name: 'Netflix/Hulu/Amazon Prime' },
                { id:17, name: 'Spotify/Pandora/Google Play Music' },
                { id:18, name: 'Brand Name Products' },
                { id:19, name: 'Luxury Vehicles' },
                { id:20, name: 'Travel' },
                { id:21, name: 'Gym Memberships' }
            ],
            needsBox: [
                { id: 1, name: '' },
                { id: 2, name: '' },
                { id: 3, name: '' },
                { id: 4, name: '' },
                { id: 5, name: '' },
                { id: 6, name: '' },
                { id: 7, name: '' },
                { id: 8, name: '' },
                { id: 9, name: '' },
                { id:10, name: '' },
                { id:11, name: '' },
                { id:12, name: '' },
                { id:13, name: '' },
                { id:14, name: '' },
                { id:15, name: '' },
                { id:16, name: '' },
                { id:17, name: '' },
                { id:18, name: '' },
                { id:19, name: '' },
                { id:20, name: '' },
                { id:21, name: '' }
            ],
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
        }
    }
};
</script>

<style scoped>
#need-parent-box {
    background-color: lightblue;
    padding: 10px;
    width: 97vw;
}

#need-box {
    display: grid;
    grid-template: repeat(3, minmax(55px, 1fr)) / repeat(7, 1fr);
}

#need-box-item {
    height: 100%;
}

.needs-items {
    text-align: center;
    position: relative;
    cursor: move;
}



#word-box {
    display: grid;
    grid-template: repeat(3, minmax(65px, 1fr)) / repeat(7, 1fr);
}

.items {
    border: 1px solid black;
    margin: 5px;
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
    background-color: lightgrey;
}
</style>