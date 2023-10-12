"use client"
import React, { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss'
import { ChartComponent } from '@/features/Graph';
import ProgrammerIcon from '../../../../public/materials/Programmer.svg';
import Image from 'next/image';

const Favourites: NextPage = () => {
    const [firstData, setFirstData]: any[] = useState([]);
    const [secondData, setSecondData]: any[] = useState([]);
    const [items, setItems] = useState([{ text: 'Математика', color: 'rgb(53, 121, 248)' }, { text: 'Литература', color: 'rgb(250, 105, 0)' }]);

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
                        <p>Самое время брать и всерос с перечнем и поступать в вуз мечты на бюджет!</p>
                    </div>
                    <Image src={ProgrammerIcon} className={styles.icon} alt='Programmer' />
                </div>
                <div className={`${styles.leftbottom} df fdc`}>
                    <span>Успеваемость</span>
                    <ChartComponent title={items[0].text} graphData={firstData} />
                    <ChartComponent title={items[1].text} graphData={secondData} />
                </div>
            </div>
            <div className={styles.right}>
                <div className={`${styles.rightitem} df fdc`}>
                    <span className={styles.rightitemtitle}>Пройденный материал</span>
                    <span className={styles.rightitemsubtitle}>{items[0].text}</span>
                    {items.map((item: any, index: number) => {
                        return (
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
                        )
                    })}
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
                                    style={{ backgroundColor: item.color, width: `${lastData ? lastData[1] : '0'}%` }}
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

export default Favourites;