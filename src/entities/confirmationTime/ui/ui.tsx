import styles from './ui.module.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '@/store/store';
import { AnyAction } from 'redux';
import { getRedemptionCode } from '@/store/features/auth-slice';
import { useAppSelector } from '@/hooks/useAppSelector';

export const ConfirmationTime = () => {
    const [seconds, setSeconds] = useState<number>(10);
    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    const { mail } = useAppSelector((state) => state.auth);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    const handleClick = () => {
        dispatch(getRedemptionCode(mail as string));
    };
    return (
        <>
            <div className={styles.wrap}>
                {seconds <= 0 ? (
                    <button className={styles.button} onClick={handleClick}>
                        Отправить SMS
                    </button>
                ) : (
                    <p className={styles.text}>Отправить код повторно {formatTime(seconds)}</p>
                )}
            </div>
        </>
    );
};
