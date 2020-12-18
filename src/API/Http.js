import axios from 'axios';

const Http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    withCredentials: true,
    mode: 'no-cors',
  },
  timeout: 5000,
});

Http.interceptors.response.use(null, (ex) => {
  if (ex.response) {
    console.log(ex.response.data);
  } else {
    console.log(ex.message);
  }
  return Promise.reject(ex);
});

export default Http;
