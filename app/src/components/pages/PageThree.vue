<template>
    <div> <!-- Main Div -->

        <div id="need-want-title-parent">
            <div><u>NEEDS</u></div>
            <div><u>WANTS</u></div>
        </div>

        <form @click="myFunc">

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
            <!-- END Word Box -->

            <button @click="myFunc">Submit</button>
        
        </form>

    </div> <!-- END Main Div -->
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
                { id:22, name: '', src: '' },
                { id:23, name: '', src: '' },
                { id:24, name: '', src: '' },
                { id:25, name: '', src: '' },
                { id:26, name: '', src: '' },
                { id:27, name: '', src: '' },
                { id:28, name: '', src: '' },
                { id:29, name: '', src: '' },
                { id:30, name: '', src: '' },
                { id:31, name: '', src: '' },
                { id:32, name: '', src: '' },
                { id:33, name: '', src: '' },
                { id:34, name: '', src: '' },
                { id:35, name: '', src: '' },
                { id:36, name: '', src: '' },
                { id:37, name: '', src: '' },
                { id:38, name: '', src: '' },
                { id:39, name: '', src: '' },
                { id:40, name: '', src: '' },
                { id:41, name: '', src: '' },
                { id:42, name: '', src: '' }
            ],
            wantsBox: [
                { id:43, name: '', src: '' },
                { id:44, name: '', src: '' },
                { id:45, name: '', src: '' },
                { id:46, name: '', src: '' },
                { id:47, name: '', src: '' },
                { id:48, name: '', src: '' },
                { id:49, name: '', src: '' },
                { id:50, name: '', src: '' },
                { id:51, name: '', src: '' },
                { id:52, name: '', src: '' },
                { id:53, name: '', src: '' },
                { id:54, name: '', src: '' },
                { id:55, name: '', src: '' },
                { id:56, name: '', src: '' },
                { id:57, name: '', src: '' },
                { id:58, name: '', src: '' },
                { id:59, name: '', src: '' },
                { id:60, name: '', src: '' },
                { id:61, name: '', src: '' },
                { id:62, name: '', src: '' },
                { id:63, name: '', src: '' }
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
        },
        myFunc() {
            console.log('I have been clicked');
        }
    }
};
</script>

<style scoped>
#need-want-title-parent{
    display: flex;
    justify-content: space-around;
}
#need-want-parent-box {
    display: flex;
    justify-content: space-around;
}

#need-parent-box {
    background-color: lightblue;
    padding: 10px;
    width: 50%;
    margin: 10px;
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


#want-parent-box {
    background-color: lightgreen;
    padding: 10px;
    width: 50%;
    margin: 10px;
}
#want-box {
    display: grid;
    grid-template: repeat(3, minmax(55px, 1fr)) / repeat(7, 1fr);
}
#want-box-item {
    height: 100%;
}
#wants-items {
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