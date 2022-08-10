import Vue from 'vue'
import Vuex from 'vuex'
import card from "./modules/card";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    card
  },
  plugins: [createPersistedState()],
})
