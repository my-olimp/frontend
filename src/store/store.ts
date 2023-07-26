import { configureStore } from '@reduxjs/toolkit';
import actionReducer from './features/action_1';

export const store = configureStore({
    reducer: {
        actionReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = typeof store.dispatch;
