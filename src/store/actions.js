
// actions 异步操作数据 (但是还是通过mutation来操作，因为只有它能操作)
// actions 使用场景是在发送请求获取到数据后, 想要更新store ->state的值时
// actions 提交的是 mutation, 而不是直接变更状态
// Action  通过 store.dispatch('setCountAsync') 方法触发
// 想用异步必须用action, 想用action又必须去用mutation,他们本身就是 一个数据变化的流程
export default {
    setCountAsync: (context) => {
        context.commit('setCount', 10);
    }
};
