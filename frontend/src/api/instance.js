import axios from "axios";
import axiosRetry from "axios-retry";

export const instance = axios.create({
  baseURL: "http://130.61.98.45:8000/",
  timeout: 8000,
});

axiosRetry(instance, { retries: 10, retryDelay: axiosRetry.exponentialDelay });
