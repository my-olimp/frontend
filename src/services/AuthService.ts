import $api from '@/axios';
import { ILoginData, IRegisterData } from '@/store/features/auth-slice';

export async function getOTC(email: string, { rejectWithValue }) {
    try {
        return await $api.post('user/register/email/', {
            email: email,
        });
    } catch (error: any) {
        console.log(error);
        return rejectWithValue(error.message);
    }
}

export async function login(data: ILoginData, { rejectWithValue }) {
    try {
        return await $api.post('user/login/', {
            ...data,
        });
    } catch (error: any) {
        console.log(error);
        return rejectWithValue(error.message);
    }
}

export async function register(data: IRegisterData, { rejectWithValue }) {
    try {
        return await $api.post('user/register/', {
            ...data,
        });
    } catch (error: any) {
        console.log(error);
        return rejectWithValue(error.message);
    }
}
