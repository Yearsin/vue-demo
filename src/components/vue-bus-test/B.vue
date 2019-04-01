<template>
   <div>
    <button @click="setVal">不，你不想</button>
   </div>
</template>

<script>
// import Bus from '@/config/vue-bus'; // 引入文件形式
export default {
    data () {
        return {};
    },
    components: {},
    methods: {
        setVal () {
            // Bus.$emit('val', {type: 'no'}); // 引入文件形式
            this.$bus.$emit('val', {type: 'no'}); // 插件形式
        }
    }
};
</script>

<style>
</style>
