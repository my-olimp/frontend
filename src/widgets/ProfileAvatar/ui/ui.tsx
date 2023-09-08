'use client';

import { useAppSelector } from '@/hooks/useAppSelector';
import Image from 'next/image';
import { FC } from 'react';
import styles from './ui.module.scss';

interface props {}

export const ProfileAvatar: FC<props> = ({}) => {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <div className={styles.wrap}>
            <span className={styles.imageWrap}>
                {user?.id && (
                    <Image
                        src={`https://storage.yandexcloud.net/myolimp/user/avatar/${user.id}.webp`}
                        alt="avatar"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                )}
            </span>
            <span className={styles.buttonWrap}>
                <button className={styles.changeButton}>Изменить</button>
                <button className={styles.deleteButton}>Удалить</button>
            </span>
        </div>
    );
};
