"use client"

import React, { useEffect, useState, useRef } from 'react';

import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import styles from './index.module.scss'
import Image from 'next/image';

import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { GetNews, setSelectedItem } from '@/store/features/auth-slice';
import { NextPage } from 'next';
import { nanoid } from 'nanoid'

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Link from 'next/link';
import SearchIcon from '../../../../public/materials/Search.svg'
import DownIcon from '../../../../public/materials/down.svg'
import LeftIcon from '../../../../public/materials/left.svg'
import RightIcon from '../../../../public/materials/right.svg'
import Image1 from '../../../../public/materials/test1.svg'
import Image2 from '../../../../public/materials/test2.svg'
import TestImg from './images/testimg1.png'

const News: NextPage = () => {
    const [loading, setLoading] = useState(true);
    const [otherloading, setOtherloading] = useState(false);
    const [leftPage, setLeftPage]: any[] = useState([]);
    const [rightPage, setRightPage]: any[] = useState([]);
    const [currentpage, setCurrentpage] = useState(1);
    const [otherPages, setOtherPages]: any[] = useState([]);
    const [slider, setSlider]: any[] = useState([]);
    const [selected, setSelected]: any = useState();
    const sliderScroll: any = useRef();
    const dispatchNews: any = useDispatch();

    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    const selectedit = useSelector((state: any) => state.auth.selectedItem)

    const SubjectItems: string[] =
        ['ВСОШ', 'Перечневые олимпиады', 'История', 'Русский',
            'Информатика', 'Советы', 'Физика', 'Литература',
            'Обществознание']

    const randomImage = () => Math.ceil(Math.random() * 2) === 1 ? Image1.src : Image2.src

    useEffect(() => {
        localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4LCJhY2NvdW50X3R5cGUiOiJzIiwicm9sZXMiOltdLCJleHAiOjE2OTYzMjg3OTQsImlhdCI6MTY5NTcyMzA5NCwidHlwIjoiYWNjZXNzIiwianRpIjoiODhkNzE2ZGItN2Y3MC00NmIzLTgyOGUtNjAwMTg3NzNmZDMyIn0.JnX0S2g1j54iiF6xMyAgavWNGOTuA2J_ToHdIucV9-M')
        async function getData() {
            const newsdata: any = await dispatch(GetNews(1))
            const truedata: any = newsdata.payload.data.pages.map((item: any) => {
                const obj = { ...item };
                obj.image = randomImage();
                return obj;
            })
            const rightData = [truedata[1]]
            setSlider([...truedata, ...truedata, ...truedata, ...truedata])
            setLeftPage([truedata[0]])
            setRightPage([...rightData, ...rightData, ...rightData, ...rightData])
            setLoading(false)
        }
        getData()
    }, []);

    const formatDate = (inputDate: string) => {
        const months: string[] = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ];
        const date = new Date(inputDate);
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    }

    const getPages = async () => {
        setOtherloading(true)
        setCurrentpage(num => num + 1)
        console.log(currentpage)
        const newsdata: any = await dispatch(GetNews(currentpage))
        console.log(newsdata)
        const data: any = newsdata?.payload?.data?.pages.map((item: any) => {
            const obj = { ...item };
            obj.image = randomImage();
            return obj;
        })
        const truedata = data.slice(0, 2)
        setOtherPages([...otherPages, ...truedata, ...truedata, ...truedata, ...truedata])
        setOtherloading(false)
    }

    const scrollLeft = () => {
        const container: any = sliderScroll.current;
        if (container) container.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const container: any = sliderScroll.current;
        if (container) container.scrollBy({ left: 200, behavior: 'smooth' })
    };

    const handleItemClick = (item: any) => {
        setSelected(item);
        dispatch(setSelectedItem(item))
    };

    return (
        <div className={styles.container}>
            <div className={styles.news}>
                <span className={styles.title}>Новости</span>
                <div className={styles.bar}>
                    <Image src={SearchIcon} alt='Search icon' />
                    {SubjectItems.map((item: string, index: number) => (
                        <div className={styles.item} key={index}>{item}</div>
                    ))}
                </div>
                <div className={styles.mid}>
                    <span className={styles.midtitle}>Популярное</span>
                    <div className={styles.midnews}>
                        <div className={styles.miditems}>
                            {loading ? (
                                <>
                                    <div className={styles.midleft}>
                                        <div className={`${styles.midleftskeleton} h100 w100`}>
                                            <Skeleton count={1} baseColor='rgb(220, 220, 220)' />
                                        </div>
                                    </div>
                                    <div className={styles.midright}>
                                        {Array(4).fill('').map((_, i) => (
                                            <div className={`${styles.midrightskeleton} h100 w100`} key={i}>
                                                <Skeleton count={1} baseColor='rgb(220, 220, 220)' />
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.midleft}>
                                        {leftPage.map((item: any) => (
                                            <div
                                                className={styles.midleftitem}
                                                key={item.id} style={{ backgroundImage: `url('${item.image}')` }}
                                            >
                                                <div className={styles.midlefttop}>
                                                    <p className={styles.midleftitemtitle}>{item.title}</p>
                                                    <span className={styles.midleftitemdate}>{formatDate(item.created_at)}</span>
                                                </div>
                                                <div className={`${styles.midleftbottom} df jcfe aic`}>
                                                    <div className={styles.bookmarkdiv}>
                                                        <BookmarkBorderIcon className={styles.bookmark} />
                                                    </div>
                                                    <Link
                                                        className={`${styles.midleftbtn} df jcc aic cp`}
                                                        onClick={() => handleItemClick(item)}
                                                        href={'/main/news/article'}
                                                    >
                                                        Подробнее
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.midright}>
                                        {rightPage.map((item: any) => (
                                            <div
                                                className={styles.midrightitem} 
                                                key={nanoid(6)} style={{ backgroundImage: `url('${item.image}')` }}
                                            >
                                                <div className={styles.midrighttop}>
                                                    <p className={styles.midrightitemtitle}>{item.title}</p>
                                                    <span className={styles.midrightitemdate}>{formatDate(item.created_at)}</span>
                                                </div>
                                                <div className={`${styles.midrightbottom} df jcfe aic`}>
                                                    <div className={styles.bookmarkdiv}>
                                                        <BookmarkBorderIcon className={styles.bookmark} />
                                                    </div>
                                                    <Link
                                                        className={`${styles.midrightbtn} df jcc aic cp`}
                                                        onClick={() => handleItemClick(item)}
                                                        href={'/main/news/article'}
                                                    >
                                                        Подробнее
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className={styles.midotheritems}>
                            {otherPages.map((item: any) => (
                                <div
                                    className={`${styles.midotheritem} df fdc jcsb`}
                                    key={nanoid(6)}
                                    style={{ backgroundImage: `url('${item.image}')` }}
                                >
                                    <div className={styles.midothertop}>
                                        <p className={styles.midothertitle}>{item.title}</p>
                                        <span className={styles.midotherdate}>{formatDate(item.created_at)}</span>
                                    </div>
                                    <div className={`${styles.midotherbottom} df jcfe aic`}>
                                        <div className={styles.bookmarkdiv}>
                                            <BookmarkBorderIcon className={styles.bookmark} />
                                        </div>
                                        <Link href={'/main/news/article'} className={`${styles.midotherbtn} df jcc aic cp`} onClick={() => handleItemClick(item)}>
                                            Подробнее
                                        </Link>
                                    </div>
                                </div>
                            ))}
                            {otherloading ? (
                                <>
                                    {Array(8).fill('').map((_, i) => (
                                        <div className={styles.midotheritemskeleton} key={i}>
                                            <Skeleton count={1} baseColor='rgb(220, 220, 220)' />
                                        </div>
                                    ))}
                                </>
                            ) : <></>}
                        </div>
                    </div>
                    <div className={`${styles.showmore} df jcc aic`}>
                        <div
                            className={`${styles.showmorebtn} cp df aic`}
                            onClick={getPages}
                        >
                            <span>Показать ещё</span>
                            <Image src={DownIcon} alt='Search icon' />
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottomtitle}>Может быть интересно</div>
                    <div className={styles.sliderdiv}>
                        <Image src={LeftIcon} alt='left icon' onClick={scrollLeft} className='cp' />
                        <div className={styles.slider} ref={sliderScroll}>
                            {loading ? (
                                <>
                                    {Array(8).fill('').map((_, i) => (
                                        <div className={`${styles.slideritemskeleton} df fdc jcsb`} key={i}>
                                            <Skeleton count={1} />
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <>
                                    {slider.map((item: any) => (
                                        <div
                                            className={`${styles.slideritem} df fdc jcsb`}
                                            key={nanoid(6)}
                                            style={{ backgroundImage: `url('${item.image}')` }}
                                        >
                                            <div className={styles.slidertop}>
                                                <p>{item.title}</p>
                                                <span>{formatDate(item.created_at)}</span>
                                            </div>
                                            <div className={styles.sliderbottom}>
                                                <div className={styles.bookmarkdiv}>
                                                    <BookmarkBorderIcon className={styles.bookmark} />
                                                </div>
                                                <Link
                                                    className={`${styles.sliderbottombtn} df jcc aic cp`}
                                                    onClick={() => handleItemClick(item)}
                                                    href={'/main/news/article'}
                                                >
                                                    Подробнее
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                        <Image src={RightIcon} alt='right icon' onClick={scrollRight} className='cp' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;