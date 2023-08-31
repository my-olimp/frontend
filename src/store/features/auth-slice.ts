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
    async (email: string, { rejectWithValue }) => {
        try {
            const response = await $api.post('user/register/email/', {
                email: email,
            });
            console.log(response);
            return response;
        } catch (error: any) {
            console.error(error);
            return rejectWithValue(error.message);
        }
    },
);
export const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRedemptionCode.pending, (state, action) => {
            state.mail = action.meta.arg;
            state.error = null;
            state.status = 'resolved';
            console.log(state);
        });
        builder.addCase(getRedemptionCode.fulfilled, (state, action) => {
            state.error = null;
            state.status = 'loading';
        });
        builder.addCase(getRedemptionCode.rejected, (state, action) => {});
    },
});

export const {} = auth.actions;
export default auth.reducer;
