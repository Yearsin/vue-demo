
// actions 提交的是 mutation, 而不是直接变更状态
// Action  通过 store.dispatch('setEmpirical') 方法触发
export default {
    setEmpiricalAsync: (context) => {
        setTimeout(() => {
            context.commit('setEmpirical', 10); // context提交
        }, 2000);
    }
};
