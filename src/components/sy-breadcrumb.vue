<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <!-- <router-link :to='{name: item.name}'></router-link> -->
            <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">{{item.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data () {
        return {
            levelList: []
        };
    },
    watch: {
        $route (to, from) {
            this.getBreadcrumb();
        }
    },
    created () {
        this.getBreadcrumb();
    },
    methods: {
        getBreadcrumb () {
            // 寻找包含name的item
            let matched = this.$route.matched.filter(item => item.name);
            // let first = matched[0];
            // if (first && first.name.trim().toLocaleLowerCase() !== 'index'.toLocaleLowerCase()) {
            //     matched = [{path: '/index', meta: { title: '仪表盘' }}].concat(matched);
            //     console.log(matched);
            // }
            this.levelList = matched;
        }
    }
};
</script>

<style lang='scss' scoped>

</style>
