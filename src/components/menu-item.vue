<template>
    <div>
        <div
            v-for="(item, index) in navMenus" :key="index">
            <!-- 一级目录 -->
            <el-menu-item v-if="!item.child" :index="item.value" @click.native="goPage(item)">
                <span>{{item.name}}</span>
            </el-menu-item>
            <!-- 多级目录 -->
            <el-submenu v-else-if="item.child && item.child.length > 0" :index="item.value">
                <template slot="title">
                    <span>{{item.name}}</span>
                </template>
                <!-- 递归组件 把遍历的值传回子组件 完成递归调用 -->
                <sy-menu-item :navMenus="item.child"></sy-menu-item>
            </el-submenu>
        </div>
    </div>
</template>

<script>
export default {
    name: 'syMenuItem',
    props: ['navMenus'],
    data () {
        return {
        };
    },
    created () {
    },
    methods: {
        goPage (item) {
            this.$router.push({name: item.value});
        }
    }
};
</script>

<style lang='scss'>
.el-submenu .el-menu-item {
    padding-left: 0;
    padding-right: 20px;
}
</style>
