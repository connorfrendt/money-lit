<template>
    <div> <!-- MAIN DIV -->

        <div id="need-want-title-parent">
            <div><u>NEEDS</u></div>
            <div><u>WANTS</u></div>
        </div>

            <div id="need-want-box-parent"> <!-- NEED/WANT BOX -->
                
                <!-- NEED BOX -->
                <draggable
                    id="need-drag"
                    group="needsAndWants"
                    v-model="needsBox"
                >
                        <NeedList
                            ghost-class="ghost"
                            :needsBox="needsBox"
                            @end="onEnd"
                        />
                </draggable>
                <!-- END NEED BOX -->

                <!-- WANT BOX -->
                <draggable
                    id="want-drag"
                    ghost-class="ghost"
                    group="needsAndWants"
                    @end="onEnd"
                >
                    <WantList
                        id="want-grid"
                        v-model="wantsBox"
                        :wantsBox="wantsBox"
                    />
                </draggable>
                <!-- END WANT BOX -->

            </div> <!-- END NEED/WANT BOX -->

            <button @click="handleAdd">BUTTON</button>
            <!-- <AddNeedWant :onAdd="handleAdd" /> -->

            <!-- WORD BOX -->
            <draggable
                ghost-class="ghost"
                group="needsAndWants"
                @end="onEnd"
                v-model="wordBox"
            >
                <WordBoxList
                    id="word-grid"
                    :wordBox="wordBox"
                />
            </draggable>
            <!-- END WORD BOX -->
        
    </div> <!-- END MAIN DIV -->
</template>

<script>
import draggable from 'vuedraggable';
// import api from '../../services/api';
// import AddNeedWant from './AddNeedWant';
import NeedList from './NeedList';
import WantList from './WantList';
import WordBoxList from './WordBoxList';

export default {
    data() {
        return {
            wordBox: [
                { id: 1, name: 'Housing', src: 'housing' },
                { id: 2, name: 'Food', src: 'foods' },
                { id: 3, name: 'Clothing', src: 'clothing' },
                { id: 4, name: 'Water', src: 'travel' },
                { id: 5, name: 'Electricity/Gas', src: 'electricity' },
                { id: 6, name: 'Transportation', src: 'transportation' },
                { id: 7, name: 'Basic Phone Plan', src: 'basic-phone-plan' },
                { id: 8, name: 'Emergency Savings', src: 'emergency-savings' },
                { id: 9, name: 'Insurance', src: 'insurance' },
                { id:10, name: 'Games', src: 'games' },
                { id:11, name: 'Coffeehouse Drinks', src: 'coffee' },
                { id:12, name: 'Eating Out', src: 'out-to-eat' },
                { id:13, name: 'Smartphone', src: 'smartphone' },
                { id:14, name: 'Brand Name/Designer Clothing', src: 'designer-clothing' },
                { id:15, name: 'Theater Movies/Concerts', src: 'club-concert' },
                { id:16, name: 'Netflix/Hulu/Amazon Prime', src: 'netflix' },
                { id:17, name: 'Spotify/Pandora/Google Play Music', src: 'spotify' },
                { id:18, name: 'Brand Name Products', src: 'brand-name-products' },
                { id:19, name: 'Luxury Vehicles', src: 'fancy-car' },
                { id:20, name: 'Travel', src: 'travel' },
                { id:21, name: 'Gym Memberships', src: 'gym-membership' }
            ],
            needsBox: [],
            wantsBox: [],
            oldIndex: '',
            newIndex: ''
        };
    },
    components: {
        // AddNeedWant,
        draggable,
        NeedList,
        WantList,
        WordBoxList
    },
    methods: {
        onEnd(event) {
            this.oldIndex = event.oldIndex;
            this.newIndex = event.newIndex;
        },
        handleAdd() {
            console.log('here', this.needsBox[0]);
        }
    }
};
</script>

<style scoped>
/* NEEDS/WANTS ITEMS */
#need-want-title-parent{
    display: flex;
    justify-content: space-around;
}

#need-want-box-parent {
    display: grid;
    grid-template: 1fr / repeat(2, 1fr);
    height: 150px;
}

#need-drag {
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(5, 1fr);
    background: lightblue;
    border: 1px solid black;
    height: 100%;
    width: 100%;
}

#want-drag {
    background: lightgreen;
    border: 1px solid black;
    height: 100%;
    width: 100%;
}

#want-grid {
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(5, 1fr);
}

#word-grid {
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(7, 1fr);
}
</style>