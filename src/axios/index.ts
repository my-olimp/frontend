import axios from 'axios';

const $api = axios.create({
    withCredentials: false,
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Origin: 'https://myolimp.vercel.com',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
    },
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
});

export default $api;
