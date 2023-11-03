'use client'
import React, { useState } from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss'
import materialIcon from '../../../../public/materials/materialIcon.svg';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '../../../../public/materials/Search.svg'
import Image from 'next/image';
import useIsMobile from '@/hooks/UseIsMobile';
import { IMaterial, Materials } from '@/widgets/Materials';
import material from '../../../../public/materials/Materials.svg'
import ArrowIcon from '../../../../public/arrows/arrow-right.svg';
import { nanoid } from 'nanoid';
import Link from 'next/link'
import { MaterialCardMobile } from '@/features/MaterialCardMobile';

const Olympiads: NextPage = () => {
    const isMobile = useIsMobile(900)
    const [text, setText] = useState('');


    const inputHandler = (e: string) => {
        setText(e)
    }

    const materialList: IMaterial[] = [
        {
            id: 1,
            title: 'Персонализированный вариант',
            currentProgress: 0,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Олимпиада' },
                { id: 2, text: 'ВСОШ по математике' },
            ],
            icon: materialIcon.src,
        },
        {
            id: 2,
            title: 'Теория приближений',
            currentProgress: 2,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Олимпиада' },
                { id: 2, text: 'Высшая проба по физике' },
            ],
            icon: materialIcon.src,
        },
        {
            id: 3,
            title: 'Подсчёты в графах',
            currentProgress: 6,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Олимпиада' },
                { id: 2, text: 'Покори горы, Джейсон стэтхэм (c)' },
            ],
            icon: materialIcon.src,
        },
        {
            id: 4,
            title: 'Полуинвариант',
            currentProgress: 8,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Олимпиада' },
                { id: 2, text: 'ВСОШ по математике' },
            ],
            icon: materialIcon.src,
        },
        {
            id: 2,
            title: 'Теория приближений',
            currentProgress: 2,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Олимпиада' },
                { id: 2, text: 'Высшая проба по физике' },
            ],
            icon: materialIcon.src,
        },
        {
            id: 3,
            title: 'Подсчёты в графах',
            currentProgress: 6,
            maxProgress: 10,
            tags: [
                { id: 1, text: 'Олимпиада' },
                { id: 2, text: 'Покори горы, Джейсон стэтхэм (c)' },
            ],
            icon: materialIcon.src,
        },
    ];

    return (
        <div className={styles.wrap}>
            {isMobile
                ? (
                    <div className={`${styles.topMobile} df jcsb aic`}>
                        <div className={`${styles.topright} df aic`}>
                            <div className={`${styles.inputbtn} df aic`}>
                                <input
                                    type="text"
                                    maxLength={80}
                                    value={text}
                                    placeholder={'Поиск'}
                                    onChange={(e) => inputHandler(e.target.value)}
                                />
                                <Image src={SearchIcon} alt='Search Icon' />
                            </div>
                            <div className={styles.btns}>
                                <div className={`${styles.sort} df aic jcc`}>
                                    <FormatListBulletedIcon />
                                    <span>Сортировка</span>
                                </div>
                                <div className={`${styles.addbtn} df aic`}>
                                    <AddIcon />
                                    <span>Добавить</span>
                                </div>
                            </div>
                            <span className={styles.title}>Олимпиады</span>
                        </div>
                    </div>
                )
                :
                (
                    <div className={`${styles.top} df jcsb aic`}>
                        <span className={styles.title}>Олимпиады</span>
                        <div className={`${styles.topright} df aic`}>
                            <div className={`${styles.sort} df aic jcc`}>
                                <FormatListBulletedIcon />
                                <span>Сортировка</span>
                            </div>
                            <div className={`${styles.inputbtn} df aic`}>
                                <Image src={SearchIcon} alt='Search Icon' />
                                <input
                                    type="text"
                                    maxLength={80}
                                    value={text}
                                    placeholder={'Поиск'}
                                    onChange={(e) => inputHandler(e.target.value)}
                                />
                            </div>
                            <div className={`${styles.addbtn} df aic`}>
                                <AddIcon />
                                <span>Добавить</span>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className={styles.blockText}>
                <span className={styles.titleL}>2023/2024</span>
            </div>
            {!isMobile ?
                (
                    <div className={styles.materials}>
                        <Materials materialList={materialList} olymp={false} mode='profile'/>
                    </div>
                )
                :
                (
                    <div className={styles.materialMobile}>
                        {materialList.slice(0, 4).map((item) =>
                            <MaterialCardMobile key={nanoid(6)} material={item} />
                        )}
                    </div>
                )
            }
            <div className={styles.blockText}>
                <span className={styles.titleL}>2022/2023</span>
            </div>
            {!isMobile ?
                (
                    <Materials materialList={materialList} olymp={false} mode='profile' edit={true}/>
                    )
                :
                (
                    <div className={styles.materialMobile}>
                        {materialList.slice(0, 4).map((item) =>
                            <MaterialCardMobile key={nanoid(6)} material={item} />
                        )}
                    </div>
                )
            }
        </div>
    )
}

export default Olympiads;