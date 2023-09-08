import $api from '@/axios';
import { ILoginData, IRegisterData } from '@/store/features/auth-slice';
import axios from 'axios';

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
        return await $api.get('user/auth/logout');
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}

export async function refreshToken(props: any = {}) {
  const { rejectWithValue }= props;
  try {
    const response = await $api.post('user/auth/refresh_token/');
    localStorage.setItem('accessToken', response.data.accessToken);
    return response.data.user 
  } catch (error: any) {
    console.error(error);
    if (rejectWithValue) {
      return rejectWithValue(error)
    } else {
      return error
    }
  }
}
