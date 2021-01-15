import axios from 'axios';

const api = axios.create({
  baseURL: 'https://github-api-backend-challenge.herokuapp.com/'
});

export default api;