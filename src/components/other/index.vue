<template>
   <div>
      <router-link :to="{name: 'reset-form'}">reset-form</router-link>
   </div>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    created () {
    },
    methods: {
    }
};
</script>

<style scoped>
a {
    margin-right: 20px;
}
a:last-child {
    margin-right: 0;
}
</style>
