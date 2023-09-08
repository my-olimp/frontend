import { getOTC, login, logout, refreshToken, register } from '@/services/AuthService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

export interface IUser {
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
    loading: boolean;
};

const initialState = {
    email: undefined,
    error: undefined,
    errorCode: undefined,
    code: undefined,
    password: undefined,
    user: undefined,
    loading: false,
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
        return await getOTC(data.email, { rejectWithValue });
    },
);

export const Login = createAsyncThunk(
    'auth/loginByEmail',
    async (data: ILoginData, { rejectWithValue }) => {
        return await login(data, { rejectWithValue });
    },
);

export const Register = createAsyncThunk(
    'auth/registerByOTC',
    async (data: IRegisterData, { rejectWithValue }) => {
        return await register(data, { rejectWithValue });
    },
);
export const Logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    return await logout({ rejectWithValue });
});

export const RefreshToken = createAsyncThunk('auth/refreshToken', async (_, {rejectWithValue}) => {
  return await refreshToken({ rejectWithValue })
})

export const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload
      }
    },
    extraReducers: (builder) => {
        const handleReject = (state, action) => {
            state.error = (action.payload as AxiosError).message;
            state.errorCode = (action.payload as AxiosError).response?.status?.toString();
            state.loading = false
        };

        builder.addCase(GetOTC.pending, (state, action) => {
            state.email = action.meta.arg.email;
            state.loading = true;
            state.password = action.meta.arg.password;
            state.error = undefined;
        });
        builder.addCase(Login.pending, (state) => {
            state.error = undefined;
            state.loading = true;

        });
        builder.addCase(Register.pending, (state, action) => {
            state.email = action.meta.arg.email;
            state.error = undefined;
            state.loading = true;

        });
        builder.addCase(Logout.pending, (state) => {
            state.email = undefined;
            state.user = undefined;
            state.error = undefined;
            state.loading = true;
        });
        builder.addCase(RefreshToken.pending, (state) => {
            state.loading = true;
            
        })


        builder.addCase(GetOTC.fulfilled, (state, action) => {
            state.code = action.payload.data;
            state.loading = false
        });

        builder.addCase(Login.fulfilled, (state, action) => {
          state.user = action.payload.data.user
          state.loading = false

        });

        builder.addCase(Register.fulfilled, (state, action) => {
          state.loading = false

        });

        builder.addCase(Logout.fulfilled, (state, action) => {
          state.loading = false

        });

        builder.addCase(RefreshToken.fulfilled, (state, action) => {
          state.user = action.payload
          console.log(action.payload);
          
        })

        
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
        builder.addCase(RefreshToken.rejected, (state, action) => {
          handleReject(state, action)
        })
    },
});

export const { setUser } = auth.actions;
export default auth.reducer;
