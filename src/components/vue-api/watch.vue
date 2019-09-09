<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>#<input type="checkbox" v-model="checkAll" @click="all"></th>
                    <th>name</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in list" :key="index">
                    <td>{{item.id}} <input type="checkbox" :value="item" v-model="radios"></td>
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                </tr>
            </tbody>
        </table>
        <input type="text" v-model="obj.a">
        <div>{{obj.a}}</div>
    </div>
</template>

<script>
// watch部分理解
export default {
    name: 'watch',
    data () {
        return {
            checkAll: false,
            radios: [],
            obj: {
                a: 'i'
            },
            list: [
                {
                    id: 1,
                    name: 'ruarua1',
                    age: 18
                },
                {
                    id: 2,
                    name: 'ruarua2',
                    age: 18
                },
                {
                    id: 3,
                    name: 'ruarua3',
                    age: 18
                }
            ]
        };
    },
    watch: {
        radios: {
            handler (newV, oldV) {
                this.checkAll = this.radios.length === this.list.length;
                // console.log(newV.length);
            },
            // 代表在wacth里声明了radios这个方法之后立即先去执行handler方法
            immediate: true
        },
        'obj.a': {
            handler (newV, oldV) {
                // console.log(newV);
            },
            immediate: true
        }
    },
    created () {
    },
    methods: {
        all () {
            this.checkAll = !this.checkAll;
            this.radios = [];
            if (this.checkAll) {
                this.list.forEach(item => {
                    this.radios.push(item);
                });
            }
        }
    }
};
</script>

<style lang='scss' scoped>
    table {
        padding-bottom: 100px;
    }
</style>
