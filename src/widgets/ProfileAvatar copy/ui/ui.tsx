'use client';
import { FC } from 'react';
import styles from './ui.module.scss';
import achievementImage from '../../../../public/profile/achievement.svg';
import { Achievement } from '@/entities/Achievement/ui/ui';

const arrayAchievements = [
    {
        image: `${achievementImage.src}`,
        title: 'По люБВИ',
        text: 'Взять всерос'
    },
    {
        image: `${achievementImage.src}`,
        title: 'По люБВИ',
        text: 'Взять всерос'
    },
    {
        image: `${achievementImage.src}`,
        title: 'По люБВИ',
        text: 'Взять всерос'
    },
]

interface props {
}

export const ProfileAchievements: FC<props> = ({ }) => {


    return (
        <div className={styles.wrap}>
            <h4 className={styles.title}>
                Достижения
            </h4>
            <ul className={styles.achievements}>
                {arrayAchievements && arrayAchievements.map((el) => 
                    <Achievement image={el.image} title={el.title} text={el.text}/>
                )}
            </ul>
        </div>
    );
};
