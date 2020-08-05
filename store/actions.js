import axios from "axios";

export default {
  async nuxtServerInit({ commit }, req) {
    const res = await axios.get(
      "https://cake-shop-a85c5.firebaseio.com/cakes.json"
    );

    commit("setCakes", res.data);
  },
  selectOrder({ commit, state }, selectedOrderData) {
    const selectedOrder = {
      cake: state.cakes[selectedOrderData.index],
      size: selectedOrderData.size,
      price: selectedOrderData.price
    };

    commit("setSelectedOrder", selectedOrder);
    commit("setCartItem", selectedOrder);
  }
};
