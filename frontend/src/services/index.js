import axios from 'axios'
export default axios.create({ baseURL: `http://localhost:4800/api/v1`, })