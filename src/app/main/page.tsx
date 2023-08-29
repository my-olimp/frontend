import React from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss';
import { IMaterial, Materials } from '@/widgets/Materials';
import { NearestOlimpList } from '@/widgets/NearestOlimpList';
import { PlansToday } from '@/widgets/PlansToday';
import materialIcon from '../../../public/materials/materialIcon.svg';

const materialList: IMaterial[] = [
    {
        id: 1,
        title: 'Персонализированный вариант',
        currentProgress: 0,
        maxProgress: 10,
        tags: [
            { id: 1, text: 'Тест' },
            { id: 2, text: 'Математика' },
        ],
        icon: materialIcon.src,
    },
    {
        id: 2,
        title: 'Теория приближений',
        currentProgress: 2,
        maxProgress: 10,
        tags: [
            { id: 1, text: 'Тест' },
            { id: 2, text: 'Математика' },
        ],
        icon: materialIcon.src,
    },
    {
        id: 3,
        title: 'Подсчёты в графах',
        currentProgress: 6,
        maxProgress: 10,
        tags: [
            { id: 1, text: 'Тест' },
            { id: 2, text: 'Математика' },
        ],
        icon: materialIcon.src,
    },
    {
        id: 4,
        title: 'Полуинвариант',
        currentProgress: 8,
        maxProgress: 10,
        tags: [
            { id: 1, text: 'Тест' },
            { id: 2, text: 'Математика' },
        ],
        icon: materialIcon.src,
    },
];
const Main: NextPage = () => {
    return (
        <div className={styles.screen}>
            <div className={styles.wrap}>
                <NearestOlimpList />
                <PlansToday />
            </div>
            <Materials materialList={materialList} title={'С чего начать ?'} libMode={false} />
        </div>
    );
};

export default Main;
