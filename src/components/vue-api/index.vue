<template>
    <div>
        <button
            v-for="item in modules"
            :key="item"
            @click="title = item"
        >{{item}}</button>
        <component :is="title.toLowerCase()"></component>
    </div>
</template>

<script>
import watch from './watch.vue';
import directive from './directive.vue';
import provideInject from './provideInject/index.vue';
export default {
    components: {
        watch,
        directive,
        provideInject
    },
    data () {
        return {
            title: 'watch',
            modules: ['Watch', 'Directive', 'Provide-Inject']
        };
    },
    created () {
    },
    mounted () {
    },
    methods: {
    }
};
</script>

<style lang='scss' scoped>
    button {
        margin-right: 5px;
    }
    button:nth-last-child(2) {
        margin-right: 0px;
    }
</style>
