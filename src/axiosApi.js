import axios from 'axios'

const axiosApi = axios.create({
  baseURL: 'https://api.autocanada.kg',
})

export default axiosApi
