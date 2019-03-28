const state = {
    empirical: 0, // 经验值
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '***', done: false }
    ]
};

// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
const mutations = {
    setEmpirical (state, data) {
        state.empirical = data;
    }
};

// Getter 注解
// 可以认为是 store 的计算属性
// 接受 state 作为其第一个参数
// 访问看testGetters.vue
const getters = {
    empirical: state => {
        return state.empirical;
    },
    doneTodos: state => {
        return state.todos.filter(todo => todo.done);
        // 当箭头函数只有一个参数时，可以省略参数的圆括号
        // 箭头函数的函数体只有一个 `return` 语句时，可以省略 `return` 关键字和方法体的花括号
        // return state.todos.filter(todo => {
        //     return todo.done;
        // });
    },
    // Getter 也可以接受其他 getter 作为第二个参数
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length;
    },
    getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id === id);
    }
};

export default {
    state, mutations, getters
};
