export default {
  state: {
    user: {
      name: "",
      id: 0
    },
    cars: {}
  },
  getters: {},
  actions: {
    getAllProducts({ commit }) {
      shop.getProducts(products => {
        commit("setProducts", products);
      });
    }
  },
  mutations: {
    setOnline(userData) {
      this.state.user = userData;
    },
    setOffline() {
      this.state.user.id = 0;
      this.state.user.name = "";
    }
  }
};
