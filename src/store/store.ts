import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/features/auth-slice';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    devTools: true,
    middleware: [thunk] as const,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
