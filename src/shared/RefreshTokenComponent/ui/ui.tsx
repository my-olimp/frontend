'use client';
import { setUser } from '@/store/features/auth-slice';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

interface props {
    authMode?: boolean;
}

export const RefreshTokenComponent: FC<props> = ({ authMode = false }) => {
    const { push } = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            try {
                const response = await $api.post('user/auth/refresh_token/');
                localStorage.setItem('accessToken', response.data.accessToken);
                dispatch(setUser(response.data.user))
                if (authMode) {
                    push('/main');
                }
            } catch (error: any) {
                console.error(error);
            }
        })();
    }, [push, dispatch, authMode]);
    return <></>;
};
