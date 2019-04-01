const state = {
    empirical: 0// 经验值
};

const mutations = {
    setEmpirical (state, data) {
        state.empirical = data;
    }
};

const getters = {
    empirical: state => {
        return state.empirical;
    }
};

export default {
    state, mutations, getters
};
