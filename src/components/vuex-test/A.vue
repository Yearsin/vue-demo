<template>
   <div>
       <p>Vuex中坚强的A组件</p>
       <button @click="add">经验+1</button>
   </div>
</template>

<script>
export default {
    data () {
        return {};
    },
    methods: {
        add () {
            // 注意 任何由 'setEmpirical' 导致的状态变更都应该在此刻完成 也就是说 这是同步的 立刻执行的 想异步的话 使用action
            this.$store.state.mutations.empirical++;
            this.$store.commit('setEmpirical', this.$store.state.mutations.empirical);
        }
    }
};
</script>
