import axios from 'axios';
import axiosRetry from 'axios-retry';


axiosRetry(axios, { retries: 10 });

export default axios.create({
  baseURL: 'https://eerie-goblin-01597.herokuapp.com',
  timeout: 8000
});