'use client';
import styles from './index.module.scss'
import { useState, useEffect, useRef, MouseEvent, EventHandler } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import PlusIcon from '../../../../public/materials/Vector.svg';
import { MenuItem, Select, ListItemIcon, FormControl } from '@mui/material';

// CALENDAR
import { CalendarComponent } from '@/features/CalendarComponent';
import './calendar.scss'
import { EventToday } from '@/entities/EventToday';

// ICONS
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListIcon from '@mui/icons-material/List';
import moment from 'moment';

const MyCalendar: NextPage = () => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [calendarEvents, setCalendarEvents] = useState([]);
    const [countDay, setCountDay] = useState<number>(0);
    const [eventsInList, setEventsInList] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true);
    const [mode, setMode] = useState<string>('');
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
        const obj = localStorage.getItem("events");
        const arr = JSON.parse(obj ? obj : '')
        if (obj) {
            setCalendarEvents(arr)
        }
        setEventsInListFunction(arr)
    }, []);

    const setEventsInListFunction = (arr: any, count: number = countDay) => {
        const eventsToday2 = arr.filter((item: any) => {
            return (+moment(item.start).format('DD') - +moment(Date.now()).format('DD')) === count
        })
        setEventsInList(eventsToday2)
    }


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

    const getAntiColor = (color: string) => {
        const matchingColor: any = colors.find((item: any) => item.color === color)
        return matchingColor ? matchingColor.text : ''
    }

    const clearAll = () => {
        setMode('')
        setEventname('')
        setSubject('Математика')
        setColor('Математика')
    }

    const createEvent = () => {
        setMode('');
        const eventsString = localStorage.getItem('events');
        const events = eventsString ? JSON.parse(eventsString) : [];

        const obj = {
            id: Math.random(),
            title: eventname,
            start: new Date(),
            end: new Date(),
            color: getColor(color),
            subject: subject,
        }
        events.push(obj)
        setCalendarEvents(events);
        setEventsInListFunction(events)
        localStorage.setItem('events', JSON.stringify(events));
        setEventname('');
    }

    const editEvent = (id, title, color, subject, start, end) => {
        setMode('');
        const eventsString = localStorage.getItem('events');
        const events = eventsString ? JSON.parse(eventsString) : [];

        const newEvent = {
            id: Math.random(),
            title: title,
            start: start,
            end: end,
            color: getColor(color),
            subject: subject,
        }

        const neededIndex = events.findIndex((item: any) => {
            return (item.id === id)
        })
        events.splice(neededIndex, 1, newEvent)

        setCalendarEvents(events);
        setEventsInListFunction(events)
        localStorage.setItem('events', JSON.stringify(events));
        setEventname('');
    }

    const deleteEvent = (eventFrom: any) => {
        const eventsString = localStorage.getItem('events');
        const events = eventsString ? JSON.parse(eventsString) : [];
        const newEvents = events.filter((item: any) => {
            return (item.id !== eventFrom.id)
        })

        setCalendarEvents(newEvents);
        setEventsInListFunction(newEvents)
        localStorage.removeItem('events');
        localStorage.setItem('events', JSON.stringify(newEvents));
    }


    const inputHandler = (e: string) => {
        if (e.length > 3) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
        setEventname(e);
    }

    const handleClickOutSide: EventHandler<MouseEvent<HTMLDivElement>> = (event) => {
        if (event.target === modalRef.current) {
            clearAll()
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                clearAll()
            }
        });
        return () => {
            document.removeEventListener('keydown', () => { });
        };
    }, []);

    const navigate = (option: 'today' | 'prev' | 'next') => {
        if (option === 'next') {
            setCountDay(prev => prev + 1)
            setEventsInListFunction(calendarEvents, countDay + 1)
        } else if (option === 'prev') {
            setCountDay(prev => prev - 1)
            setEventsInListFunction(calendarEvents, countDay - 1)
        } else {
            setCountDay(0)
            setEventsInListFunction(calendarEvents, 0)
        }
    }

    return (
        <div className={`${styles.calendar} df jcc aic`}>
            <div className={`${styles.container} df jcsb aic`}>
                <CalendarComponent array={calendarEvents} />
                <div className={`${styles.eventscontainer} df fdc jcfe`}>
                    <div className={styles.events}>
                        <div className={`${styles.title} df jcsb aic`}>
                            <div className={styles.toolbar}>
                                <ChevronLeftIcon style={{ fontSize: '28px' }} onClick={() => navigate('prev')} />
                                <div
                                    onClick={() => navigate('today')}
                                    className={styles.titleName}
                                >
                                    {countDay !== 0 ? `${moment(Date.now()).add('days', countDay).format('DD/MM')}` : 'События сегодня'}
                                </div>
                                <ChevronRightIcon style={{ fontSize: '28px' }} onClick={() => navigate('next')} />
                            </div>
                            <div
                                className={`${styles.circle} df aic jcc cp`}
                                onClick={() => setMode('create')}
                            >
                                <Image src={PlusIcon} alt='icon' />
                            </div>
                        </div>
                        <div className={styles.eventlist}>
                            {eventsInList.map((item: any) => (
                                <EventToday key={Math.random()} event={item} mode={mode} setMode={setMode} deleteEvent={deleteEvent} editEvent={editEvent} colors={colors} subjects={subjects} getAntiColor={getAntiColor} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {(mode === 'create') ? (
                <div
                    className={styles.screen}
                    ref={modalRef}
                    onClick={(event) => handleClickOutSide(event)}
                >
                    <div className={styles.popup}>
                        <h4 className={styles.popuptitle}>Новое событие</h4>
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
                            <div className={`${styles.closebtn} df jcc aic cp`} onClick={() => clearAll()}>Отменить</div>
                        </div>
                    </div>
                </div>
            ) : ''}
        </div>
    );
};

export default MyCalendar;
