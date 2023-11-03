"use client"
import React from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss'

import materialIcon from '../../../../../../public/materials/materialIcon.svg';
import { Materials, IMaterial } from '@/widgets/Materials';

const MyChapter: NextPage = () => {

    const materialList: IMaterial[] = [
        {
            id: 1,
            title: 'Плюсы и минусы математики',
            currentProgress: 0,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Статья' },
                { id: 2, text: 'Математика' },
            ],
            icon: materialIcon.src,
        },
        {
            id: 2,
            title: 'Куда можно поступить с математикой?',
            currentProgress: 2,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Статья' },
                { id: 2, text: 'Математика' },
            ],
            icon: materialIcon.src,
        },
        {
            id: 3,
            title: 'Обзор на олимпиады по математике',
            currentProgress: 6,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Статья' },
                { id: 2, text: 'Математика' },
            ],
            icon: materialIcon.src,
        },
        {
            id: 4,
            title: 'Пробный вариант ВСОШ',
            currentProgress: 8,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Пробник' },
                { id: 2, text: 'Математика' },
            ],
            icon: materialIcon.src,
        },
        {
            id: 3,
            title: 'Обзор на олимпиады по математике',
            currentProgress: 6,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Статья' },
                { id: 2, text: 'Математика' },
            ],
            icon: materialIcon.src,
        },
        {
            id: 4,
            title: 'Пробный вариант ВСОШ',
            currentProgress: 8,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Пробник' },
                { id: 2, text: 'Математика' },
            ],
            icon: materialIcon.src,
        },
    ];

    const materialList2: IMaterial[] = [
        {
            id: 1,
            title: 'Плюсы и минусы математики',
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
            title: 'Куда можно поступить с математикой?',
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
            title: 'Обзор на олимпиады по математике',
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
            title: 'Пробный вариант ВСОШ',
            currentProgress: 8,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Тест' },
                { id: 2, text: 'Математика' },
            ],
            icon: materialIcon.src,
        },
    ];

    return (
        <div className={styles.main}>
            <div className={`${styles.top} df jcc aic`}>
                <div className={`${styles.topcontainer} df fdc`}>
                    <span className={styles.title}>Алгебра</span>
                    <span className={styles.subtitle}>Статьи</span>
                    <div className={styles.materials}><Materials materialList={materialList} mode='library' /></div>
                </div>
            </div>
            <div className={`${styles.top} df jcc aic`}>
                <div className={`${styles.topcontainer} df fdc`}>
                    <span className={styles.subtitle}>Тесты</span>
                    <div className={styles.materials}><Materials materialList={materialList2} mode='library' /></div>
                </div>
            </div>
        </div>
    )
}

export default MyChapter;