"use client"
import React, { useState, useEffect, useRef, MouseEvent, EventHandler } from 'react';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { NextPage } from 'next';
import styles from './index.module.scss';
import { Checkbox, Switch, TextField } from '@mui/material';

const olympiadStatic = {
    title: 'Высшая проба',
    description: 'Всероссийская предметная олимпиада школьников, проводимая Высшей школой экономики на базе самого университета, других вузов и школ России и ближнего зарубежья. В 2019-2020 учебных годах олимпиада проводится по 25 профилям.',
    organizers: [
        {
            title: 'Национально-исследовательский университет “Высшая школа экономики”',
            id: 1211233435,
            image: ''
        },
        {
            title: 'Пензенский государственный университет',
            id: 1231933435,
            image: ''
        },
        {
            title: 'Уральский федеральный университет',
            id: 1231833435,
            image: ''
        },
        {
            title: 'Дальневосточный федеральный университет',
            id: 1231234435,
            image: ''
        },
        {
            title: 'Российский университет дружбы народов',
            id: 1231233465,
            image: ''
        },
    ],
    logo: {},
    disciplines: [
        {
            name: 'Философия',
            id: 7839463948,
        },
        {
            name: 'Психология',
            id: 7834556948,
        },
        {
            name: 'География',
            id: 7837563948,
        },
        {
            name: 'Математика',
            id: 7834963948,
        },
    ],
    openRegistration: true,
    stages: [
        {
            name: 'Регистрация',
            start: '10.09.2023',
            end: '10.10.2023',
            id: 8435834575
        },
        {
            name: 'Отборочный этап',
            start: '11.10.2023',
            end: '30.10.2023',
            id: 8435834575
        },
        {
            name: 'Заключительный этап',
            start: '01.02.2024',
            end: '25.02.2024',
            id: 8435834575
        },
    ]
}

const EditOlympiad: NextPage = () => {
    const [olympiad, setOlympiad] = useState(olympiadStatic)
    const [mode, setMode] = useState<boolean>(false)
    const modalRef = useRef<HTMLDivElement>(null);
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [openRegistration, setOpenRegistration] = useState<boolean>(olympiadStatic.openRegistration)


    const handleClickOutSide: EventHandler<MouseEvent<HTMLDivElement>> = (event) => {
        if (event.target === modalRef.current) {
            setMode(false)
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMode(false)
            }
        });
        return () => {
            document.removeEventListener('keydown', (event: KeyboardEvent) => {
                if (event.key === 'Escape') {
                    setMode(false)
                }
            });
        };
    }, []);


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{olympiad.title}</h1>
            <div className={styles.blocks}>
                <article className={styles.blocks__title}>
                    <div className={styles.titleBlock}>
                        <h2 className={styles.name}>Название олимпиады</h2>
                        <div onClick={() => setMode(true)}>
                            <DriveFileRenameOutlineOutlinedIcon className={styles.mode} />
                        </div>
                    </div>
                    <p className={styles.text}>{olympiad.title}</p>
                </article>
                <div className={styles.mainBlock}>
                    <div className={styles.leftBlock}>
                        <article className={styles.blocks__description}>
                            <div className={styles.titleBlock}>
                                <h2 className={styles.name}>Описание олимпиады</h2>
                                <div onClick={() => setMode(true)}>
                                    <DriveFileRenameOutlineOutlinedIcon className={styles.mode} />
                                </div>
                            </div>
                            <p className={styles.text}>{olympiad.description}</p>
                        </article>
                        <article className={styles.blocks__organizers}>
                            <div className={styles.titleBlock}>
                                <h2 className={styles.name}>Организаторы</h2>
                                <div onClick={() => setMode(true)}>
                                    <DriveFileRenameOutlineOutlinedIcon className={styles.mode} />
                                </div>
                            </div>
                            <div className={styles.text}>
                                {olympiad.organizers.length > 0
                                    ?
                                    <div className={styles.organizers}>
                                        {olympiad.organizers.map((item) =>
                                            <div key={item.id} className={styles.organizer}>
                                                <div
                                                    className={styles.image}
                                                    style={{ backgroundImage: `${item.image}` }}
                                                >
                                                    <div className={styles.uploadText}>загрузить изображение</div>
                                                </div>
                                                <h4 className={styles.name}>{item.title}</h4>
                                            </div>
                                        )}
                                    </div>
                                    :
                                    <div className={styles.filler}>
                                        Нет организаторов
                                    </div>
                                }
                            </div>
                        </article>
                    </div>
                    <div className={styles.rightBlock}>
                        <article className={styles.blocks__registration}>
                            <h3 className={styles.name}>Регистрация открыта</h3>
                            <Checkbox checked={openRegistration} onChange={() => setOpenRegistration(prev => !prev)} sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }} className={styles.switch} />
                        </article>
                        <article className={styles.blocks__stages}>
                            <div className={styles.titleBlock}>
                                <h2 className={styles.name}>Расписание и этапы</h2>
                                <div onClick={() => setMode(true)}>
                                    <DriveFileRenameOutlineOutlinedIcon className={styles.mode} />
                                </div>
                            </div>
                            <div className={styles.text}>
                                {olympiad.stages.length > 0
                                    ?
                                    <div className={styles.stages}>
                                        {olympiad.stages.map((item) =>
                                            <div key={item.id} className={styles.stage}>
                                                <h4 className={styles.name}>{item.name}</h4>
                                                <div className={styles.date}>{item.start} - {item.end}</div>
                                            </div>
                                        )}
                                    </div>
                                    :
                                    <div className={styles.filler}>
                                        Нет этапов
                                    </div>
                                }
                            </div>
                        </article>
                        <article className={styles.blocks__disciplines}>
                            <div className={styles.titleBlock}>
                                <h2 className={styles.name}>Дисциплины</h2>
                                <div onClick={() => setMode(true)}>
                                    <DriveFileRenameOutlineOutlinedIcon className={styles.mode} />
                                </div>
                            </div>
                            <div className={styles.text}>
                                {olympiad.disciplines.length > 0
                                    ?
                                    <div className={styles.disciplines}>
                                        {olympiad.disciplines.map((item) =>
                                            <div key={item.id} className={styles.discipline}>
                                                <h4 className={styles.name}>{item.name}</h4>
                                            </div>
                                        )}
                                    </div>
                                    :
                                    <div className={styles.filler}>
                                        Нет дисциплин
                                    </div>
                                }
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            {mode &&
                <div
                    className={styles.screen}
                    ref={modalRef}
                    onClick={(event) => handleClickOutSide(event)}
                >
                    <div className={styles.popup}>
                        <div>
                            <h4 className={styles.popuptitle}>Олимпиада</h4>
                            <div className={styles.mainBlock}>
                                <div className={styles.left}>
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        label="Название олимпиады"
                                        onChange={(e) => setTitle(e.target.value)}
                                        value={title}
                                        className={styles.input}
                                    />
                                </div>
                                <div className={styles.right}>

                                </div>
                            </div>
                        </div>
                        <div className={`${styles.btns} df jcsb aic`}>
                            <button
                                className={`${styles.createbtn} df jcc aic cp`}
                            // disabled={isDisabled}
                            >
                                Создать
                            </button>
                            <div className={`${styles.closebtn} df jcc aic cp`} onClick={() => setMode(false)}>Отменить</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default EditOlympiad;