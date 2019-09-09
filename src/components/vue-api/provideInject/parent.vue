<template>
    <div class="app">
        <div class="div">
            <p>parent</p>
        </div>
        <child class="div" :list=list></child>
    </div>
</template>

<script>
import child from './child';
export default {
    components: {
        child
    },
    provide () {
        return {
            getObj: this.getObj,
            sendObj: this.sendObj
        };
    },
    data () {
        return {
            list: [1, 2, 456]
        };
    },
    created () {
    },
    methods: {
        getObj () {
            return 'hh, 我通过父组件的getObj打印出来的';
        },
        sendObj () {
            this.list = [7, 8, 9];
        }
    }
};
</script>

<style lang='scss' scoped>
.app {
    display: flex;
    .div {
        flex: 1;
        text-align: center;
        margin-top: 10px;
    }
    .div:nth-child(1) {
        border-right: 1px solid #ccc;
    }
}
</style>
