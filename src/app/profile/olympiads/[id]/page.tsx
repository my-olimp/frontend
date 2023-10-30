"use client"
import React, { useState, useEffect, useRef } from 'react';
import { NextPage } from 'next';

import MainImage from '../../../../../public/profile/mainImage.webp';
import ArrowIcon from '../../../../../public/arrows/arrow-right.svg';
import Org1 from '../../../../../public/profile/organizers/org1.png';
import Org2 from '../../../../../public/profile/organizers/org2.png';
import Org3 from '../../../../../public/profile/organizers/org3.png';
import Org4 from '../../../../../public/profile/organizers/org4.png';
import Org5 from '../../../../../public/profile/organizers/org5.png';
import Dis1 from '../../../../../public/profile/disciplines/Philosophy.svg';
import Dis2 from '../../../../../public/profile/disciplines/Psychology.svg';
import Dis3 from '../../../../../public/profile/disciplines/Geography.svg';
import Dis4 from '../../../../../public/profile/disciplines/Mathematics.svg';

import styles from './index.module.scss'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Discipline } from '@/entities/Discipline';
import { LoadingResults } from '@/widgets/LoadingResults';
import { Footer } from '@/widgets/Footer';
import useIsMobile from '@/hooks/UseIsMobile';

const Olympiad: NextPage = () => {
    const isTablet = useIsMobile(900)
    const isMobile = useIsMobile(460)
    const [openResults, setOpenResults] = useState<boolean>(false)
    // const params = useSearchParams()
    // const id = Number(params.get('id'))

    // useEffect(() => {
    //     async function getData() {

    //     }
    //     getData();
    // }, []);

    const [state, setState] = useState({
        isScrolling: false,
        clientX: 0,
        scrollX: 0,
    });
    const ref = useRef<any>(null); // <тип> важно ставить только если стартовое значение = null

    // Скролл на колесико
    useEffect(() => {
        const element = ref.current;
        if (element) {
            const onWheel = (e: any) => {
                e.preventDefault();
                element.scrollTo({
                    left: element.scrollLeft + e.deltaY * 4,
                    behavior: 'smooth',
                });
            };
            element.addEventListener('wheel', onWheel);

            return () => element.removeEventListener('wheel', onWheel);
        }
    }, []);

    // Скролл по нажатию
    const onMouseMove = (event: any) => {
        if (ref && ref.current && !ref.current.contains(event.target)) {
            return;
        }
        event.preventDefault();

        const { isScrolling, clientX, scrollX } = state;

        if (isScrolling) {
            ref.current.scrollLeft = scrollX + event.clientX - clientX;
            const sX = scrollX + event.clientX - clientX;
            const cX = event.clientX;
            setState({
                ...state,
                scrollX: sX,
                clientX: cX,
            });
        }
    };

    const onMouseUp = (event: any) => {
        if (ref && ref.current && !ref.current.contains(event.target)) {
            return;
        }
        event.preventDefault();
        setState({
            ...state,
            isScrolling: false,
        });
    };

    const onMouseDown = (event: any) => {
        if (ref && ref.current && !ref.current.contains(event.target)) {
            return;
        }
        event.preventDefault();

        setState({
            ...state,
            isScrolling: true,
            clientX: event.clientX,
        });
    };

    useEffect(() => {
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        };
    });


    return (
        <>
            <div className={styles.container}>
                <section className={styles.mainSection}>
                    <div className={styles.blockText}>
                        <h1 className={styles.title}>Высшая проба</h1>
                        <p className={styles.text}>Всероссийская предметная олимпиада школьников, проводимая Высшей школой экономики на базе самого университета, других вузов и школ России и ближнего зарубежья. В 2019-2020 учебных годах олимпиада проводится по 25 профилям.</p>
                    </div>
                    <div className={styles.image} >
                        <img src={MainImage.src} alt='image' />
                    </div>
                </section>
                <section className={styles.organizers}>
                    <div className={styles.blockText}>
                        <h2 className={styles.title}>Организаторы</h2>
                        {/* <Link href='/main'>
                            <div className={styles.all}>
                                <div className={styles.all__text}>Все организаторы</div>
                                <Image src={ArrowIcon.src} alt='arrow' width={20} height={20} />
                            </div>
                        </Link> */}
                    </div>
                    <div className={styles.blockOrganizers}>
                        <ul>
                            <li>
                                <Image src={Org1.src} alt='organizer' width={isTablet ? 106 : isMobile ? 80 : 224} height={isTablet ? 106 : isMobile ? 80 : 222} />
                                <div className={styles.text}>Национально-исследовательский университет “Высшая школа экономики”</div>
                            </li>
                            <li>
                                <Image src={Org2.src} alt='organizer' width={isTablet ? 106 : isMobile ? 80 : 224} height={isTablet ? 106 : isMobile ? 80 : 222} />
                                <div className={styles.text}>Пензенский государственный университет </div>
                            </li>
                            <li>
                                <Image src={Org3.src} alt='organizer' width={isTablet ? 106 : isMobile ? 80 : 224} height={isTablet ? 106 : isMobile ? 80 : 222} />
                                <div className={styles.text}>Уральский федеральный университет</div>
                            </li>
                            <li>
                                <Image src={Org4.src} alt='organizer' width={isTablet ? 106 : isMobile ? 80 : 224} height={isTablet ? 106 : isMobile ? 80 : 222} />
                                <div className={styles.text}>Дальневосточный федеральный университет</div>
                            </li>
                            <li>
                                <Image src={Org5.src} alt='organizer' width={isTablet ? 106 : isMobile ? 80 : 224} height={isTablet ? 106 : isMobile ? 80 : 222} />
                                <div className={styles.text}>Российский университет дружбы народов</div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={styles.schedule}>
                    <div className={styles.blockText}>
                        <h2 className={styles.title}>Расписание и этапы</h2>
                    </div>
                    <div className={styles.blockSchedule}>
                        <ul>
                            <li>
                                <div className={styles.blueCircle}></div>
                                <div className={styles.text}>
                                    <h4>Регистрация</h4>
                                    <p>октябрь - ноябрь 2023</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.blueCircle}></div>
                                <div className={styles.text}>
                                    <h4>Отборочный этап</h4>
                                    <p>ноябрь 2023</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.blueCircle}></div>
                                <div className={styles.text}>
                                    <h4>Заключительный этап</h4>
                                    <p>февраль 2024</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={styles.disciplines}>
                    <div className={styles.blockText}>
                        <h2 className={styles.title}>Дисциплины</h2>
                        {/* <Link href='/main'>
                            <div className={styles.all}>
                                <div className={styles.all__text}>Все дисциплины</div>
                                <Image src={ArrowIcon.src} alt='arrow' width={20} height={20} />
                            </div>
                        </Link> */}
                    </div>
                    <div
                        className={styles.blockDisciplines}
                    >
                        <ul
                            onMouseDown={onMouseDown}
                            onMouseUp={onMouseUp}
                            onMouseMove={onMouseMove}
                            ref={ref}
                        >
                            <li><Discipline type='Философия' image={Dis1.src} /></li>
                            <li><Discipline type='Психология' image={Dis2.src} /></li>
                            <li><Discipline type='География' image={Dis3.src} /></li>
                            <li><Discipline type='Математика' image={Dis4.src} /></li>
                            <li><Discipline type='Философия' image={Dis1.src} /></li>
                            <li><Discipline type='Психология' image={Dis2.src} /></li>
                            <li><Discipline type='География' image={Dis3.src} /></li>
                            <li><Discipline type='Математика' image={Dis4.src} /></li>
                            <li><Discipline type='Философия' image={Dis1.src} /></li>
                            <li><Discipline type='Психология' image={Dis2.src} /></li>
                            <li><Discipline type='География' image={Dis3.src} /></li>
                            <li><Discipline type='Математика' image={Dis4.src} /></li>
                        </ul>
                    </div>
                </section>
                <section className={styles.privileges}>
                    <div className={styles.blockText}>
                        <h2 className={styles.title}>Льготы</h2>
                    </div>
                    <div className={styles.blockPrivileges}>
                        <ul>
                            <li>
                                <div className={styles.blueCircle}></div>
                                <h4>Право на прием без вступительных испытаний (БВИ)</h4>
                            </li>
                            <li>
                                <div className={styles.blueCircle}></div>
                                <h4>Право получить 100 баллов за профильный ЕГЭ</h4>
                            </li>
                        </ul>
                        <div className={styles.important}>Важно: каждый вуз в Правилах приема устанавливает свои льготы</div>
                    </div>
                </section>
                <section className={styles.results}>
                    <button>
                        Буду участвовать
                    </button>
                    <button onClick={() => setOpenResults(true)}>
                        Загрузить результаты
                    </button>
                </section>
                {openResults && <LoadingResults setMode={setOpenResults} />}
            </div>
            <Footer />
        </>
    )
}

export default Olympiad;