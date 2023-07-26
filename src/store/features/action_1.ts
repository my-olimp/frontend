import { createSlice, PayloadAction } from '@reduxjs/toolkit';
/*Example*/
type InitialState = {
    value: ActionState;
};

type ActionState = {
    isAction: boolean;
    userName: string;
    userId: string;
    isAdmin: boolean;
};

const initialState = {
    value: {
        isAction: false,
        userName: '',
        userId: '',
        isAdmin: false,
    } as ActionState,
} as InitialState;

export const action = createSlice({
    name: 'action',
    initialState: initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAction: true,
                    userName: action.payload,
                    userId: '1',
                    isAdmin: false,
                },
            };
        },
    },
});

export const { logIn, logOut } = action.actions;
export default action.reducer;
