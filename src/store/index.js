// store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

const baseURL = 'https://node-eomp-a-c.onrender.com';

export default createStore({
  state: {
    products: []
  },
  getters: {

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
    async deleteProduct({ commit }, id) {
      try {
        await axios.delete(baseURL  + '/products/' + id + '/deleteProduct');
      } catch (error) {
        console.error('Error deleting Product:', error);
      }
      window.location.reload()
    },
    async updateProduct({ commit }, update) {
      try {
        await axios.patch(baseURL + '/products/' + update.prodID + '/updateProduct', update);
        commit('getProducts');
      } catch (error) {
        console.error('Error updating Product:', error);
      }
      window.location.reload()
    },
    async registerProduct({ commit }, newProduct) {
      try {
        let {data} = await axios.post(baseURL + '/products/addProduct', newProduct);
        commit('setProducts', data);
      } catch (error) {
        console.error('Error adding Product:', error);
      }
      window.location.reload()
    },
  },
  modules: {}
});
