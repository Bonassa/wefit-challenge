
import axios from "axios";

const apiAxios = axios.create({
  baseURL: 'https://api.github.com/users/'
})

export default apiAxios;