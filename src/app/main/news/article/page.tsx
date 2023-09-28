"use client"

import React, { useState, useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';

import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { GetArticle } from '@/store/features/auth-slice';
import { nanoid } from 'nanoid';

import Skeleton from 'react-loading-skeleton';
import styles from './index.module.scss'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import UploadIcon from '@mui/icons-material/Upload';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';
import Image3 from '../../../../../public/materials/test3.svg';

const Article: NextPage = () => {
    const [loading, setLoading] = useState(true);
    const [article, setArticle]: any[] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true);
    const [comment, setComment] = useState('');
    const selecteditem = useSelector((state: any) => state.auth.selectedItem) || JSON.parse(localStorage.getItem('selectedItem') || '');

    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    const comments = 12;
    useEffect(() => {
        // Проверяем доступность localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('selectedItem', JSON.stringify(selecteditem));
        }

        async function getData() {
            const newsdata: any = await dispatch(GetArticle(selecteditem.id));
            setArticle(newsdata.payload.data);
            setLoading(false);
        }
        getData();
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

    const commentHandler = (e: string) => {
        if (e.length == 0) setIsDisabled(true)
        if (e.length > 0) setIsDisabled(false)
        setComment(e);
    }

    const getRandomWidth = () => Math.ceil(Math.random() * 100)

    return (
        <div className={styles.article}>
            <div className={styles.container}>
                <div className='df jcfe aic'>
                    <Link href={'/main/news'}>
                        <CloseIcon className={styles.close} />
                    </Link>
                </div>
                <div className={styles.title}>
                    <p className={styles.titletext}>{selecteditem.title}</p>
                    <span className={styles.date}>{formatDate(selecteditem.created_at)}</span>
                </div>
                <div className={`${styles.tags} df aic fww`}>
                    {selecteditem.tags.map((item: string, index: number) =>
                        <div className={`${styles.tagsbtn} df jcc aic cp`} key={index}>
                            {item}
                        </div>)
                    }
                </div>
                <div className={`${styles.subtitle} df jcsb aic`}>
                    <div className={`${styles.subtitleleft} df aic jcc`}>
                        <span>{`Автор: ${selecteditem.author.first_name} ${selecteditem.author.second_name}`}</span>
                    </div>
                    <div className={`${styles.subtitleright} df aic jcc`}>
                        <div className={`${styles.subtitlecomments} df aic`}>
                            <ModeCommentOutlinedIcon className={styles.comment} />
                            <span style={{ marginLeft: '3px', marginBottom: '2px' }}>{comments}</span>
                        </div>
                        <BookmarkBorderIcon className={styles.bookmark} />
                        <UploadIcon className={styles.upload} />
                    </div>
                </div>
                <div className={styles.image}>
                    <Image src={Image3} alt='some image' />
                </div>
                <div className={styles.texts}>
                    {loading ? (
                        <>
                            {Array(3).fill('').map((_, i) => (
                                <div className={styles.textblockskeleton} key={i} style={{marginBottom: '30px'}}>
                                    {Array(4).fill('').map((_, i) => <Skeleton style={{ width: '100%' }} key={i} />)}
                                    <Skeleton style={{ width: `${getRandomWidth()}%` }} />
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            {article?.blocks?.map((item: any) => (
                                <div className={styles.text} key={nanoid(6)}>
                                    <p>{`${item.text} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, molestiae sit. Sed, quae. Sunt ipsam doloribus sapiente rerum laboriosam aspernatur maxime nihil enim ipsa iste temporibus qui, vitae quos vero.`}</p>
                                </div>
                            ))}
                        </>
                    )}
                </div>
                <div className={`${styles.subtitle} df jcsb aic`}>
                    <div className={`${styles.subtitleleft} df aic jcc`}>
                        <BookmarkBorderIcon className={styles.bookmark} />
                        <UploadIcon className={styles.upload} />
                    </div>
                    <div className={`${styles.subtitleright} df aic jcc`}>
                        {loading ? <Skeleton count={1} style={{ height: '100%', width: '140px', borderRadius: '10px' }} /> : <span>{`${article.views} просмотров`}</span>}
                    </div>
                </div>
                <div className={styles.bottom}>
                    <span className={styles.commentscount}>{`Комментарии (${comments})`}</span>
                    <div className={styles.commentdiv}>
                        <div className={styles.commenttop}>
                            <div className={`${styles.user} df aic`}>
                                <div className={styles.useravatar}></div>
                                <span className={styles.username}>Иван Иванов</span>
                            </div>
                            <input
                                type="text" maxLength={200}
                                placeholder='Написать комментарий...'
                                value={comment}
                                onChange={e => commentHandler(e.target.value)}
                            />
                        </div>
                        <div className={`${styles.commentbottom} w100 df jcfe aic`}>
                            <button
                                className={`${styles.btn} df aic jcc`}
                                disabled={isDisabled}
                            >
                                Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;