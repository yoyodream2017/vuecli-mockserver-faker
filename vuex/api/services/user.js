import axios from 'axios'

export default {
  
  getUser (request = {}) {
    return axios.get('http://localhost:3000/user', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  }
  
}
