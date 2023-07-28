import styles from './ui.module.scss';
import React, { useState, useEffect } from 'react';

export const ConfirmationTime = () => {
    const [seconds, setSeconds] = useState<number>(10);
    const [buttonActive, setButtonActive] = useState<boolean>(false);

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
        console.log('Клик');
        // Потом логику напишем
    };
    return (
        <>
            <div className={styles.wrap}>
                {seconds <= 0 ? (
                    <button className={styles.button} onClick={handleClick}>
                        Отправить SMS
                    </button>
                ) : (
                    <p className={styles.text}>Отправиь код повторно {formatTime(seconds)}</p>
                )}
            </div>
        </>
    );
};
