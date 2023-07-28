import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        mailOrNumberData: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    userId: '1',
                    mailOrPhone: action.payload,
                },
            };
        },
        typeData: (state, action: PayloadAction<string>) =>{
            return{
                value:{
                 type: action.payload   
                }
            }
        }
    },
});

export const { mailOrNumberData, typeData } = auth.actions;

export default auth.reducer;
