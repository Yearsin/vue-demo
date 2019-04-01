<template>
   <div>
       <p>Vuex中不太合群的C组件</p>
       <button @click="async">经验=10</button>
   </div>
</template>

<script>
export default {
    data () {
        return {};
    },
    methods: {
        async () {
            this.$store.dispatch('setEmpiricalAsync');
        }
    }
};
</script>
