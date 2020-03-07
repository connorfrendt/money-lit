<template>
    <div> <!-- Main Div -->

        <div id="need-want-title-parent">
            <div><u>NEEDS</u></div>
            <div><u>WANTS</u></div>
        </div>

        <form @submit.prevent="submitNeedsWants">

            <div id="need-want-parent-box"> <!-- Need/Want/Word Box -->
                
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
                            :key="n.id"
                            class="needs-items"
                        >
                            <div>
                                <div id="need-box-item">{{ n.name }}</div>
                                <img :src="getImgURL(n)" style="height: 50px" />
                            </div>
                        </div>
                    </transition-group>
                </draggable>
                <!-- END Need Box -->

                <!-- Want Box -->
                <draggable
                    id="want-parent-box"
                    v-model="wantsBox"
                    ghost-class="ghost"
                    group="needsAndWants"
                    @end="onEnd"
                >
                    <transition-group id="want-box" type="transition" name="flip-list">
                        <div
                            v-for="n in wantsBox"
                            :key="n.id"
                            class="wants-items"
                        >
                            <div>
                                <div id="want-box-item">{{ n.name }}</div>
                                <img :src="getImgURL(n)" style="height: 50px" />
                            </div>
                        </div>
                    </transition-group>
                </draggable>
                <!-- END Want Box -->

            </div> <!-- END Need/Want/Word Box -->

            <button>Submit</button>

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
                        :key="item.id"
                        class="items"
                    >
                        <div>
                            <div>{{ item.name }}</div>
                            <img :src="getImgURL(item)" style="height: 50px" />
                        </div>
                    </div>
                </transition-group>
            </draggable>
            <!-- END Word Box -->
        
        </form>

    </div> <!-- END Main Div -->
</template>

<script>
import draggable from 'vuedraggable';
import api from '../../services/api';

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
            needsBox: [],
            wantsBox: [],
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
        },
        submitNeedsWants(needWant) {
            let needItems = [];
            let wantItems = [];

            for(let i = 0; i < this.needsBox.length; i++) {
                let needItem = {};
                if(this.needsBox[i].name !== '') {
                    needItem.Id = this.needsBox[i].id;
                    needItem.Name = this.needsBox[i].name;
                    needItems.push(needItem);
                }
            }

            for(let i = 0; i < this.wantsBox.length; i++) {
                let wantItem = {};
                if(this.wantsBox[i].name !== '') {
                    wantItem.Id = this.wantsBox[i].id;
                    wantItem.Name = this.wantsBox[i].name;
                    wantItems.push(wantItem);
                }
            }
            /* LOCAL STORAGE */
            window.localStorage.setItem('needItems', JSON.stringify(needItems));
            window.localStorage.setItem('wantItems', JSON.stringify(wantItems));
            return api.addNeedsWants(needWant)
                .then(saved => {
                    console.log('THIS IS SAVED', saved);
                });
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
#need-want-parent-box {
    display: flex;
    justify-content: space-around;
}

/* NEEDS ITEMS */
#need-parent-box {
    background-color: lightblue;
    padding: 10px;
    width: 50%;
    margin: 10px;
    overflow: scroll;
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
    border: 1px solid black;
    margin: 5px;
    padding: 5px;
}

/* WANTS ITEMS */
#want-parent-box {
    background-color: lightgreen;
    padding: 10px;
    width: 50%;
    margin: 10px;
    overflow: scroll;
}
#want-box {
    display: grid;
    grid-template: repeat(3, minmax(55px, 1fr)) / repeat(7, 1fr);
}
#want-box-item {
    height: 100%;
}
.wants-items {
    text-align: center;
    position: relative;
    cursor: move;
    border: 1px solid black;
    margin: 5px;
    padding: 5px;
}

/* WORD BOX */
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

/* OTHER */
.flip-list-move {
    transition: transform 0.5s;
}

.ghost {
    background-color: lightgrey;
}
</style>