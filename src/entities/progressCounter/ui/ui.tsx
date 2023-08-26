import React, { FC } from 'react';
import styles from './ui.module.scss';

interface props {
    current: number;
    max: number;
}
export const ProgressCounter: FC<props> = ({ current, max }) => {
    return (
        <div className={styles.wrap}>
            <p className={styles.textContent}>
                {current}/{max}
            </p>
        </div>
    );
};
