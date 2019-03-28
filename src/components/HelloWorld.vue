<template>
  <div class="hello">
      <router-link to="vuex-test">Vuex-demo</router-link>
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
