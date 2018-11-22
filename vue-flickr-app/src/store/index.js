import Vue from 'vue'
import Vuex from 'vuex'
import { API_KEY } from './config'
import { getPhotoList } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    photos: []
  },
  getters: {},
  mutations: {
    setPhotos(state, { photos }) {
      state.photos = photos
    }
  },
  actions: {
    getData({ commit }, { text }) {
      getPhotoList(text, API_KEY).then(response => {
        commit('setPhotos', { photos: response.data.photos })
      })
    }
  }
})

export default store
