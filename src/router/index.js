import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import vuexTest from '@/components/vuex-test/home';
import vueBusTest from '@/components/vue-bus-test/home';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/vuex-test',
            name: 'vuex-test',
            component: vuexTest
        },
        {
            path: '/vue-bus-test',
            name: 'vue-bus-test',
            component: vueBusTest
        }
    ]
});
