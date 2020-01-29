<!-- <draggable
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
                    <div id="need-box-item">{{ n }}</div>
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
                    <div id="word-box-item">{{ item }}</div>
                </div>
            </transition-group>
        </draggable> -->