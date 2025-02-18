import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://dev.to/api/',
  timeout: 5000,
});
