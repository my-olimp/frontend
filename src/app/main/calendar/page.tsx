'use client';
import styles from './index.module.scss'
import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import PlusIcon from '../../../../public/materials/Vector.svg';
import { MenuItem, Select, ListItemIcon, FormControl } from '@mui/material';

// CALENDAR
import { CalendarComponent } from '@/features/CalendarComponent';
import './calendar.scss'

// ICONS
import AddIcon from '@mui/icons-material/AddBox';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ListIcon from '@mui/icons-material/List';
import moment from 'moment';

const MyCalendar: NextPage = () => {
    const [calendarEvents, setCalendarEvents] = useState([]);
    const [eventstoday, setEventstoday] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true);
    const [create, setCreate] = useState(false);
    const [eventname, setEventname] = useState('');
    const [subject, setSubject] = useState('Математика');
    const [subjects, setSubjects] = useState(['Математика', 'Биология', 'Химия', 'Физика', 'Английский', 'Астрология']);
    const [color, setColor] = useState('Математика');
    const [colors, setColors] = useState([
        { color: '#5E96FF', text: 'Математика' },
        { color: '#FF985E', text: 'Биология' },
        { color: '#7E50FF', text: 'Химия' },
        { color: '#FF959C', text: 'Физика' },
        { color: '#73DF8B', text: 'Английский' },
        { color: '#FF7F6D', text: 'Астрология' },
    ]);

    useEffect(() => {
        // Проверка на наличие поддержки localStorage
        if (typeof window !== 'undefined' && window.localStorage) {
            const obj = localStorage.getItem("events");
            if (obj) setCalendarEvents(JSON.parse(obj));
        }
    }, []);

    const subjectHandler = (event: any) => {
        setSubject((event.target as HTMLSelectElement).value)
    }

    const colorHandler = (event: any) => {
        setColor((event.target as HTMLSelectElement).value)
    }

    const getColor = (color: string) => {
        const matchingColor: any = colors.find((item: any) => item.text === color)
        return matchingColor ? matchingColor.color : ''
    }

    const createEvent = () => {
        setCreate(false);
        // Проверка на наличие поддержки localStorage
        if (typeof window !== 'undefined' && window.localStorage) {
            const eventsString = localStorage.getItem('events');
            const events = eventsString ? JSON.parse(eventsString) : [];

            const obj = {
                title: eventname,
                start: new Date(),
                end: new Date(),
                color: getColor(color),
            }

            events.push(obj);
            setCalendarEvents(events);
            localStorage.setItem('events', JSON.stringify(events));
        }
    }

    const inputHandler = (e: string) => {
        if (e.length > 3) setIsDisabled(false);
        setEventname(e);
    }

    return (
        <div className={`${styles.calendar} df jcc aic`}>
            <div className={`${styles.container} df jcsb aic`}>
                <CalendarComponent array={calendarEvents} />
                <div className={`${styles.eventscontainer} df fdc jcfe`}>
                    <div className={styles.events}>
                        <div className={`${styles.title} df jcsb aic`}>
                            <span>События сегодня</span>
                            <div
                                className={`${styles.circle} df aic jcc cp`}
                                onClick={() => setCreate(true)}
                            >
                                <Image src={PlusIcon} alt='icon' />
                            </div>
                        </div>
                        <div className={styles.eventlist}>
                            {calendarEvents.map((item: any, index: number) => (
                                <div className={`${styles.eventtoday} df jcsb aic`} key={index}>
                                    <div className={`${styles.eventtodayleft} df aic w50`}>
                                        <div
                                            style={{
                                                height: '15px',
                                                width: '15px',
                                                backgroundColor: item.color,
                                                borderRadius: '50%',
                                            }}
                                        ></div>
                                        <p>{item.title}</p>
                                    </div>
                                    <div className={`${styles.eventtodayright} df aic`}>
                                        <span>{moment(item.start).format('HH:mm')} - {moment(item.end).format('HH:mm')}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {create ? (
                <div className={`${styles.popupmain} df jcc`}>
                    <div className={styles.popup}>
                        <div className={styles.popuptitle}>
                            <span>Новое событие</span>
                        </div>
                        <input
                            className={styles.popupinput}
                            type="text"
                            placeholder='Название'
                            maxLength={40}
                            value={eventname}
                            onChange={e => inputHandler(e.target.value)}
                        />
                        <div className={`${styles.mid} df jcsb aic`}>
                            <div className={`${styles.midleft} df aic`}>
                                <div className={`${styles.tag} df jcc aic`}>Событие</div>
                                <div className={`${styles.tag} df jcc aic`}>Задача</div>
                            </div>
                            <div className={`${styles.midright} df aic jcc`}>
                                <BookmarkBorderOutlinedIcon className='cp' />
                            </div>
                        </div>
                        <div className={styles.settings}>
                            <div className={`${styles.time} df jcsb aic`}>
                                <div className={`${styles.timeleft} df aic`}>
                                    <QueryBuilderIcon />
                                    <span>Понедельник, 18 сентября</span>
                                </div>
                                <div className={`${styles.timeright} df aic`}>13:00 - 14:00</div>
                            </div>
                            <div className={`${styles.files} df aic`}>
                                <AttachFileIcon />
                                <span>Добавить файлы</span>
                            </div>
                            <div className={`${styles.selectdiv} df aic`}>
                                <ListIcon />
                                <Select
                                    className={styles.select}
                                    onChange={event => subjectHandler(event)}
                                    value={subject}
                                    sx={{
                                        border: 'none',
                                        '&& div': {
                                            padding: '0',
                                            minWidth: '100px',
                                        },
                                        '&& fieldset': {
                                            border: 'none',
                                        },
                                    }}
                                >
                                    <MenuItem value={'Математика'} disabled selected>
                                        <span style={{ color: 'black' }}>Математика</span>
                                    </MenuItem>
                                    {subjects.map((item, index) => (
                                        <MenuItem key={index} value={item}>{item}</MenuItem>
                                    ))}
                                </Select>
                                <FormControl>
                                    <Select
                                        className={styles.select}
                                        value={color}
                                        onChange={event => colorHandler(event)}
                                        sx={{
                                            border: 'none',
                                            '&& div': {
                                                padding: '0',
                                                minWidth: '0px',
                                                marginRight: '2px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontSize: '17.5px',
                                            },
                                            '&& fieldset': {
                                                border: 'none',
                                            },
                                        }}
                                    >
                                        {colors.map((item, index) => (
                                            <MenuItem key={index} value={item.text} data-color={item.color}>
                                                <ListItemIcon>
                                                    <div
                                                        style={{
                                                            width: '16px',
                                                            height: '16px',
                                                            backgroundColor: item.color,
                                                            borderRadius: '50%',
                                                        }}
                                                    ></div>
                                                </ListItemIcon>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className={`${styles.btns} df jcsb aic`}>
                            <button
                                className={`${styles.createbtn} df jcc aic cp`}
                                onClick={createEvent}
                                disabled={isDisabled}
                            >
                                Создать
                            </button>
                            <div className={`${styles.closebtn} df jcc aic cp`} onClick={() => setCreate(false)}>Отменить</div>
                        </div>
                    </div>
                </div>
            ) : <></>}
            <div className={`${styles.mobileadd} df jcc aic`} onClick={() => setCreate(true)}>
                <Image src={PlusIcon} alt='icon' />
            </div>
        </div>
    );
};

export default MyCalendar;