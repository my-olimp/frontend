import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/src/types/types-external';

type InitialState = {
    value: AuthState;
};

type AuthState = {
    isAuth: boolean;
    userId: string;
    mailOrPhone: string;
    type: string;
};

const initialState = {
    value: {
        isAuth: false,
        userId: '',
        mailOrPhone: '',
        type: '',
    } as AuthState,
} as InitialState;

interface mailOrNumberPayload {
    mailOrPhone: string;
    type: string;
}

export const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        mailOrNumberData: (
            state: WritableDraft<InitialState>,
            action: PayloadAction<mailOrNumberPayload>,
        ) => {
            const { mailOrPhone, type } = action.payload;
            return {
                ...state,
                mailOrPhone: mailOrPhone,
                type: type,
            };
        },
    },
});

export const { mailOrNumberData } = auth.actions;

export default auth.reducer;
