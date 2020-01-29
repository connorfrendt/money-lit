<template>
    <div>
            <main class="flexbox">

                <Board id="board-1">
                    <Card
                        id="card-1"
                        draggable="true"
                        v-for="item in wordBox"
                        :key="item.id"
                    >
                        <p>{{ item.name }}</p>
                    </Card>
                </Board>

                <Board id="board-2">
                    <!-- <Card
                        id="card-2"
                        draggable="true"
                    >
                        
                    </Card> -->
                </Board>

            </main>
    </div>
</template>

<script>
// import draggable from 'vuedraggable';
import Board from './board-card/Board';
import Card from './board-card/Card';

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
            needsBox: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            oldIndex: '',
            newIndex: ''
        };
    },
    components: {
        // draggable
        Board,
        Card
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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #f3f3f3;
}

.flexbox {
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 768px;
    height: 100vh;

    overflow: hidden;

    margin: 0 auto;
    padding: 15px;
}

.flexbox .board {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    width: 100%;
    max-width: 300px;

    background-color: #313131;

    padding: 15px;
}

.flexbox .board .card {
    padding: 15px 25px;
    background-color: #f3f3f3;
    cursor: move;
    margin-bottom: 15px;
}

/*-----------------------------------------------------------------------------*/

/* #need-parent-box {
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
} */
</style>