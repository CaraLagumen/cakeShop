export default {
  setCakes(state, cakes) {
    state.cakes = cakes;
  },
  setSelectedOrder(state, selectedOrder) {
    state.selectedOrder = selectedOrder;
  },
  setCartItem(state, selectedOrder) {
    state.cartItems.push(selectedOrder);
  }
};
