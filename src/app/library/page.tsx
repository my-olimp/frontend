import React from 'react';
import styles from './index.module.scss';
import { NextPage } from 'next';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/Footer';
import { IMaterial, Materials } from '@/widgets/Materials';
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

const Library: NextPage = () => {
    return (
        <div className={styles.screen}>
            <Header activeId={3} />
            <Materials materialList={materialList} title={'Первый шаг'} libMode={true} />
            <Materials materialList={materialList} title={'Может быть интересно'} libMode={true} />
            <Footer />
        </div>
    );
};

export default Library;
