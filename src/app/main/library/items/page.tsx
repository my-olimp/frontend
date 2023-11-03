"use client"
import React from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss'
import { IMaterial, Materials } from '@/widgets/Materials';
import Link from 'next/link';
import materialIcon from '../../../../../public/materials/materialIcon.svg';

const MyItems: NextPage = () => {
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

    // РАЗДЕЛЫ
    interface Sections {
        text: string;
        url: string;
    }

    const sectionsArray: Sections[] = [
        { text: "Алгебра", url: "/main/library/math" },
        { text: "Геометрия", url: "/main/library/math" },
        { text: "Теория чисел", url: "/main/library/math" },
        { text: "Теория графов", url: "/main/library/math" },
        { text: "Комбинаторика", url: "/main/library/math" },
        { text: "Тригонометрия", url: "/main/library/math" },
        { text: "Основы математического анализа", url: "/main/library/math" },
        { text: "Общие конструктивные задачи", url: "/main/library/math" },
        { text: "Разноплановые задачи", url: "/main/library/math" },
        { text: "Математическая логика", url: "/main/library/math" },
        { text: "Функциональные уравнения", url: "/main/library/math" },
        { text: "Геометрия в алгебре", url: "/main/library/math" },
        { text: "Алгебра в геометрии", url: "/main/library/math" },
    ];

    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.topcontainer}>
                    <span>Математика</span>
                    <span>Первый шаг</span>
                </div>
            <div className={styles.materials}><Materials materialList={materialList} mode='library' /></div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomcontainer}>
                    <span>Разделы</span>
                    <div className={styles.items}>
                        {sectionsArray.map((subject, index) => (
                            <Link
                                href={'/main/library/items/chapter'}
                                key={index}
                                className={styles.item}
                                onClick={() => localStorage.setItem("selecteditem2", subject.text)}
                            >
                                {subject.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyItems;