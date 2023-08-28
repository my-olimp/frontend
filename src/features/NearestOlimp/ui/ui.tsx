import React, { FC } from 'react';
import { Chip } from '@mui/material';
import styles from './ui.module.scss';
import Image from 'next/image';
import { INormalizedNearestOlimp } from '@/widgets/NearestOlimpList';

interface props {
    olimp: INormalizedNearestOlimp;
}
export const NearestOlimp: FC<props> = ({ olimp }) => {
    return (
        <div className={styles.wrap}>
            <Image
                src={olimp.icon}
                className={styles.img}
                width={75}
                height={75}
                alt="olimpLogo"
                draggable={false}
            />
            <div className={styles.titleWrap}>
                <h1 className={styles.text}>{olimp.name}</h1>
                <Chip
                    label={olimp.deadline}
                    variant="outlined"
                    sx={{ color: olimp.deadlineColor, border: `1px solid ${olimp.deadlineColor}` }}
                    className={styles.chip}
                />
            </div>
        </div>
    );
};
