<template>
   <div>
        <p v-if="!type">春天了，好像该买衣服了</p>
        <p v-if="type === 'yes'">是啊，我不能再风中抱紧自己！！！</p>
        <p v-if="type === 'no'">不，你不想！！！</p>
        <A class="A"></A>
        <B class="B"></B>
   </div>
</template>

<script>
import A from './A';
import B from './B';
// import Bus from '@/config/vue-bus'; // 引入文件形式
export default {
    data () {
        return {
            type: null
        };
    },
    components: {
        A,
        B
    },
    mounted () {
        // 引入文件形式
        // Bus.$on('val', data => {
        //     this.type = data.type;
        // });
        this.$bus.$on('val', data => {
            this.type = data.type;
        });
    }
};
</script>

<style scoped>
.A {
    margin-right: 10px;
}
.A, .B {
    display: inline-block;
}
</style>
