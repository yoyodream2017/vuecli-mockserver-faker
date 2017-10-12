import axios from 'axios'

export default {
  getVIPUser (request) {
    return axios.get('http://localhost:3000/vipuser', {params: request})
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  }
}
