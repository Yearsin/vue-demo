<template>
  <div class="hello">
      <router-link to="vuex-test">Vuex-demo</router-link>
      <router-link to="vue-bus-test">Vue-bus-demo</router-link>
  </div>
</template>

<script>
import vuexTest from '@/components/vuex-test/home';
export default {
    name: 'HelloWorld',
    data () {
        return {};
    },
    components: {
        vuexTest
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
