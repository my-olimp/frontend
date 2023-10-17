'use client'
import Image from 'next/image';
import { FC } from 'react';
import offlinePage from '../../../../public/materials/offlinePage.svg';
import styles from './ui.module.scss';

interface props { }

export const OfflinePage: FC<props> = ({ }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Image src={offlinePage} alt="offline" className={styles.image} />
                <h1 className={styles.h1}>Отсутствует подключение к интернету</h1>
                <p className={styles.p}>Проверьте сеть и перезагрузите страницу</p>
                <div onClick={() => { window.location.reload() }}>
                    <button className={styles.button}>Перезагрузить</button>
                </div>
            </div>
        </div>
    );
};
