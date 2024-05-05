import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5236'
})

export default api