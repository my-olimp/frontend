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

const AchievmentsRout: NextPage = () => {
    const [none, setNone] = useState(false);
    const [itemData, setItemData] = useState([]);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const debouncedsearch = useDebounce(dataSearch, 500)

    const item: any = [
        { id: 0, text: 'Московская математическая олимпида', subject: 'Математика', status: 'Призер', points: '230', date: '06.02.2022' },
        { id: 1, text: 'Всесибирская олимпиада школьников', subject: 'Математика', status: 'Участник', points: '29', date: '08.02.2022' },
        { id: 2, text: 'Вузовская олимпиада по информатике', subject: 'Информатика', status: 'Победитель', points: '210', date: '06.02.2022' },
        { id: 3, text: 'Большие вызовы “Региональный этап”', subject: 'Проекты', status: 'Участник', points: '145', date: '16.02.2022' },
        { id: 4, text: 'Московская олимпиада школьников', subject: 'Лингвистика', status: 'Призер', points: '140', date: '12.02.2022' },
        { id: 5, text: 'Вузовская олимпиада по информатике', subject: 'Информатика', status: 'Победитель', points: '32', date: '03.01.2022' },
    ]

    useEffect(() => {
        setItemData(item)
    }, [])

    const inputHandler = (e: string) => {
        setLoading(true)
        setNone(false)
        setText(e)
        debouncedsearch(e)
    }

    function dataSearch(text: string) {
        if (text === '') {
            setItemData(item)
            setLoading(false)
            return;
        }
        const searchText = text.toLowerCase();
        const filteredData = itemData.filter((item: any) => {
            for (const key in item) {
                if (item.hasOwnProperty(key) && item[key].toString().toLowerCase().includes(searchText)) {
                    return true;
                }
            }
            return false;
        });
        if (filteredData.length < 1) setNone(true)
        setItemData(filteredData)
        setLoading(false)
    }

    return (
        <div className={styles.wrap}>
            <div className={`${styles.top} df jcsb aic`}>
                <span className={styles.title}>Результаты</span>
                <div className={`${styles.topright} df aic`}>
                    <div className={`${styles.btns} df aic`}>
                        <div className={`${styles.sort} df aic jcc`}>
                            <FormatListBulletedIcon />
                            <span>Сортировка</span>
                        </div>
                        <div className={`${styles.inputbtn} df aic`}>
                            <Image src={SearchIcon} alt='Search Icon' />
                            <input
                                type="text"
                                maxLength={30}
                                value={text}
                                onChange={(e) => inputHandler(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={`${styles.addbtn} df aic`}>
                        <AddIcon />
                        <span>Добавить</span>
                    </div>
                </div>
            </div>
            <div className={styles.contentmenu}>
                <div className={`${styles.contenttop} df jcsb aic`}>
                    <p>Название олимпиады</p>
                    <p>Предметы</p>
                    <p>Статус</p>
                    <p>Баллы</p>
                    <p>Дата получения</p>
                    <p className='tac'>Диплом</p>
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
                                        <Skeleton count={1}/>
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
            </div>
        </div>
    )
}

export default AchievmentsRout;