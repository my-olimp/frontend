'use client';

import { useAppSelector } from '@/hooks/useAppSelector';
import Image from 'next/image';
import { FC, Dispatch, SetStateAction } from 'react';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'avatar' | 'contacts'>>;
    isComitet?: boolean;
}

export const ProfileAvatar: FC<props> = ({ setMode, isComitet }) => {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <div className={`${styles.wrap} ${isComitet ? `${styles.wrap_c}` : ''}`}>
            <span className={styles.imageWrap} style={user?.id ? {} : {background: '#C4C4C4'}}>
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
            <h4 className={styles.name}>{`${user?.second_name} ${user?.first_name} ${user?.third_name}`}</h4>
            <span className={styles.buttonWrap}>
                <button onClick={() => setMode('avatar')} className={styles.changeButton}>Изменить</button>
                <button className={styles.deleteButton}>Удалить</button>
            </span>
        </div>
    );
};
