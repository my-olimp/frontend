'use client';

import { useAppSelector } from '@/hooks/useAppSelector';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import styles from './ui.module.scss';

interface props {}

export const ProfileAvatar: FC<props> = ({}) => {
    const { user } = useAppSelector((state) => state.auth);
    const { push } = useRouter();
    return (
        <div className={styles.wrap}>
            <span className={styles.imageWrap}>
                {user?.id && (
                    <Image
                        src={`https://storage.yandexcloud.net/myolimp/user/avatar/${user.id}.webp`}
                        alt="avatar"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="219px"
                        priority
                        quality={80}
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
