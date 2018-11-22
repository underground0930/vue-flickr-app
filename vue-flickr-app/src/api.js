import axios from 'axios'
import { API_KEY } from './config'
const BASE_URL = 'https://api.flickr.com/services/rest/'

export const getPhotosList = (searchText, page = 1) => {
  return axios.get(BASE_URL, {
    params: {
      method: 'flickr.photos.search',
      api_key: API_KEY,
      text: searchText,
      format: 'json',
      nojsoncallback: 1,
      extras: 'url_sq',
      per_page: 8,
      page: page
    }
  })
}

export const getDetailInfo = id => {
  return axios.get(BASE_URL, {
    params: {
      method: 'flickr.photos.getInfo',
      api_key: API_KEY,
      photo_id: id,
      format: 'json',
      nojsoncallback: 1,
      extras: 'url_o'
    }
  })
}
