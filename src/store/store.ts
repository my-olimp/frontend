import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/features/auth-slice';
import thunk from 'redux-thunk';
import { userReducer, forsubjectsReducer, forschoolsReducer } from '@/store/features/second-auth';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        forsubjects: forsubjectsReducer,
        forschools: forschoolsReducer,
    },
    devTools: true,
    middleware: [thunk] as const,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
