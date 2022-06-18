import { userStore } from "@/store/modules/user";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const baseURL = "http://localhost:7001";

const service: AxiosInstance = axios.create({ baseURL: baseURL });

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const store = userStore();
    let token = store.$state.token;
    if (token && config.headers) {
      config.headers.authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res.code !== 200) {
      return Promise.reject(res);
    } else {
      return response.data;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
