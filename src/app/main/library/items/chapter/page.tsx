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
                </div>
            </div>
<<<<<<< HEAD
            <Materials materialList={materialList} title={'Статьи'} libMode={true} urlprop={'/main/library/items/chapter/article'} overflow={false} />
=======
            <Materials materialList={materialList} title={'Статьи'} libMode={true} urlprop={'/main/library/items/chapter/article'} overflow={true}/>
>>>>>>> ef387c18459c1d2cf890a077d37a2f490c29a44e
            <div className={`${styles.top} df jcc aic`}>
                <div className={`${styles.topcontainer} df fdc`}>
                    <span className={styles.subtitle}>Тесты</span>
                </div>
            </div>
<<<<<<< HEAD
            <Materials materialList={materialList2} title={'Тесты'} libMode={true} urlprop={'/main/library/items/chapter/article'} overflow={false} />
=======
            <Materials materialList={materialList2} title={'Тесты'} libMode={true} urlprop={'/main/library/items/chapter/article'} overflow={true}/>
>>>>>>> ef387c18459c1d2cf890a077d37a2f490c29a44e
        </div>
    )
}

export default MyChapter;