import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getOTC, login, register } from '@/services/AuthService';

type AuthState = {
    mail: string | null;
    status: string | null;
    error: string | null;
    code: number | null;
};

const initialState = {
    mail: null,
    status: null,
    error: null,
    code: null,
} as AuthState;

export interface ILoginData {
    email: string;
    password: string;
}

export interface IRegisterData {
    firstName: string;
    secondName: string;
    thirdName: string;
    email: string;
    password: string;
    code: number;
}

export const getRedemptionCode = createAsyncThunk(
    'auth/getRedemptionCode',
    async (email: string, { rejectWithValue }) => {
        return getOTC(email, { rejectWithValue });
    },
);

export const loginByEmail = createAsyncThunk(
    'auth/loginByEmail',
    async (data: ILoginData, { rejectWithValue }) => {
        return login(data, { rejectWithValue });
    },
);

export const registerByOTC = createAsyncThunk(
    'auth/registerByOTC',
    async (data: IRegisterData, { rejectWithValue }) => {
        return register(data, { rejectWithValue });
    },
);
export const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setEmail: (state, action) => {
            state.mail = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getRedemptionCode.pending, (state, action) => {
            state.mail = action.meta.arg;
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(getRedemptionCode.fulfilled, (state, action) => {
            state.error = null;
            state.status = 'resolved';
        });
        builder.addCase(getRedemptionCode.rejected, (state, action) => {
            state.error = action.payload as string;
            state.status = 'rejected';
        });

        builder.addCase(loginByEmail.pending, (state, action) => {
            state.mail = action.meta.arg.email;
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(loginByEmail.fulfilled, (state, action) => {
            state.error = null;
            state.status = 'resolved';
        });
        builder.addCase(loginByEmail.rejected, (state, action) => {
            state.error = action.payload as string;
            state.status = 'rejected';
        });
    },
});

export const { setEmail } = auth.actions;
export default auth.reducer;
