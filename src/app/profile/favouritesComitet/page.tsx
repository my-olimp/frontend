'use client'
import React, { useState } from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss'
import { IMaterial, Materials } from '@/widgets/Materials';
import materialIcon from '../../../../public/materials/materialIcon.svg';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArrowIcon from '../../../../public/arrows/arrow-right.svg';
import SearchIcon from '../../../../public/materials/Search.svg';
import ImageNews from '../../../../public/profile/news.png';
import Image from 'next/image';
import useIsMobile from '@/hooks/UseIsMobile';
import Link from 'next/link'
import { MaterialCardMobile } from '@/features/MaterialCardMobile';
import { nanoid } from 'nanoid';
import { month } from '@/store/features/auth-slice';

const FavouritesComitet: NextPage = () => {
    const isMobile = useIsMobile(900)
    const [text, setText] = useState('');

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


    const inputHandler = (e: string) => {
        setText(e)
    }

    // const formatDate = (inputDate: string) => {
    //     const date = new Date(inputDate);
    //     const day = date.getDate();
    //     const month1 = month[date.getMonth()];
    //     const year = date.getFullYear();
    //     return `${day} ${month1}, ${year}`;
    // }

    return (
        <div className={styles.wrap}>
            {isMobile ? (
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
                        <span className={styles.title}>Избранное</span>
                    </div>
                </div>
            )
                : (
                    <div className={`${styles.top} df jcsb aic`}>
                        <span className={styles.title}>Избранное</span>
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
                        </div>
                    </div>
                )}
            <div className={styles.blockText}>
                <span className={styles.titleL}>Материалы</span>
                {/* <Link href='/profile/olympiads'>
                    <div className={styles.all}>
                        <div className={styles.all__text}>Все олимпиады</div>
                        <Image src={ArrowIcon.src} alt='arrow' width={20} height={20} />
                    </div>
                </Link> */}
            </div>
            {!isMobile ?
                (
                    <div className={styles.materials}>
                        <Materials materialList={materialList} olymp={false} mode='profile' edit={true}/>
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
                <span className={styles.titleN}>Новости</span>
                {/* <Link href='/profile/olympiads'>
                    <div className={styles.all}>
                        <div className={styles.all__text}>Все новости</div>
                        <Image src={ArrowIcon.src} alt='arrow' width={20} height={20} />
                    </div>
                </Link> */}
            </div>
            <div className={styles.news}>
                <div
                    className={`${styles.item} df fdc jcsb`}
                    key={nanoid(6)}
                    style={{ backgroundImage: `url('${ImageNews.src}')` }}
                >
                    <div className={styles.itemTop}>
                        <p>Стартовала 64-я Международная математическая олимпиада</p>
                        {/* <span>{formatDate(item.created_at)}</span> */}
                        <span>22 мая 2023</span>
                    </div>
                    <div className={styles.itembottom}>
                        <Link
                            className={`${styles.itembottombtn} df jcc aic cp`}
                            href={`/main/news/1`}
                        >
                            Подробнее
                        </Link>
                    </div>
                </div>
                <div
                    className={`${styles.item} df fdc jcsb`}
                    key={nanoid(6)}
                    style={{ backgroundImage: `url('${ImageNews.src}')` }}
                >
                    <div className={styles.itemTop}>
                        <p>Стартовала 64-я Международная математическая олимпиада</p>
                        {/* <span>{formatDate(item.created_at)}</span> */}
                        <span>22 мая 2023</span>
                    </div>
                    <div className={styles.itembottom}>
                        <Link
                            className={`${styles.itembottombtn} df jcc aic cp`}
                            href={`/main/news/1`}
                        >
                            Подробнее
                        </Link>
                    </div>
                </div>
                <div
                    className={`${styles.item} df fdc jcsb`}
                    key={nanoid(6)}
                    style={{ backgroundImage: `url('${ImageNews.src}')` }}
                >
                    <div className={styles.itemTop}>
                        <p>Стартовала 64-я Международная математическая олимпиада</p>
                        {/* <span>{formatDate(item.created_at)}</span> */}
                        <span>22 мая 2023</span>
                    </div>
                    <div className={styles.itembottom}>
                        <Link
                            className={`${styles.itembottombtn} df jcc aic cp`}
                            href={`/main/news/1`}
                        >
                            Подробнее
                        </Link>
                    </div>
                </div>
                <div
                    className={`${styles.item} df fdc jcsb`}
                    key={nanoid(6)}
                    style={{ backgroundImage: `url('${ImageNews.src}')` }}
                >
                    <div className={styles.itemTop}>
                        <p>Стартовала 64-я Международная математическая олимпиада</p>
                        {/* <span>{formatDate(item.created_at)}</span> */}
                        <span>22 мая 2023</span>
                    </div>
                    <div className={styles.itembottom}>
                        <Link
                            className={`${styles.itembottombtn} df jcc aic cp`}
                            href={`/main/news/1`}
                        >
                            Подробнее
                        </Link>
                    </div>
                </div>
                <div
                    className={`${styles.item} df fdc jcsb`}
                    key={nanoid(6)}
                    style={{ backgroundImage: `url('${ImageNews.src}')` }}
                >
                    <div className={styles.itemTop}>
                        <p>Стартовала 64-я Международная математическая олимпиада</p>
                        {/* <span>{formatDate(item.created_at)}</span> */}
                        <span>22 мая 2023</span>
                    </div>
                    <div className={styles.itembottom}>
                        <Link
                            className={`${styles.itembottombtn} df jcc aic cp`}
                            href={`/main/news/1`}
                        >
                            Подробнее
                        </Link>
                    </div>
                </div>
                <div
                    className={`${styles.item} df fdc jcsb`}
                    key={nanoid(6)}
                    style={{ backgroundImage: `url('${ImageNews.src}')` }}
                >
                    <div className={styles.itemTop}>
                        <p>Стартовала 64-я Международная математическая олимпиада</p>
                        {/* <span>{formatDate(item.created_at)}</span> */}
                        <span>22 мая 2023</span>
                    </div>
                    <div className={styles.itembottom}>
                        <Link
                            className={`${styles.itembottombtn} df jcc aic cp`}
                            href={`/main/news/1`}
                        >
                            Подробнее
                        </Link>
                    </div>
                </div>
                <div
                    className={`${styles.item} df fdc jcsb`}
                    key={nanoid(6)}
                    style={{ backgroundImage: `url('${ImageNews.src}')` }}
                >
                    <div className={styles.itemTop}>
                        <p>Стартовала 64-я Международная математическая олимпиада</p>
                        {/* <span>{formatDate(item.created_at)}</span> */}
                        <span>22 мая 2023</span>
                    </div>
                    <div className={styles.itembottom}>
                        <Link
                            className={`${styles.itembottombtn} df jcc aic cp`}
                            href={`/main/news/1`}
                        >
                            Подробнее
                        </Link>
                    </div>
                </div>
                <div
                    className={`${styles.item} df fdc jcsb`}
                    key={nanoid(6)}
                    style={{ backgroundImage: `url('${ImageNews.src}')` }}
                >
                    <div className={styles.itemTop}>
                        <p>Стартовала 64-я Международная математическая олимпиада</p>
                        {/* <span>{formatDate(item.created_at)}</span> */}
                        <span>22 мая 2023</span>
                    </div>
                    <div className={styles.itembottom}>
                        <Link
                            className={`${styles.itembottombtn} df jcc aic cp`}
                            href={`/main/news/1`}
                        >
                            Подробнее
                        </Link>
                    </div>
                </div>
                <div
                    className={`${styles.item} df fdc jcsb`}
                    key={nanoid(6)}
                    style={{ backgroundImage: `url('${ImageNews.src}')` }}
                >
                    <div className={styles.itemTop}>
                        <p>Стартовала 64-я Международная математическая олимпиада</p>
                        {/* <span>{formatDate(item.created_at)}</span> */}
                        <span>22 мая 2023</span>
                    </div>
                    <div className={styles.itembottom}>
                        <Link
                            className={`${styles.itembottombtn} df jcc aic cp`}
                            href={`/main/news/1`}
                        >
                            Подробнее
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FavouritesComitet;