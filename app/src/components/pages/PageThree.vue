<template>
    <div>
            <!-- Need Box -->
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
                    <div>
                        <div id="need-box-item">{{ n.name }}</div>
                        <img :src="getImgURL(n)" style="height: 50px" />
                    </div>
                </div>
            </transition-group>
        </draggable>

        <!-- Word Box -->
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
                    <div>
                        <div id="word-box-item">{{ item.name }}</div>
                        <img :src="getImgURL(item)" style="height: 50px" />
                    </div>
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
                { id:11, name: 'Coffehouse Drinks', src: 'coffee' },
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
            needsBox: [
                { id: 1, name: '', src: '' },
                { id: 2, name: '', src: '' },
                { id: 3, name: '', src: '' },
                { id: 4, name: '', src: '' },
                { id: 5, name: '', src: '' },
                { id: 6, name: '', src: '' },
                { id: 7, name: '', src: '' },
                { id: 8, name: '', src: '' },
                { id: 9, name: '', src: '' },
                { id:10, name: '', src: '' },
                { id:11, name: '', src: '' },
                { id:12, name: '', src: '' },
                { id:13, name: '', src: '' },
                { id:14, name: '', src: '' },
                { id:15, name: '', src: '' },
                { id:16, name: '', src: '' },
                { id:17, name: '', src: '' },
                { id:18, name: '', src: '' },
                { id:19, name: '', src: '' },
                { id:20, name: '', src: '' },
                { id:21, name: '', src: '' }
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
        },
        getImgURL(pic) {
            if(pic.src === '') {
                return;
            }
            return require(`../../assets/${pic.src}.jpg`);
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
    /* border: 1px solid black; */
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