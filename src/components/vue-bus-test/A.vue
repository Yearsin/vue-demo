<template>
   <div>
    <button @click="setVal">是，必须买</button>
   </div>
</template>

<script>
// import Bus from '@/config/vue-bus'; // 引入文件形式
export default {
    data () {
        return {
        };
    },
    methods: {
        setVal () {
            // Bus.$emit('val', {type: 'yes'}); // 引入文件形式
            this.$bus.$emit('val', {type: 'yes'}); // 插件形式
        }
    }
};
</script>

<style>
</style>
