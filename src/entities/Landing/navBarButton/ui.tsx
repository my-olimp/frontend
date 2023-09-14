'use client';

import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useState } from 'react';
import styles from './ui.module.scss';

export const NavBarButton: FC<PropsWithChildren> = ({ children }) => {
    const [over, setOver] = useState(false); // Обработчик наведения
    const router = useRouter();
    return (
        <button
            type="button"
            onClick={() => router.push('/signup')}
            className={styles.button}
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}>
            <p
                className={`${styles.button__text} ${
                    over ? `${styles.button__text__hover}` : `${styles.button__text__hoverNone}`
                }`}>
                {children}
            </p>
        </button>
    );
};
