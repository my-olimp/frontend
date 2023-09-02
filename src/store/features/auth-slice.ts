import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getOTC, login, logout, register } from '@/services/AuthService';
import { AxiosError } from 'axios';

interface IUser {
    id: number;
    subjects: string[];
    roles: string[];
    email: string;
    first_name: string | null;
    second_name: string | null;
    third_name: string | null;
    SNILS: string;
    gender: null | 'm' | 'f';
    account_type: 's' | 't';
}

type AuthState = {
    email: string | undefined;
    error: string | undefined;
    errorCode: string | undefined;
    code: number | undefined;
    password: string | undefined;
    user: IUser | undefined;
};

const initialState = {
    email: undefined,
    error: undefined,
    errorCode: undefined,
    code: undefined,
    password: undefined,
    user: undefined,
} as AuthState;

export interface ILoginData {
    email: string;
    password: string;
}

export interface IRegisterData {
    email: string | undefined;
    password: string | undefined;
    code: number | undefined;
}

export const GetOTC = createAsyncThunk(
    'auth/getRedemptionCode',
    async (data: ILoginData, { rejectWithValue }) => {
        return getOTC(data.email, { rejectWithValue });
    },
);

export const Login = createAsyncThunk(
    'auth/loginByEmail',
    async (data: ILoginData, { rejectWithValue }) => {
        return login(data, { rejectWithValue });
    },
);

export const Register = createAsyncThunk(
    'auth/registerByOTC',
    async (data: IRegisterData, { rejectWithValue }) => {
        return register(data, { rejectWithValue });
    },
);
export const Logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    return logout({ rejectWithValue });
});
export const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        const handleReject = (state, action) => {
            state.error = (action.payload as AxiosError).message;
            state.errorCode = (action.payload as AxiosError).response?.status?.toString();
        };

        builder.addCase(GetOTC.pending, (state, action) => {
            state.email = action.meta.arg.email;
            state.password = action.meta.arg.password;
            state.error = undefined;
        });
        builder.addCase(Login.pending, (state) => {
            state.error = undefined;
        });
        builder.addCase(Register.pending, (state, action) => {
            state.email = action.meta.arg.email;
            state.error = undefined;
        });
        builder.addCase(Logout.pending, (state) => {
            state.email = undefined;
            state.user = undefined;
            state.error = undefined;
        });

        builder.addCase(GetOTC.fulfilled, (state, action) => {
            state.code = action.payload.data;
        });

        builder.addCase(Login.fulfilled, (state, action) => {
            console.log(action.payload);
        });

        builder.addCase(Register.fulfilled, (state, action) => {});

        builder.addCase(Logout.fulfilled, (state, action) => {});

        builder.addCase(GetOTC.rejected, (state, action) => {
            handleReject(state, action);
        });
        builder.addCase(Login.rejected, (state, action) => {
            handleReject(state, action);
        });
        builder.addCase(Register.rejected, (state, action) => {
            handleReject(state, action);
        });
        builder.addCase(Logout.rejected, (state, action) => {
            handleReject(state, action);
        });
    },
});

export const {} = auth.actions;
export default auth.reducer;
