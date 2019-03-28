<template>
   <div>
       <p>Vuex中不太坚强的B组件</p>
       <button @click="sub">经验-1</button>
   </div>
</template>

<script>
export default {
    data () {
        return {};
    },
    methods: {
        sub () {
            this.$store.state.mutations.empirical--;
            this.$store.commit('setEmpirical', this.$store.state.mutations.empirical);
        }
    }
};
</script>
