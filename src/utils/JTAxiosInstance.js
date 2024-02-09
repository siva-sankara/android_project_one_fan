import axios from 'axios';

import { getAuthTokenDetails } from './LocalStorage';
import { BASE_URL } from '../integrations/JTAPIs';
const JTAxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*'
    },
});
JTAxiosInstance.interceptors.request.use(async function (config) {
  let token = await getAuthTokenDetails();
  // console.log('Sending req with this token', token);
  config.headers.Authorization = token;
  return config;
});


export default JTAxiosInstance;