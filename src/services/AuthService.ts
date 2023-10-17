import $api from '@/axios';
import { ILoginData, IRegisterData } from '@/store/features/auth-slice';

export async function getOTC(email: string, { rejectWithValue }) {
    try {
        return await $api.post('user/register/email/', {
            email: email,
        });
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}

export async function login(data: ILoginData, { rejectWithValue }) {
    try {
        const response = await $api.post('user/auth/login/', {
            ...data,
        });

        localStorage.setItem('accessToken', response.data.access);

        return response;
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}

export async function register(data: IRegisterData, { rejectWithValue }) {
    try {
        return await $api.post('user/register/', {
            email: data.email,
            password: data.password,
            code: data.code,
        });
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}

export async function logout({ rejectWithValue }) {
    try {
        localStorage.removeItem('accessToken');
        return await $api.post('user/auth/logout/');
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}

export async function refreshToken(props: any = {}) {
    const { rejectWithValue } = props;
    try {
        const response = await $api.post('user/auth/refresh_token/');
        localStorage.setItem('accessToken', response.data.access);
        return response.data.user;
    } catch (error: any) {
        console.error(error);
        if (rejectWithValue) {
            return rejectWithValue(error);
        } else {
            return error;
        }
    }
}

export async function getRegions({ rejectWithValue }) {
    try {
        return await $api.get('user/location/regions/');
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}

export async function getCity(region: string, { rejectWithValue }) {
    try {
        return await $api.get(`user/location/cities/?region=${region}`);
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}

export async function getSchools(city: string, { rejectWithValue }) {
    try {
        return await $api.get(`user/location/schools/?region=${city}`);
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}

export async function getDisciplines({ rejectWithValue }) {
    try {
        return await $api.get(`user/subjects/`);
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}

export async function getUser({ rejectWithValue }) {
    try {
        return await $api.patch(`user/`);
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}

export async function putUserdata(data: any, { rejectWithValue }) {
    try {
        return await $api.put(`user/`, data);
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}

export async function getNews(id: number, { rejectWithValue }) {
    try {
        return await $api.get(`library/article/search/${id}/`);
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}

export async function getArticle(id: number, { rejectWithValue }) {
    try {
        return await $api.get(`library/article/${id}/`);
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}