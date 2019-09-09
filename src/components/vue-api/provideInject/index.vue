<template>
    <div>
        <parent></parent>
    </div>
</template>

<script>
import parent from './parent';
export default {
    name: 'directive',
    data () {
        return {
        };
    },
    components: {
        parent
    },
    created () {
    },
    methods: {
    }
};
</script>

<style lang='scss' scoped>

</style>
