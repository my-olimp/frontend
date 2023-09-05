import { refreshToken } from '@/services/AuthService';
import axios from 'axios';

const $api = axios.create({
    withCredentials: true,
    baseURL:
        process.env.NODE_ENV === 'production'
            ? 'https://myo.xstl.ru/api/'
            : 'http://localhost:8081/api/',
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
});

$api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {

      try {
        const originalRequest = error.config;
        await refreshToken()
        const response = await $api(originalRequest)

        return response;
      } catch (error) {
        throw error;
      }
    }

    throw error;
  }
);

export default $api;
