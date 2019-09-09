<template>
    <div>
        child
        <p>{{text}}</p>
        <p>{{list}}</p>
        <button @click="sendObj">send</button>
    </div>
</template>

<script>
export default {
    inject: ['getObj', 'sendObj'],
    props: {
        list: Array
    },
    data () {
        return {
            text: ''
        };
    },
    created () {
        this.text = this.getObj();
    },
    methods: {
    }
};
</script>

<style lang='scss' scoped>
    span {
        margin-top: 20px;
    }
</style>
