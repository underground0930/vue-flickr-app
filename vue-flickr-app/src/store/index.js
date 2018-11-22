import Vue from 'vue'
import Vuex from 'vuex'
import { API_KEY } from '../config'
import { getPhotoList, getPhotoDetail } from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    photos: []
  },
  mutations: {
    setPhotos(state, { photos }) {
      state.photos = photos
    },
    setCurrent(state, { current }) {
      state.current = current
    }
  },
  actions: {
    getIndexData({ commit }, { text }) {
      getPhotoList(text, 1, API_KEY).then(response => {
        if (response.data.stat === 'ok') {
          commit('setPhotos', { photos: response.data.photos })
        }
      })
    },
    getDetailData({ commit }, { id }) {
      getPhotoDetail(id, API_KEY).then(response => {
        if (response.data.stat === 'ok') {
          commit('setCurrent', { current: response.data.photo })
        }
      })
    }
  }
})

export default store
