import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;
const headers = {};

// eslint-disable-next-line no-console
console.log('BASEURL', baseURL);

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({
  baseURL,
  headers,
});

export default axiosInstance;
