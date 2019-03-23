const state = {
    all: [],
    default_car: {
        index: 0,
        id: 0,
        plate_number: "暂无车辆",
        lat: 0,
        lon: 0,
        address: "",
        stop: 0,
        chaosu_count: 0,
        jizhuanwan_count: 0,
        kuaisubiandao_count: 0,
        jijiayou_count: 0,
        point: null
    }
};
export default {
    namespaced: true,
    state,
    getters: {
        getMyCars: (state, getters, rootState) => {
            return state.all;
        }
    },
    actions: {},
    mutations: {
        setMyCars(state, cars) {
            state.all = cars;

            state.all.forEach((element, index) => {
                if (typeof element.points == "undefined")
                    state.all[index].points = [];
            });
        },
        removeCars(state) {
            state.all = null;
        },
        setDefaultCar(state, default_car) {
            var oldDefault = state.all.filter(car => car.is_default == 1)[0];
            state.all[oldDefault.index].is_default = 0;
            state.all[default_car.index].is_default = 1;

            state.default_car = default_car;
        },
        addPoint(state, index, mapPoints) {
            state.all[index].points = mapPoints;
        }
    }
};