import axios from 'axios';

const api = axios.create({
  baseURL: `https://thronesapi.com`,
});

export default api;