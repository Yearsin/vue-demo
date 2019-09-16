<template>
    <div>
        <el-menu
        :default-active="value"
        @open="handleOpen"
        @close="handleClose">
            <sy-menu-item :navMenus='list'></sy-menu-item>
        </el-menu>
    </div>
</template>

<script>
import syMenuItem from './menu-item';
export default {
    components: { syMenuItem },
    data () {
        return {
            value: '',
            list: [
                {
                    name: '工作台',
                    value: 'home'
                },
                {
                    name: '图表',
                    value: 'echars',
                    child: [
                        {
                            name: '仪表盘',
                            value: 'gauge',
                            level: 1
                        },
                        {
                            name: '饼图',
                            value: 'bing',
                            level: 1
                        },
                        {
                            name: '柱状图',
                            value: 'zhu',
                            level: 1
                        }
                    ]
                }
            ]
        };
    },
    created () {
        this.value = this.$route.name;
    },
    methods: {
        handleOpen (key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose (key, keyPath) {
            // console.log(key, keyPath);
        }
    }
};
</script>

<style lang='scss' scoped>

</style>
