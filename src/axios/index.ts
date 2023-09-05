import { refreshToken } from '@/services/AuthService';
import axios from 'axios';

const $api = axios.create({
    withCredentials: true,
    baseURL:
        process.env.NODE_ENV === 'production'
            ? 'https://myo.xstl.ru/api/'
            : 'http://localhost:8081/api/',
});

let isRefreshing = false;
let refreshPromise = null;

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
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const refreshTokenValue = localStorage.getItem('refreshToken');
          if (!refreshTokenValue) {
            // Handle the case where there's no refreshToken available
            throw new Error('No refreshToken available');
          }

          // Use a refreshPromise to prevent concurrent refresh attempts
          refreshPromise = refreshToken();

          // Wait for the refreshToken() to complete
          await refreshPromise;

          // Retry the original request with the new token
          const originalRequest = error.config;
          originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
          return $api(originalRequest);
        } catch (refreshError) {
          // Handle the refreshToken error, e.g., logout the user
          // You can also clear the tokens and redirect to login
          throw refreshError;
        } finally {
          isRefreshing = false;
          refreshPromise = null;
        }
      } else {
        // If another request is already refreshing the token, wait for it to complete
        await refreshPromise;
        // Retry the original request with the new token
        const originalRequest = error.config;
        originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
        return $api(originalRequest);
      }
    }

    throw error;
  }
);

export default $api;
