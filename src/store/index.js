import Vue from "vue";
import Vuex from "vuex";

import car from "./car";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        evn: null,
        login: false, // 是否登录
        userData: null, // 用户信息
    },
    getters: {
        userData: state => {
            return state.userData;
        }
    },
    mutations: {
        setUserData(state, userData) {
            state.userData = userData;
        }
    },
    modules: {
        //     user,
        car
    }
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
});