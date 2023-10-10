import React from 'react';
import styles from './index.module.scss';
import { NextPage } from 'next';
import { IMaterial, Materials } from '@/widgets/Materials';
import materialIcon from '../../../../public/materials/materialIcon.svg';
import Search from '../../../../public/materials/Search.svg';
import Image from 'next/image';
import Link from 'next/link';

const materialList: IMaterial[] = [
    {
        id: 1,
        title: 'Что такое олимпиады и зачем в них участвовать?',
        currentProgress: 0,
        maxProgress: 10,
        tags: [
            { id: 1, text: 'Статья' },
            { id: 2, text: 'Олимпиады' },
        ],
        icon: materialIcon.src,
    },
    {
        id: 2,
        title: 'Какие олимпиады бывают?',
        currentProgress: 2,
        maxProgress: 10,
        tags: [
            { id: 1, text: 'Статья' },
            { id: 2, text: 'Олимпиады' },
        ],
        icon: materialIcon.src,
    },
    {
        id: 3,
        title: 'Как выбрать олимпиаду?',
        currentProgress: 6,
        maxProgress: 10,
        tags: [
            { id: 1, text: 'Статья' },
            { id: 2, text: 'Олимпиады' },
        ],
        icon: materialIcon.src,
    },
    {
        id: 4,
        title: 'С чего начать подготовку?',
        currentProgress: 8,
        maxProgress: 10,
        tags: [
            { id: 1, text: 'Статья' },
            { id: 2, text: 'Олимпиады' },
        ],
        icon: materialIcon.src,
    },
];

const Library: NextPage = () => {
    return (
        <div className={styles.screen}>
            <div className={styles.container}>
                <div className={styles.bar}>
                    <p>Библиотека</p>
                    <p>Онлайн-архив полезных материалов от MyOlimp, собранный победителями прошлых лет и опытными преподавателями. Библиотека будет полезна при подготовке к олимпиадам и экзаменам.</p>
                    <div className={styles.searchbar}>
                        <Image src={Search} alt="search" width={18} height={18}/>
                        <input
                            type="text"
                            placeholder='Статья, тема, предмет'
                            maxLength={150}
                        />
                    </div>
                    <div className={styles.btns}>
                        <Link href='/main/library/items' className={styles.btn}>Математика</Link>
                        <div className={styles.btn}>Информатика</div>
                        <div className={styles.btn}>Физика</div>
                    </div>
                </div>
            </div>
            <Materials materialList={materialList} title={'Первый шаг'} libMode={true} />
            <Materials materialList={materialList} title={'Может быть интересно'} libMode={true} />
        </div>
    );
};

export default Library;
