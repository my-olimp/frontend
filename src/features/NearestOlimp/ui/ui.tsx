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
            <div className={styles.titleWrap}>
                <Image
                    src={olimp.icon}
                    className={styles.img}
                    width={75}
                    height={75}
                    alt="olimpLogo"
                    draggable={false}
                />
                <h1 className={styles.text}>{olimp.name}</h1>
            </div>
            <Chip
                label={olimp.deadline}
                variant="outlined"
                sx={{ color: olimp.deadlineColor, border: `1px solid ${olimp.deadlineColor}` }}
                className={styles.chip}
            />
        </div>
    );
};
