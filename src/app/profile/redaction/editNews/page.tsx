"use client"
import React, { useState, useRef, useEffect } from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { nanoid } from 'nanoid';
import Link from 'next/link';
import Image from 'next/image';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import UploadIcon from '@mui/icons-material/Upload';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Image3 from '../../../../../public/materials/test3.svg';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '@/store/store';
import { AnyAction } from 'redux';
import { GetUser } from '@/store/features/auth-slice';

const newsStatic = {
    title: 'Скандал за ЗЭ ВсоШ по истории',
    tags: [
        {
            title: 'ВСОШ',
            id: 1211233435,
        },
        {
            title: 'История',
            id: 1231933435,
        },
        {
            title: 'Казань2022',
            id: 1231833435,
        },
    ],
    image: {},
}

const EditNews: NextPage = () => {
    const [news, setNews] = useState(newsStatic)
    const modalRef = useRef(null)
    const [title, setTitle] = useState<string>(newsStatic.title)
    const [tags, setTags] = useState<{ title: string, id: number }[]>(newsStatic.tags)
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [hover, setHover] = useState<Boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [addTagValue, setAddTagValue] = useState<string>('')
    const [mode, setMode] = useState<boolean>(false)
    const [isDisabled, setIsDisabled] = useState(true);
    const formRef = useRef(null)
    const [userdata, setUserdata] = useState<any>({});
    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
    const [comment, setComment] = useState('');
    const [tagHover, setTagHover] = useState<number>(0)

    const commentHandler = (e: string) => {
        if (e.length == 0) setIsDisabled(true)
        if (e.length > 0) setIsDisabled(false)
        setComment(e);
    }

    const deleteTag = (index) => {
        const array = [...tags]
        array.splice(index, 1)
        setTags(array)
    }


    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4LCJhY2NvdW50X3R5cGUiOiJzIiwicm9sZXMiOltdLCJleHAiOjE2OTc4Mzc5MzcsImlhdCI6MTY5NzIzMjIzNywidHlwIjoiYWNjZXNzIiwianRpIjoiOTg1NzRhNDgtYTAwZi00YmQxLTg3ZWQtMzQyODBjZmRmNDFiIn0.cpIWbbHgzEJgx_Iohx6rxToufvQgPqTHqDGYyr7vLZc')
        async function getUserData() {
            const data = await dispatch(GetUser())
            setUserdata(data.payload.data)
        }
        getUserData()
    }, []);

    const formatDate = (inputDate) => {
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

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Новый материал</h1>
                <div className={styles.blocks}>
                    <div className={styles.mainBlock}>
                        <div className={styles.leftBlock}>
                            <article className={styles.blocks__title}>
                                <h2 onClick={() => console.log(addTagValue)} className={styles.name}>Название новости</h2>
                                <textarea
                                    className={styles.input}
                                    placeholder='Введите название'
                                    rows={1}
                                    maxLength={100}
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </article>
                            <article className={styles.blocks__tags}>
                                <h2 className={styles.name}>Теги</h2>
                                <div className={styles.tags}>
                                    {tags &&
                                        tags.map((item, index) =>
                                            <div onMouseEnter={() => setTagHover(item.id)} onMouseLeave={() => setTagHover(0)} className={styles.tag}>
                                                <div key={item.id} className={styles.tagText}>{item.title}</div>
                                                <div>
                                                    {tagHover === item.id &&
                                                        <div onClick={() => deleteTag(index)} className={styles.tagHover}>Удалить</div>
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                    {tags.length < 15 && <input
                                        onKeyDown={(event) => {
                                            if ((event.key === 'Enter') && addTagValue) {
                                                setTags([...tags, { title: addTagValue, id: Math.random() }])
                                                setAddTagValue('')
                                            }
                                        }}
                                        value={addTagValue}
                                        placeholder='+ Добавить'
                                        onChange={(e) => setAddTagValue(e.target.value)}
                                        className={styles.addTag}
                                    />}
                                </div>
                            </article>
                        </div>
                        <div className={styles.rightBlock}>
                            <form ref={formRef} id='rightBlockForm' onSubmit={(e) => { e.preventDefault }}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={handleImageChange}
                                    ref={fileInputRef}
                                />
                                <div
                                    onClick={handleImageClick}
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                    className={hover ? styles.imageContainer : selectedImage ? styles.imageContainer_S : styles.imageContainer}
                                >
                                    <img
                                        src={hover ? '' : (selectedImage || '')}
                                        style={{ display: `${hover ? 'none' : selectedImage ? 'block' : 'none'}` }}
                                        alt={'image'}
                                        className={styles.image}
                                    />
                                    <p style={{ display: `${!selectedImage ? 'block' : hover ? 'block' : 'none'}` }}>Нажмите, чтобы добавить обложку</p>
                                </div>
                                <div className={styles.under}>
                                    <button type='button' className={styles.publish}>Опубликовать</button>
                                    <div onClick={() => setMode(true)} className={styles.eye}>
                                        <RemoveRedEyeIcon className={styles.icon} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {mode &&
                <div
                    className={styles.screen}
                    ref={modalRef}
                // onClick={(event) => handleClickOutSide(event)}
                >
                    <div className={styles.article}>
                        <div className={styles.articleContainer}>
                            <div className='df jcfe aic'>
                                <div onClick={() => setMode(false)}>
                                    <CloseIcon className={styles.close} />
                                </div>
                            </div>
                            <div className={styles.title}>
                                <p className={styles.titletext}>{title}</p>
                                <span className={styles.date}>{formatDate(Date.now())}</span>
                            </div>
                            <div className={`${styles.tags} df aic fww`}>
                                {tags.map((item, index: number) => (
                                    <div className={`${styles.tagsbtn} df jcc aic cp`} key={index}>
                                        {item.title}
                                    </div>))
                                }
                            </div>
                            <div className={`${styles.subtitle} df jcsb aic`}>
                                <div className={`${styles.subtitleleft} df aic jcc`}>
                                    <span>{`Автор: ${userdata?.author?.first_name} ${userdata?.author?.second_name}`}</span>
                                </div>
                                <div className={`${styles.subtitleright} df aic jcc`}>
                                    <div className={`${styles.subtitlecomments} df aic`}>
                                        <ModeCommentOutlinedIcon className={styles.comment} />
                                        <span style={{ marginLeft: '3px', marginBottom: '2px' }}>10</span>
                                    </div>
                                    <BookmarkBorderIcon className={styles.bookmark} />
                                    <UploadIcon className={styles.upload} />
                                </div>
                            </div>
                            <div className={styles.image}>
                                <Image src={Image3} alt='some image' />
                            </div>
                            <div className={styles.texts}>
                                <div className={styles.text} key={nanoid(6)}>
                                    {/* <p>{`${item.text} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, molestiae sit. Sed, quae. Sunt ipsam doloribus sapiente rerum laboriosam aspernatur maxime nihil enim ipsa iste temporibus qui, vitae quos vero.`}</p> */}
                                    Какой то текст
                                </div>
                            </div>
                            <div className={`${styles.subtitle} df jcsb aic`}>
                                <div className={`${styles.subtitleleft} df aic jcc`}>
                                    <BookmarkBorderIcon className={styles.bookmark} />
                                    <UploadIcon className={styles.upload} />
                                </div>
                                <div className={`${styles.subtitleright} df aic jcc`}>
                                    <span>0 просмотров</span>
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <span className={styles.commentscount}>{`Комментарии (10)`}</span>
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
                </div>
            }
        </>
    )
}

export default EditNews;