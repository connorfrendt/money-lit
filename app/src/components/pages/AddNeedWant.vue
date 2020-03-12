<template>
    <form @submit.prevent="handleSubmit">
        <button>SUBMIT</button>
    </form>
</template>

<script>
function initNeedWant() {
    return {
        name: ''
    };
}

export default {
    data() {
        return {
            needWant: initNeedWant()
        };
    },
    props: {
        onAdd: Function
    },
    methods: {
        handleSubmit() {
            this.onAdd(this.needWant)
                .then(() => {
                    this.needWant = initNeedWant();
                });
        }
    }
};
</script>

<style>

</style>