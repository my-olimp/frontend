'use client';
import { RefreshToken } from '@/store/features/auth-slice';
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
    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
    useEffect(() => {
        (async () => {
            try {
                await dispatch(RefreshToken());
            } catch (error: any) {
                console.error(error);
            } finally {
                if (authMode) {
                    push('/main');
                }
            }
        })();
    }, [push, dispatch, authMode]);
    return <></>;
};
