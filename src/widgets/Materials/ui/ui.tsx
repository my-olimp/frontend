'use client';
import React, { FC } from 'react';
import styles from './ui.module.scss';
import { MaterialCard } from '@/features/MaterialCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';

interface props {}

export interface IMaterial {
    id: number;
    title: string;
    currentProgress: number;
    maxProgress: number;
    tags: ITag[];
}

export interface ITag {
    id: number;
    text: string;
}

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
    },
];

export const Materials: FC<props> = ({}) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.titleWrap}>
                <h1 className={styles.title}>С чего начать ?</h1>
                <Link href={'/'} className={styles.link}>
                    <h1>Материалы</h1>
                    <ArrowForwardIosIcon fontSize="small" />
                </Link>
            </div>
            <div className={styles.wrapMaterials}>
                {materialList.map((material) => {
                    return <MaterialCard key={material.id} material={material} />;
                })}
            </div>
        </div>
    );
};
