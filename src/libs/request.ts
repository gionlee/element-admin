import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    AxiosInstance,
    AxiosAdapter,
    Cancel,
    CancelToken,
    CancelTokenSource,
    Canceler,
  } from 'axios';
const config: AxiosRequestConfig = {
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: 'http://mock.gionlee.com',
  responseType: 'json',
  timeout: 5000,
};
const handleResponse = (response: AxiosResponse) => {
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);
  console.log(response.config);
};

const handleError = (error: AxiosError) => {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else {
    console.log(error.message);
  }
};
const http: AxiosInstance = axios.create(config);
http(config)
  .then(handleResponse)
  .catch(handleError);

export default http;
