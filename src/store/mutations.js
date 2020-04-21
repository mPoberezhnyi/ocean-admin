export default {
  getCategories(state, payload) {
    state.categories = payload;
  },
  getProducts(state, payload) {
    state.products = payload;
  },
};
