
<template>
   <div class="reset">
       <form class="form">
            <div class="item-group">
                <label for="name">姓名</label>
                <input id="name" v-model="form.name">
            </div>
            <div class="item-group">
                <label for="sex">性别</label>
                <input id="sex" v-model="form.sex">
            </div>
            <div class="item-group">
                <label for="year">年龄</label>
                <input id="year" v-model="form.year">
            </div>
            <div class="item-group">
                <label for="books">书籍</label>
                <input id="books" v-model="form.books">
            </div>
            <button @click="reset">重置</button>
            <button @click="submit">确认</button>
       </form>
   </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                name: null,
                sex: null,
                year: null,
                books: null
            },
            base: {
                name: 'yearsin',
                sex: 'man',
                year: 199,
                books: '活着,许三观卖血记'
            },
            defaultForm: {}
        };
    },
    data2: 123,
    data3 () {
        console.log('----');
    },
    created () {
        // 深拷贝模式
        // this.defaultForm = JSON.parse(JSON.stringify(this.form));
    },
    methods: {
        reset () {
            // 1 遍历赋值
            // Object.keys(this.form).map(key => {
            //     console.log(this.form[key]);
            //     this.form[key] = null;
            // });
            // 2 深拷贝赋值
            // this.form = this.defaultForm;
            // 3 通过this.$options选项赋值
            // this.form = this.$options.data().form;
        },
        submit () {
            console.log(this.form);
        }
    }
};
</script>

<style scoped>

</style>
