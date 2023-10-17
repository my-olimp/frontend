'use client';

import { useAppSelector } from '@/hooks/useAppSelector';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, Dispatch, SetStateAction } from 'react';
import styles from './ui.module.scss';

interface props {
    setMode: Dispatch<SetStateAction<'' | 'personal' | 'work' | 'avatar' | 'contacts'>>;
}

export const ProfileAvatar: FC<props> = ({ setMode }) => {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <div className={styles.wrap}>
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
            <h4 className={styles.name}>{`${user?.first_name} ${user?.second_name} ${user?.third_name}`}</h4>
            <span className={styles.buttonWrap}>
                <button onClick={() => setMode('avatar')} className={styles.changeButton}>Изменить</button>
                <button className={styles.deleteButton}>Удалить</button>
            </span>
        </div>
    );
};
