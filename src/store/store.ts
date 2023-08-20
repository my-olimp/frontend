import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/features/auth-slice';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    devTools: true,
    middleware: [logger] as const,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
