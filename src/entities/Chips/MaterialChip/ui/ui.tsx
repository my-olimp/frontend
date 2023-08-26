import React, { FC } from 'react';
import styles from './ui.module.scss';

interface props {
    text: string;
}
export const MaterialChip: FC<props> = ({ text }) => {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.textContent}>{text}</h1>
        </div>
    );
};
