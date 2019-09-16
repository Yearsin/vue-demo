import Vue from 'vue';
import Router from 'vue-router';
import index from '@/views/layout';
import home from '@/views/home';
import gauge from '@/views/echarts/gauge';
import bing from '@/views/echarts/bing';
import zhu from '@/views/echarts/zhu';

const originalPush = Router.prototype.push;
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err);
};
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: index,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: home,
                    meta: {
                        title: '工作台'
                    }
                }
            ]
        },
        {
            path: '/echars',
            name: 'index',
            component: index,
            meta: {
                title: '图表'
            },
            children: [
                {
                    path: '/gauge',
                    name: 'gauge',
                    component: gauge,
                    meta: {
                        title: '仪表盘'
                    }
                },
                {
                    path: '/bing',
                    name: 'bing',
                    component: bing,
                    meta: {
                        title: '饼图'
                    }
                },
                {
                    path: '/zhu',
                    name: 'zhu',
                    component: zhu,
                    meta: {
                        title: '柱状图'
                    }
                }
            ]
        }
    ]
});
