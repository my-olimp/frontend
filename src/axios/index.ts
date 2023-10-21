import { refreshToken } from '@/services/AuthService';
import axios from 'axios';

const $api = axios.create({
    withCredentials: true,
    baseURL:
        process.env.NODE_ENV === 'production'
            ? 'https://myo.xstl.ru/api/'
            : 'http://localhost:8081/api/',
});

let isRefreshing: any = false;
let refreshPromise: any = null; // Initialize refreshPromise as null

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
                    refreshPromise = refreshToken();

                    await refreshPromise;

                    const originalRequest = error.config;

                    return $api(originalRequest);
                } finally {
                    isRefreshing = false;
                    refreshPromise = null;
                }
            } else {
                await refreshPromise;
                const originalRequest = error.config;
                originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
                return $api(originalRequest);
            }
        }

        throw error;
    }
);

export default $api;
