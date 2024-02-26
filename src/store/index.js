// store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

const baseURL = 'https://node-eomp-a-c.onrender.com';

export default createStore({
  state: {
    products: [] // Corrected the state property name to products
  },
  getters: {
    getProducts: state => state.products
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    async getProducts({ commit }) {
      try {
        let { data } = await axios.get(baseURL + '/products');
        commit('setProducts', data.results);
      } catch (error) {
        console.error('Error getting products:', error);
      }
    },
    async deleteProduct({ dispatch }, id) {
      try {
        await axios.delete(baseURL + '/products/' + id);
        dispatch('getProducts');
      } catch (error) {
        console.error('Error deleting Product:', error);
      }
    },
    async updateProduct({ dispatch }, update) {
      try {
        await axios.patch(baseURL + '/products/' + update.prodID + '/updateProduct', update);
        dispatch('getProducts');
      } catch (error) {
        console.error('Error updating Product:', error);
      }
    },
    // Register a new product (POST)
  async registerProduct({ dispatch }, newProduct) {
    try {
      await axios.post(baseURL + '/addProduct', newProduct);
      dispatch('getProducts');
    } catch (error) {
      console.error('Error adding Product:', error);
    }
  }
},
  modules: {}
});
