'use client'
import React, { useState, useEffect } from 'react';
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
import useDebounce from '@/hooks/useDebounce';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Redaction: NextPage = () => {
    const isMobile = useIsMobile(900)
    const [text, setText] = useState('');
    const [olympiads, setOlympiads] = useState<any[]>([])
    const [news, setNews] = useState<any[]>([])
    const [noneO, setNoneO] = useState(false);
    const [noneN, setNoneN] = useState(false);
    const [loadingO, setLoadingO] = useState(false);
    const [loadingN, setLoadingN] = useState(false);
    const debouncedsearch = useDebounce(dataSearch, 500)

    const olympiadsList: IMaterial[] = [
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
            id: 6,
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
            id: 5,
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

    const newsList: any[] = [
        {
            id: 1,
            title: 'Стартовала 64-я Международная математическая олимпиада',
            created_at: '22 мая 2023'
            // icon: materialIcon.src,
        },
        {
            id: 2,
            title: 'Стартовала 64-я Международная математическая олимпиада',
            created_at: '22 мая 2023'
            // icon: materialIcon.src,
        },
        {
            id: 3,
            title: 'Стартовала 64-я Международная математическая олимпиада',
            created_at: '22 мая 2023'
            // icon: materialIcon.src,
        },
        {
            id: 4,
            title: 'Стартовала 64-я Международная математическая олимпиада',
            created_at: '22 мая 2023'
            // icon: materialIcon.src,
        },
        {
            id: 5,
            title: 'Стартовала 64-я Международная математическая олимпиада',
            created_at: '22 мая 2023'
            // icon: materialIcon.src,
        },
        {
            id: 6,
            title: 'Стартовала 64-я Международная математическая олимпиада',
            created_at: '22 мая 2023'
            // icon: materialIcon.src,
        },
        {
            id: 7,
            title: 'Стартовала 64-я Международная математическая олимпиада',
            created_at: '22 мая 2023'
            // icon: materialIcon.src,
        },
        {
            id: 8,
            title: 'Стартовала 64-я Международная математическая олимпиада',
            created_at: '22 мая 2023'
            // icon: materialIcon.src,
        },
    ];

    useEffect(() => {
        setOlympiads(olympiadsList)
        setNews(newsList)
    }, [])


    const inputHandler = (e: string) => {
        setLoadingO(true)
        setNoneO(false)
        setLoadingN(true)
        setNoneN(false)
        setText(e)
        debouncedsearch(e)
    }

    function dataSearch(text: string) {
        if (text === '') {
            setOlympiads(olympiadsList)
            setLoadingO(false)
            setNews(newsList)
            setLoadingN(false)
            return;
        }
        const searchText = text.toLowerCase();
        const filteredDataO = olympiadsList.filter((item: any) => {
            return item.title.toLowerCase().includes(searchText)
        });
        if (filteredDataO.length < 1) {
            setNoneO(true)
        }
        const filteredDataN = newsList.filter((item: any) => {
            return item.title.toLowerCase().includes(searchText)
        });
        if (filteredDataN.length < 1) {
            setNoneN(true)
        }
        setOlympiads(filteredDataO)
        setLoadingO(false)
        setNews(filteredDataN)
        setLoadingN(false)
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
                        <span className={styles.title}>Редакция</span>
                    </div>
                </div>
            )
                : (
                    <div className={`${styles.top} df jcsb aic`}>
                        <span className={styles.title}>Редакция</span>
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
                )}
            <section className={styles.section}>
                <div className={styles.blockText}>
                    <span className={styles.titleL}>Олимпиады</span>
                    <Link href='/profile/olympiads'>
                        <div className={styles.all}>
                            <div className={styles.all__text}>Все олимпиады</div>
                            <Image src={ArrowIcon.src} alt='arrow' width={20} height={20} />
                        </div>
                    </Link>
                </div>
                {noneO ? (
                    <>
                        <div className="df jcc aic" style={{ height: '393px' }}>
                            <span style={{ fontSize: '40px' }}>Не найдено олимпиад</span>
                        </div>
                    </>
                ) : (
                    <>
                        {loadingO ? (
                            <>
                                <div className={styles.skeletons}>
                                    {Array(olympiads.length).fill('').map((_, index: number) => (
                                        <div className={styles.skeletonItem} key={index}>
                                            <Skeleton className={styles.skeleton} count={1} />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )
                            :
                            (
                                <>
                                    {!isMobile ?
                                        (
                                            <div className={styles.materials}>
                                                <Materials materialList={olympiads} title={'student'} profile={true} olymp={true} libMode={true} overflow={true} edit={true} />
                                            </div>
                                        )
                                        :
                                        (
                                            <div className={styles.materialMobile}>
                                                {olympiads.slice(0, 4).map((item) =>
                                                    <MaterialCardMobile key={nanoid(6)} material={item} />
                                                )}
                                            </div>
                                        )
                                    }
                                </>
                            )
                        }
                    </>
                )}
            </section>
            <section className={styles.section}>
                <div className={styles.blockText}>
                    <span className={styles.titleN}>Новости</span>
                    {/* <Link href='/profile/olympiads'>
                        <div className={styles.all}>
                            <div className={styles.all__text}>Все новости</div>
                            <Image src={ArrowIcon.src} alt='arrow' width={20} height={20} />
                        </div>
                    </Link> */}
                </div>
                {noneN ? (
                    <>
                        <div className="df jcc aic" style={{ height: '393px' }}>
                            <span style={{ fontSize: '40px' }}>Не найдено новостей</span>
                        </div>
                    </>
                ) : (
                    <div className={styles.news}>
                        {loadingO ? (
                            <>
                                <div className={styles.skeletons}>
                                    {Array(news.length).fill('').map((_, index: number) => (
                                        <div className={styles.skeletonItem} key={index}>
                                            <Skeleton className={styles.skeleton} count={1} />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )
                            :
                            (
                                <>
                                    {news.length > 0 && news.map((item) => (
                                        <div
                                            className={`${styles.item} df fdc jcsb`}
                                            key={nanoid(6)}
                                            style={{ backgroundImage: `url('${ImageNews.src}')` }}
                                        >
                                            <div className={styles.itemTop}>
                                                <p>{item.title}</p>
                                                {/* <span>{formatDate(item.created_at)}</span> */}
                                                <span>{item.created_at}</span>
                                            </div>
                                            <div className={styles.itembottom}>
                                                <Link
                                                    className={`${styles.itembottombtn} df jcc aic cp`}
                                                    href={`/profile/redaction/editNews`}
                                                >
                                                    Редактировать
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                    }
                                </>
                            )
                        }
                    </div>
                )}
            </section>
        </div>
    )
}

export default Redaction;