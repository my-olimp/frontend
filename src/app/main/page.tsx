import React from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss';
import { IMaterial, Materials } from '@/widgets/Materials';
import { NearestOlimpList } from '@/widgets/NearestOlimpList';
import { PlansToday } from '@/widgets/PlansToday';
import materialIcon from '../../../public/materials/materialIcon.svg';
import Link from 'next/link';
import Image from 'next/image';
import ArrowRight from '../../../public/arrows/arrow-right.svg';

const materialList: IMaterial[] = [
    {
        id: 1,
        title: 'Персональный вариант',
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
            <div className={styles.materials}>
                <div className={styles.titleWrap}>
                        <h1>С чего начать ?</h1>
                        <div className={styles.link}>
                            <Link className={styles.text} href="/main/library">Материалы</Link>
                            <Image width={20} height={20} className={styles.arrow} alt='arrow' src={ArrowRight.src} />
                        </div>
                </div>
                <Materials materialList={materialList} mode='main' />
            </div>
        </div>
    );
};

export default Main;
