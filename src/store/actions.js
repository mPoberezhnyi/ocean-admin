import axios from 'axios';
import { MAIN_DOMAIN } from '../constants';

export default {
  async getCategories({ commit }) {
    try {
      const { data } = await axios.get(`${MAIN_DOMAIN}/categories`);
      commit('getCategories', data);
    } catch (e) {
      commit('getCategories', []);
    }
  },

  addCategory(state, payload) {
    return axios.post(`${MAIN_DOMAIN}/categories`, payload);
  },

  async getProducts({ commit }) {
    try {
      const { data } = await axios.get(`${MAIN_DOMAIN}/Products`);
      commit('getProducts', data);
    } catch (e) {
      commit('getProducts', []);
    }
  },

  addProduct(state, payload) {
    return axios.post(`${MAIN_DOMAIN}/products`, payload);
  },
};
