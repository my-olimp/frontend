"use client"
import React, { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss'
import { ChartComponent } from '@/features/Graph';
import ProgrammerIcon from '../../../../public/materials/Programmer.svg';
import RotatedIcon from '../../../../public/materials/RotatedIcon.svg';
import Image from 'next/image';

const Grade: NextPage = () => {

    const tag = 'teacher'

    const [firstData, setFirstData]: any[] = useState([]);
    const [secondData, setSecondData]: any[] = useState([]);
    const [items, setItems] = useState([{ text: 'Математика', color: 'rgb(53, 121, 248)' }, { text: 'Литература', color: 'rgb(250, 105, 0)' }]);


    const data = [
        { id: 0, icon: RotatedIcon.src, text: 'Подготовка в ВСОШ 9 КЛАСС', members: '23' },
        { id: 1, icon: RotatedIcon.src, text: 'Высшая проба 11 класс', members: '6' },
        { id: 2, icon: RotatedIcon.src, text: 'Олимпиадная математика', members: '76' },
    ]

    function convertToRGBA(rgb: string) {
        const values = rgb.match(/\d+/g);
        if (values && values.length === 3) {
            const [r, g, b] = values;
            return `rgba(${r}, ${g}, ${b}, 0.3`;
        } else {
            return rgb;
        }
    }

    useEffect(() => {
        function generateData() {
            const data: any[] = [];
            const currentDate = new Date();
            const endDate = new Date(currentDate.getFullYear(), 9, 12);
            for (let i = 0; i < 12; i++) {
                const date = new Date(endDate);
                date.setDate(endDate.getDate() - i);
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const formattedDate = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}`;
                const value = Math.floor(Math.random() * 101);
                data.push([formattedDate, value]);
            }
            return data.reverse()
        }
        setFirstData(generateData())
        setSecondData(generateData())
    }, [])

    const lastData: any[] = [...firstData]?.pop()

    return (
        <div className={`${styles.wrap} df jcsb`}>
            <div className={`${styles.left} df fdc`}>
                <div className={`${styles.lefttop} df fdc`}>
                    <div className={styles.lefttoptext}>
                        <span>Здравствуйте, Иван!</span>
                        {tag !== 'teacher'
                            ? <p>Самое время брать и всерос с перечнем и поступать в вуз мечты на бюджет!</p>
                            : <p>Самое время помочь ученикам брать всерос и перечневые олимпиады.
                                Ознакомьтесь со статистикой.</p>
                        }
                    </div>
                    <Image src={ProgrammerIcon} className={styles.icon} alt='Programmer' />
                </div>
                <div className={`${styles.leftbottom} df fdc`}>
                    <ChartComponent title={items[0].text} graphData={firstData} />
                    <ChartComponent title={items[1].text} graphData={secondData} />
                </div>
            </div>
            <div className={`${styles.right} df fdc`} style={{gap: '20px'}}>
                <div className={`${styles.groups} df fdc`}>
                    <div className={`${styles.groupstop} df jcsb aic`}>
                        <span style={{ fontSize: '25px', fontWeight: '600' }}>Группы</span>
                        <div className={`${styles.groupstopbtn} dib cp cw`}>Добавить</div>
                    </div>
                    {data.map((item: any) => (
                        <div className={`${styles.groupitem} df aic`} key={item.id}>
                            <div className={`${styles.groupicon} df jcc aic`}>
                                <Image src={item.icon} alt='rotated icon' width={52} height={52} />
                            </div>
                            <div className='df fdc' style={{gap: '3px', marginLeft: '10px'}}>
                                <p style={{fontSize: '22px', fontWeight: '600'}}>{item.text}</p>
                                <span style={{ color: '#757575' }}>{`${item.members} участника`}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`${styles.rightitem} df fdc`}>
                    <span className={styles.rightitemtitle}>Пройденный материал</span>
                    <span className={styles.rightitemsubtitle}>{items[0].text}</span>
                    {items.map((item: any, index: number) => (
                        <div key={index} className={styles.item}>
                            <div className={`${styles.itemtop} df jcsb aic`}>
                                <span>{item.text}</span>
                                <span style={{ color: item.color }}>{`${lastData ? lastData[1] : ''}%`}</span>
                            </div>
                            <div
                                className={`${styles.progressbar} w100`}
                                style={{ backgroundColor: `${convertToRGBA(item.color)}` }}
                            >
                                <div
                                    className={`${styles.progressview} h100`}
                                    style={{ backgroundColor: item.color, width: `${lastData ? lastData[1] : '0'}%` }}
                                >
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`${styles.rightitem} df fdc`}>
                    <span className={styles.rightitemtitle}>Пройденный материал</span>
                    <span className={styles.rightitemsubtitle}>{items[1].text}</span>
                    {items.map((item: any, index: number) => (
                        <div key={index} className={styles.item}>
                            <div className={`${styles.itemtop} df jcsb aic`}>
                                <span>{item.text}</span>
                                <span style={{ color: item.color }}>{`${lastData ? lastData[1] : ''}%`}</span>
                            </div>
                            <div
                                className={`${styles.progressbar} w100`}
                                style={{ backgroundColor: `${convertToRGBA(item.color)}` }}
                            >
                                <div
                                    className={`${styles.progressview} h100`}
                                    style={{ transition: 'all 2.5s ease', backgroundColor: item.color, width: `${lastData ? lastData[1] : '0'}%` }}
                                >
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Grade;