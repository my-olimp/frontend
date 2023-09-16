'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import fingerUP from '../../../../public/auth/fingerUP.svg';
import styles from './ui.module.scss';

interface props {}

export const UnathorizedPopup: FC<props> = () => {
    const { push } = useRouter();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const handleClick = () => {
        push('/signin');
    };

    return (
        <span className={styles.screen}>
            <div className={styles.wrap}>
                <Image src={fingerUP} alt="fingerUp" />
                <h1>Авторизуйтесь, чтобы получить доступ ко всем материалам</h1>
                <button onClick={() => handleClick()}>Войти</button>
            </div>
        </span>
    );
};
