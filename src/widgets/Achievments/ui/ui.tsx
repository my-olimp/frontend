'use client';
import { FC } from 'react';
import styles from './ui.module.scss';
import achievementImage from '../../../../public/profile/achievement.svg';
import { Achievement } from '@/entities/Achievement/ui/ui';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';

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
    setMode?: any;
    tag?: string;
}

export const Achievments: FC<props> = ({ setMode, tag }) => {
    return (
        <div className={styles.wrap}>
            <h4 className={styles.title}>
            {tag === 't' ? (
                    <>
                        <span>Мои группы</span>
                        <div onClick={() => setMode('groups')}>
                            <DriveFileRenameOutlineOutlinedIcon className='cp'/>
                        </div>
                    </>
                ) : (
                    <span>Достижения</span>
                )}

            </h4>
            <ul className={styles.achievements}>
                {arrayAchievements && arrayAchievements.map((el) =>
                    <Achievement image={el.image} title={el.title} text={el.text} key={Math.random()} />
                )}
            </ul>
        </div>
    )
}