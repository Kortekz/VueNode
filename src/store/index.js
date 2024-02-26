import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios'

const baseURL = 'https://node-eomp-a-c.onrender.com'

export default createStore({
  state: {
    users: [] // This adds a state property to store users
  },
  getters: {
    getUsers: state => state.users // This adds a getter to retrieve users
  },
  mutations: {
    setUsers(state, users) {
      state.users = users; // Mutation to update users in the state
    }
  },
  actions: {
    // Get all users (GET)
    async getUsers({ commit }) {
      try {
        let { data } = await axios.get(baseURL + '/users')
        commit('setUsers', data)
      } catch (error) {
        console.error('Error getting users:', error)
      }
    },
    // Get specific user by ID (GET)
    async getUserById({ commit }, id) {
      try {
        let { data } = await axios.get(baseURL + `/${id}`)
        // Handles the data
      } catch (error) {
        console.error('Error getting user by ID:', error)
      }
    },
    // Register a user (POST)
    async registerUser({ dispatch }, newUser) {
      try {
        const response = await axios.post(baseURL + '/register', newUser)
        console.log(response.data)
        // To update users after posting, I use dispatch getUsers
        dispatch('getUsers')
      } catch (error) {
        console.error('Error registering User:', error)
      }
    },
    // Delete a user (DELETE)
    async deleteUser({ commit }, id) {
      try {
        await axios.delete(baseURL + '/users/' + id)
        // If you need to update users after deletion, you can dispatch getUsers
        commit('setUsers', []) // Reset users after deletion
        dispatch('getUsers')
      } catch (error) {
        console.error('Error deleting User:', error)
      }
    },
    // Update a user (PATCH)
    async updateUser({ commit }, update) {
      try {
        await axios.patch(baseURL + '/users/' + update.id, update)
        // To update users after patching, I use dispatch getUsers
        dispatch('getUsers')
      } catch (error) {
        console.error('Error updating User:', error)
      }
    },
  },
  modules: {}
})
