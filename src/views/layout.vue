<template>
    <el-container class="layout">
        <el-aside width="240px" class="aside">
            <sy-menu></sy-menu>
        </el-aside>
        <el-main class="main-wrap">
            <sy-breadcrumb></sy-breadcrumb>
            <div class="root-router">
                <router-view></router-view>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import syMenu from '@/components/sy-menu';
import syBreadcrumb from '@/components/sy-breadcrumb';
export default {
    data () {
        return {
        };
    },
    components: {
        syMenu,
        syBreadcrumb
    },
    created () {
    },
    methods: {
    }
};
</script>

<style lang='scss' scoped>

</style>
