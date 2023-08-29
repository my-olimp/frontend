import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import $api from '@/axios';

type AuthState = {
    mail: string | null;
    status: string | null;
    error: string | null;
};

const initialState = {
    mail: null,
    status: null,
    error: null,
} as AuthState;

export const getRedemptionCode = createAsyncThunk(
    'auth/getRedemptionCode',
    async (email, { rejectWithValue }) => {
        try {
            const response = await $api.post('user/register/email/', {
                email: email,
            });
            return response;
        } catch (error: any) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    },
);
export const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setEmail: (state, action) => {
            const { mail } = action.payload;
            return {
                ...state,
                mail: mail,
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getRedemptionCode.fulfilled, (state, action) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(getRedemptionCode.pending, (state, action) => {
            state.error = null;
            state.status = 'resolved';
            console.log(action);
        });
        builder.addCase(getRedemptionCode.rejected, (state, action) => {});
    },
});

export const { setEmail } = auth.actions;
export default auth.reducer;
