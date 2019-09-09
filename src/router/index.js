import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import vuexTest from '@/components/vuex-test/home';
import vueBusTest from '@/components/vue-bus-test/home';
import apis from '@/components/vue-api/index';
import otherView from '@/components/other/view';
import other from '@/components/other/index';
import resetForm from '@/components/other/reset-form';

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
        },
        {

            path: '/vue-api',
            name: 'vue-api',
            component: apis
        },
        {
            path: '/other',
            name: 'other',
            component: other
        },
        {
            path: '/other-view',
            name: 'other-view',
            component: otherView,
            children: [
                {
                    path: '/other/reset-form',
                    name: 'reset-form',
                    component: resetForm
                }
            ]
        }
    ]
});
