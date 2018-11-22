import Vue from 'vue'
import Vuex from 'vuex'
import { getPhotosList, getDetailInfo } from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    photos: '',
    current: '',
    text: ''
  },
  getters: {
    text(state) {
      return state.text
    },
    pages(state) {
      if (state.photos && state.photos.pages) {
        return state.photos.pages
      }
      return false
    },
    page(state) {
      if (state.photos && state.photos.page) {
        return state.photos.page
      }
      return false
    }
  },
  mutations: {
    setText(state, { text }) {
      state.text = text
    },
    setPhotos(state, { photos }) {
      state.photos = photos
    },
    setCurrent(state, { current }) {
      state.current = current
    }
  },
  actions: {
    getIndexData({ state, commit, getters }, { page }) {
      getPhotosList(state.text, page)
        .then(response => {
          console.log(response)
          if (response.data.stat === 'ok') {
            commit('setPhotos', { photos: response.data.photos })
          } else {
            commit('setPhotos', { photos: '' })
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    getDetailData({ commit }, { id }) {
      getDetailInfo(id).then(response => {
        if (response.data.stat === 'ok') {
          commit('setCurrent', { current: response.data.photo })
        }
      })
    }
  }
})

export default store
