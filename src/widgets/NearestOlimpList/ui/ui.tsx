import React, { FC } from 'react';
import styles from './ui.module.scss';
import olimpLogo from '../../../../public/materials/olimpLogo.svg';
import olimpLogo2 from '../../../../public/materials/olimpLogo2.svg';
import { NearestOlimp } from '@/features/NearestOlimp';

interface props {}

export interface INearestOlimp {
    id: number;
    name: string;
    icon: string;
    deadline: string; // 20 сентрября, Завтра, Послезавтра, и так далее
}

export interface INormalizedNearestOlimp {
    id: number;
    name: string;
    icon: string;
    deadline: string;
    deadlineColor: string;
}

const nearestOlimpList: INearestOlimp[] = [
    {
        id: 1,
        name: 'Региональный этап ВСОШ по математике',
        icon: olimpLogo.src,
        deadline: 'Завтра',
    },
    {
        id: 2,
        name: 'Заключительный этап Высшей Пробы по математике',
        icon: olimpLogo2.src,
        deadline: '15 сентября',
    },
    {
        id: 3,
        name: 'Заключительный этап ВСОШ по математике',
        icon: olimpLogo.src,
        deadline: '18 марта',
    },
];

export const NearestOlimpList: FC<props> = ({}) => {
    const normalizedNearestOlimp: INormalizedNearestOlimp[] = nearestOlimpList.map((olimp) => {
        let color = '#3579F8';

        if (olimp.deadline.match(/^Завтра/) || olimp.deadline.match(/^Послезавтра/)) {
            color = '#F81F18';
        }

        return {
            ...olimp,
            deadlineColor: color,
        };
    });
    return (
        <div className={styles.wrap}>
            <h1 className={styles.text}>Ближайшие олимпиады</h1>
            <div className={styles.olimpWrap}>
                {normalizedNearestOlimp.map((olimp) => {
                    return <NearestOlimp key={olimp.id} olimp={olimp} />;
                })}
            </div>
        </div>
    );
};
