"use client"
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss'
import { ChartComponent } from '@/features/Graph';
import ProgrammerIcon from '../../../../public/materials/Programmer.svg';
import RotatedIcon from '../../../../public/materials/RotatedIcon.svg';
import ArrowIcon from '../../../../public/arrows/arrow-right.svg';
import AddIcon from '../../../../public/profile/addButton.svg';
import Image from 'next/image';
import Link from 'next/link';
import dayjs, { Dayjs } from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers';

const Grade: NextPage = () => {

    const tag = 'teacher'

    const [firstData, setFirstData]: any[] = useState([]);
    const [secondData, setSecondData]: any[] = useState([]);
    const [dateStart1, setDateStart1] = useState<Dayjs>(dayjs(Date.now()).add(-7, "days"));
    const [dateEnd1, setDateEnd1] = useState<Dayjs>(dayjs(Date.now()));
    const [dateStart2, setDateStart2] = useState<Dayjs>(dayjs(Date.now()).add(-7, "days"));
    const [dateEnd2, setDateEnd2] = useState<Dayjs>(dayjs(Date.now()));
    const [firstDataMobile, setFirstDataMobile]: any[] = useState([]);
    const [secondDataMobile, setSecondDataMobile]: any[] = useState([]);
    const [items, setItems] = useState([{ text: 'Математика', color: 'rgb(53, 121, 248)' }, { text: 'Литература', color: 'rgb(250, 105, 0)' }]);


    const data = [
        { id: 0, icon: RotatedIcon.src, text: 'Подготовка в ВСОШ 9 КЛАСС', members: '23' },
        { id: 1, icon: RotatedIcon.src, text: 'Высшая проба 11 класс', members: '6' },
        { id: 3, icon: RotatedIcon.src, text: 'Олимпиадная математика', members: '76' },
        { id: 4, icon: RotatedIcon.src, text: 'Подготовка в ВСОШ 9 КЛАСС', members: '23' },
        { id: 5, icon: RotatedIcon.src, text: 'Высшая проба 11 класс', members: '6' },
        { id: 6, icon: RotatedIcon.src, text: 'Олимпиадная математика', members: '76' },
        { id: 7, icon: RotatedIcon.src, text: 'Подготовка в ВСОШ 9 КЛАСС', members: '23' },
        { id: 8, icon: RotatedIcon.src, text: 'Высшая проба 11 класс', members: '6' },
        { id: 9, icon: RotatedIcon.src, text: 'Олимпиадная математика', members: '76' },
        { id: 10, icon: RotatedIcon.src, text: 'Подготовка в ВСОШ 9 КЛАСС', members: '23' },
        { id: 11, icon: RotatedIcon.src, text: 'Высшая проба 11 класс', members: '6' },
        { id: 12, icon: RotatedIcon.src, text: 'Олимпиадная математика', members: '76' },
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
            console.log(data.reverse())
            return data
        }
        setFirstData(generateData())
        setSecondData(generateData())
        setDates1([dateStart1, dateEnd1])
        setDates2([dateStart2, dateEnd2])
    }, [])


    function setDates1([dateStart1, dateEnd1]) {
        const data: any[] = [];
        for (let i = 0; i <= (dayjs(dateEnd1).diff(dayjs(dateStart1), 'days')); i++) {
            const value = Math.floor(Math.random() * 101);
            data.push([dayjs(dateStart1).add(dayjs(dateEnd1).diff(dayjs(dateStart1), 'days') - i, "days").format('DD.MM.YYYY'), value])
        }
        setFirstDataMobile(data.reverse())
    }
    function setDates2([dateStart2, dateEnd2]) {
        const data: any[] = [];
        for (let i = 0; i <= (dayjs(dateEnd2).diff(dayjs(dateStart2), 'days')); i++) {
            const value = Math.floor(Math.random() * 101);
            data.push([dayjs(dateStart2).add(dayjs(dateEnd2).diff(dayjs(dateStart2), 'days') - i, "days").format('DD.MM.YYYY'), value])
        }
        setFirstDataMobile(data.reverse())
        setSecondDataMobile(data.reverse())
    }

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
                {document.documentElement.clientWidth <= 1400 ?
                    (<div className={`${styles.groups} df fdc`}>
                        <div className={`${styles.groupstop} df jcsb aic`}>
                            <span>Группы</span>
                            <div className={`${styles.groupstopbtn} dib cp cw`}>Добавить</div>
                            <Link href='/main'>
                                <div className={styles.all}>
                                    <div className={styles.all__text}>Все</div>
                                    <Image src={ArrowIcon.src} alt='arrow' width={20} height={20} />
                                </div>
                            </Link>
                        </div>
                        {document.documentElement.clientWidth <= 700 ?
                            (
                                <div className={styles.groupsMobile}>
                                    <div>
                                        {data.slice(0, 3).map((item: any) => (
                                            <div className={`${styles.groupitem} df aic`} key={item.id}>
                                                <div className={styles.block}>
                                                    <div className={`${styles.groupicon} df jcc aic`}>
                                                        <Image src={item.icon} alt='rotated icon' width={52} height={52} />
                                                    </div>
                                                    <div className={`${styles.grouptext} df fdc`}>
                                                        <p>{item.text}</p>
                                                        <span>{`${item.members} участника`}</span>
                                                    </div>
                                                </div>
                                                <div className={styles.addIcon}>
                                                    <Image src={AddIcon.src} alt='add' width={50} height={50} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                            :
                            ((<div className={styles.groupsTablet}>
                                <div className={styles.groups1Column}>
                                    {data.slice(0, 3).map((item: any) => (
                                        <div className={`${styles.groupitem} df aic`} key={item.id}>
                                            <div className={styles.block}>
                                                <div className={`${styles.groupicon} df jcc aic`}>
                                                    <Image src={item.icon} alt='rotated icon' width={52} height={52} />
                                                </div>
                                                <div className={`${styles.grouptext} df fdc`}>
                                                    <p>{item.text}</p>
                                                    <span>{`${item.members} участника`}</span>
                                                </div>
                                            </div>
                                            <div className={styles.addIcon}>
                                                <Image src={AddIcon.src} alt='add' width={50} height={50} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.groups2Column}>
                                    {data.slice(3, 6).map((item: any) => (
                                        <div className={`${styles.groupitem} df aic`} key={item.id}>
                                            <div className={styles.block}>
                                                <div className={`${styles.groupicon} df jcc aic`}>
                                                    <Image src={item.icon} alt='rotated icon' width={52} height={52} />
                                                </div>
                                                <div className={`${styles.grouptext} df fdc`}>
                                                    <p>{item.text}</p>
                                                    <span>{`${item.members} участника`}</span>
                                                </div>
                                            </div>
                                            <div className={styles.addIcon}>
                                                <Image src={AddIcon.src} alt='add' width={50} height={50} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>))}
                    </div>)
                    : ""}
                <div className={`${styles.leftbottom} df fdc`}>
                    {document.documentElement.clientWidth <= 900 ? (
                        <>
                            <div className={styles.title}>Успеваемость</div>
                            <div className={styles.charts}>
                                <div className={styles.chartMobile}>
                                    <div className={styles.period}>
                                        <span>Период с </span>
                                        <MobileDatePicker
                                            onChange={(newDate) => {setDateStart1(dayjs(newDate as Dayjs)); setDates1([newDate, dateEnd1])}}
                                            className={styles.calendar}
                                            format={'DD.MM.YYYY'}
                                            value={dateStart1}
                                        />
                                        <span> по </span>
                                        <MobileDatePicker
                                            onChange={(newDate) => {setDateEnd1(dayjs(newDate as Dayjs)); setDates1([dateStart1, newDate])}}
                                            className={styles.calendar}
                                            format={'DD.MM.YYYY'}
                                            value={dateEnd1}
                                        />
                                    </div>
                                    <ChartComponent title={items[0].text} graphData={firstDataMobile} />
                                </div>
                                <div className={styles.chartMobile}>
                                    <div className={styles.period}>
                                        <span>Период с </span>
                                        <MobileDatePicker
                                            onChange={(newDate) => {setDateStart2(dayjs(newDate as Dayjs)); setDates2([newDate, dateEnd2])}}
                                            className={styles.calendar}
                                            format={'DD.MM.YYYY'}
                                            value={dateStart2}
                                        />
                                        <span> по </span>
                                        <MobileDatePicker
                                            onChange={(newDate) => {setDateEnd2(dayjs(newDate as Dayjs)); setDates2([dateStart1, newDate])}}
                                            className={styles.calendar}
                                            format={'DD.MM.YYYY'}
                                            value={dateEnd2}
                                        />
                                    </div>
                                    <ChartComponent title={items[1].text} graphData={secondDataMobile} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <ChartComponent title={items[0].text} graphData={firstData} />
                            <ChartComponent title={items[1].text} graphData={secondData} />
                        </>
                    )}
                </div>
                {document.documentElement.clientWidth <= 1400 ?
                    (<div className={styles.rightitems}>
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
                    </div>)
                    : ""}
            </div>
            {document.documentElement.clientWidth > 1400 ?
                (
                    <div className={`${styles.right} df fdc`} style={{ gap: '20px' }}>
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
                                    <div className='df fdc' style={{ gap: '3px', marginLeft: '10px' }}>
                                        <p style={{ fontSize: '22px', fontWeight: '600' }}>{item.text}</p>
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
                )
                : ''}
        </div>
    )
}

export default Grade;