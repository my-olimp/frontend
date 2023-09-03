import axios from 'axios';

const $api = axios.create({
    withCredentials: true,
    baseURL:
        process.env.NODE_ENV === 'production' ? 'https://myob.xstl.ru/' : 'http://localhost:8000/',
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
});

export default $api;
