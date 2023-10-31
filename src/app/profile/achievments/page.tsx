"use client"
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '../../../../public/materials/Search.svg'
import Image from 'next/image';
import useDebounce from '@/hooks/useDebounce';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useIsMobile from '@/hooks/UseIsMobile';

const AchievmentsRout: NextPage = () => {
    const isMobile = useIsMobile(900)
    const [none, setNone] = useState(false);
    const [itemTeacherData, setItemTeacherData] = useState([]);
    const [itemData, setItemData] = useState([]);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const debouncedsearch = useDebounce(dataSearch, 500)
    const [tag, setTag] = useState('s');

    const item: any = [
        { id: 0, text: 'Московская математическая олимпида', subject: 'Математика', status: 'Призер', points: '230', date: '06.02.2022' },
        { id: 1, text: 'Всесибирская олимпиада школьников', subject: 'Математика', status: 'Участник', points: '29', date: '08.02.2022' },
        { id: 2, text: 'Вузовская олимпиада по информатике', subject: 'Информатика', status: 'Победитель', points: '210', date: '06.02.2022' },
        { id: 3, text: 'Большие вызовы “Региональный этап”', subject: 'Проекты', status: 'Участник', points: '145', date: '16.02.2022' },
        { id: 4, text: 'Московская олимпиада школьников', subject: 'Лингвистика', status: 'Призер', points: '140', date: '12.02.2022' },
        { id: 5, text: 'Вузовская олимпиада по информатике', subject: 'Информатика', status: 'Победитель', points: '32', date: '03.01.2022' },
    ]

    const teacherItem: any = [
        { id: 0, text: 'Иванов Иван И.', name: 'Московская математическая олимпида', item: 'Математика', status: 'Участник', date: '06.02.2022' },
        { id: 1, text: 'Иванов Иван Е.', name: 'Всесибирская олимпиада школьников', item: 'Математика', status: 'Призер', date: '08.02.2022' },
        { id: 2, text: 'Иванов Иван д.', name: 'Вузовская олимпиада по информатике', item: 'Информатика', status: 'Победитель', date: '06.02.2022' },
        { id: 3, text: 'Иванов Иван З.', name: 'Большие вызовы “Региональный этап”', item: 'Проекты', status: 'Участник', date: '16.02.2022' },
        { id: 4, text: 'Иванов Иван у.', name: 'Московская олимпиада школьников', item: 'Лингвистика', status: 'Призер', date: '12.02.2022' },
        { id: 5, text: 'Иванов Иван К.', name: 'Вузовская олимпиада по информатике', item: 'Информатика', status: 'Победитель', date: '03.01.2022' },
    ]


    useEffect(() => {
        tag == 't' ? setItemTeacherData(teacherItem) : setItemData(item)
    }, [])

    const inputHandler = (e: string) => {
        setLoading(true)
        setNone(false)
        setText(e)
        debouncedsearch(e)
    }

    function dataSearch(text: string) {
        if (text === '') {
            if (tag == 't') {
                setItemTeacherData(teacherItem)
                setLoading(false)
                return;
            }
            setItemData(item)
            setLoading(false)
            return;
        }
        const searchText = text.toLowerCase();
        if (tag == 't') {
            const filteredTeacherData = itemTeacherData.filter((item: any) => {
                for (const key in item) {
                    if (Object.prototype.hasOwnProperty.call(item, key) && item[key].toString().toLowerCase().includes(searchText)) {
                        return true;
                    }
                }
                return false;
            });
            if (filteredTeacherData.length < 1) setNone(true)
            setItemTeacherData(filteredTeacherData)
            setLoading(false)
        } else {
            const filteredData = itemData.filter((item: any) => {
                for (const key in item) {
                    if (Object.prototype.hasOwnProperty.call(item, key) && item[key].toString().toLowerCase().includes(searchText)) {
                        return true;
                    }
                }
                return false;
            });
            if (filteredData.length < 1) setNone(true)
            setItemData(filteredData)
            setLoading(false)
        }
    }


    return (
        <div className={styles.wrap}>
            {!isMobile ?
                (<>
                    <div className={`${styles.top} df jcsb aic`}>
                        <span className={styles.title}>{`Результаты${tag == 't' ? ' учеников' : ''}`}</span>
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
                                    placeholder={'Найти...'}
                                    onChange={(e) => inputHandler(e.target.value)}
                                />
                            </div>
                            <div className={`${styles.addbtn} df aic`}>
                                <AddIcon />
                                <span>Добавить</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentmenu}>
                        <div className={`${styles.contenttop} df jcsb aic`}>
                            {tag == 't' ? (
                                <>
                                    <p>Ученик</p>
                                    <p>Название олимпиады</p>
                                    <p>Предмет</p>
                                    <p>Статус</p>
                                    <p>Дата получения</p>
                                    <p className='tac'>Диплом</p>
                                </>
                            ) : (
                                <>
                                    <p>Название олимпиады</p>
                                    <p>Предметы</p>
                                    <p>Статус</p>
                                    <p>Баллы</p>
                                    <p>Дата получения</p>
                                    <p className='tac'>Диплом</p>
                                </>
                            )}
                        </div>
                        {none ? (
                            <>
                                <div className="df jcc aic" style={{ height: '400px' }}>
                                    <span style={{ fontSize: '60px' }}>Ничего не найдено :(</span>
                                </div>
                            </>
                        ) : (
                            <>
                                {loading ? (
                                    <>
                                        {Array(itemData.length).fill('').map((_, index: number) => (
                                            <div className={styles.skeletonitem} key={index}>
                                                <Skeleton count={1} />
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        {tag == 't' ? (
                                            <>
                                                {itemTeacherData?.map((item: any) => (
                                                    <div className={`${styles.contentitem} df jcsb aic`} key={item.id}>
                                                        <div
                                                            className={styles.textwrap}
                                                            style={{ width: '16.6%' }}
                                                        >
                                                            <p style={{ width: '95%' }}>{item.text}</p>
                                                        </div>
                                                        <p>{item.name}</p>
                                                        <p>{item.item}</p>
                                                        <p>{item.status}</p>
                                                        <p>{item.date}</p>
                                                        <DownloadIcon className='cp' style={{ width: '16.6%' }} />
                                                    </div>
                                                ))}
                                            </>
                                        ) : (
                                            <>
                                                {itemData?.map((item: any) => (
                                                    <div className={`${styles.contentitem} df jcsb aic`} key={item.id}>
                                                        <div
                                                            className={styles.textwrap}
                                                            style={{ width: '16.6%' }}
                                                        >
                                                            <p style={{ width: '95%' }}>{item.text}</p>
                                                        </div>
                                                        <p>{item.subject}</p>
                                                        <p>{item.status}</p>
                                                        <p>{item.points}</p>
                                                        <p>{item.date}</p>
                                                        <DownloadIcon className='cp' style={{ width: '16.6%' }} />
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </>)
                : (
                    <>
                        <div className={`${styles.topMobile} df jcsb aic`}>
                            <div className={`${styles.topright} df aic`}>
                                <div className={`${styles.inputbtn} df aic`}>
                                    <input
                                        type="text"
                                        maxLength={80}
                                        value={text}
                                        placeholder={'Найти...'}
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
                            <span className={styles.title}>{`Результаты${tag == 't' ? ' учеников' : ''}`}</span>
                            </div>
                        </div>
                        <div className={styles.mobile}>
                            {none ? (
                                <>
                                    <div className="df jcc aic" style={{ height: '400px' }}>
                                        <span style={{ fontSize: '60px' }}>Ничего не найдено :(</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {tag == 't' ? (
                                        <>
                                            {itemTeacherData?.map((item: any) => (
                                                <div className={styles.block} key={item.id}>
                                                    <h3 className={styles.block__title}>{item.name}</h3>
                                                    <ul className={styles.block__info}>
                                                        <li>
                                                            <h6>Участник</h6>
                                                            <p>{item.text}</p>
                                                        </li>
                                                        <li>
                                                            <h6>Дата получения</h6>
                                                            <p>{item.date}</p>
                                                        </li>
                                                        <li>
                                                            <h6>Предмет</h6>
                                                            <p>{item.item}</p>
                                                        </li>
                                                        <li>
                                                            <h6>Статус</h6>
                                                            <p>{item.status}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            {itemData?.map((item: any) => (
                                                <div className={styles.block} key={item.id}>
                                                    <h3 className={styles.block__title}>{item.text}</h3>
                                                    <ul className={styles.block__info}>
                                                        <li>
                                                            <h6>Дата получения</h6>
                                                            <p>{item.date}</p>
                                                        </li>
                                                        <li>
                                                            <h6>Предмет</h6>
                                                            <p>{item.subject}</p>
                                                        </li>
                                                        <li>
                                                            <h6>Статус</h6>
                                                            <p>{item.status}</p>
                                                        </li>
                                                        <li>
                                                            <h6>Баллы</h6>
                                                            <p>{item.points}</p>
                                                        </li>
                                                        <li>
                                                            <h6>Диплом</h6>
                                                            <p>
                                                                <DownloadIcon className='cp' style={{width: '14px', height: '17px'}} />
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </>
                )}
        </div>
    )
}

export default AchievmentsRout;