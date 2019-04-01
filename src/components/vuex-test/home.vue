<template>
   <div>
       经验值 {{empirical}}
       <br>
       <A></A>
       <B></B>
       <C></C>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
import A from '@/components/vuex-test/A';
import B from '@/components/vuex-test/B';
import C from '@/components/vuex-test/C';
export default {
    data () {
        return {};
    },
    components: {
        A,
        B,
        C
    },
    // 当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键
    computed: mapGetters(['empirical'])
};
</script>
