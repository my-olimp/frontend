'use client';

import { FC } from 'react';
import styles from './ui.module.scss';
import { useRouter } from 'next/navigation';

interface Props {
    link?: string;
    children: string;
}

export const NavBarText: FC<Props> = ({ children, link }) => {
    const router = useRouter();
    return (
        <button onClick={() => router.push(`${link}`)} className={styles.textButton}>
            {children}
        </button>
    );
};
