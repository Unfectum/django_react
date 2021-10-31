import axios from 'axios';
import axiosRetry from 'axios-retry';


axiosRetry(axios, { retries: 10, retryDelay: axiosRetry.exponentialDelay });

export const instance = axios.create({
  baseURL: 'https://eerie-goblin-01597.herokuapp.com',
  timeout: 8000
});
axiosRetry(instance, { retries: 10, retryDelay: axiosRetry.exponentialDelay })