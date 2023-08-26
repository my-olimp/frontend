import styles from './ui.module.scss';
import React, { useEffect, useState } from 'react';

export const ConfirmationTime = () => {
    const [seconds, setSeconds] = useState<number>(10);

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
                    <p className={styles.text}>Отправить код повторно {formatTime(seconds)}</p>
                )}
            </div>
        </>
    );
};
