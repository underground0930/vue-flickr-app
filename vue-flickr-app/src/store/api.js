import axios from 'axios'
export const getPhotoList = (searchText, API_KEY) => {
  return axios.get('https://api.flickr.com/services/rest/', {
    params: {
      method: 'flickr.photos.search',
      api_key: API_KEY,
      text: encodeURIComponent(searchText),
      format: 'json',
      nojsoncallback: 1,
      extras: 'url_sq'
    }
  })
}
