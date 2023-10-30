'use client';
import styles from './index.module.scss'
import { useState, useEffect, useRef, MouseEvent, EventHandler } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import PlusIcon from '../../../../public/materials/Vector.svg';
import { MenuItem, Select, ListItemIcon, FormControl, Input } from '@mui/material';

// CALENDAR
import { CalendarComponent } from '@/features/CalendarComponent';
import './calendar.scss'
import { EventToday } from '@/entities/EventToday';

// ICONS
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListIcon from '@mui/icons-material/List';
import moment from 'moment';
import { LocalizationProvider, MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import useIsMobile from '@/hooks/UseIsMobile';
import DeleteForeverOutlined from '@mui/icons-material/DeleteForeverOutlined';
import { nanoid } from 'nanoid';
import { days, month } from '@/store/features/auth-slice';


const MyCalendar: NextPage = () => {
    const modalRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile(600)
    const [calendarEvents, setCalendarEvents] = useState([]);
    const [countDay, setCountDay] = useState<number>(0);
    const [eventsInList, setEventsInList] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false)
    const [type, setType] = useState<"event" | "task">("event")
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
    const [startTime, setStartTime] = useState<any>(dayjs('2022-04-17T14:30'));
    const [endTime, setEndTime] = useState<any>(dayjs('2022-04-17T15:30'));
    const [date, setDate] = useState<any>(dayjs(Date.now()))
    const [errorDate, setErrorDate] = useState<boolean>(false)
    const [files, setFiles] = useState<any>([])
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const obj = localStorage.getItem('events');
        const events = obj ? JSON.parse(obj) : [];
        if (obj) {
            setCalendarEvents(events)
        }
        setEventsInListFunction(events)
    }, []);

    const setEventsInListFunction = (arr: any, count: number = countDay) => {
        const eventsToday2 = arr.filter((item: any) => {
            return (+dayjs(item.start).diff(dayjs('2000-00-00T00:00'), 'days') - +dayjs(Date.now()).diff(dayjs('2000-00-00T00:00'), 'days')) === count
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
        setType('event')
        setStartTime(dayjs('2022-04-17T14:30'))
        setEndTime(dayjs('2022-04-17T15:30'))
        setDate(dayjs(Date.now()))
        setIsFavorite(false)
        setSubject('Математика')
        setColor('Математика')
    }

    const createEvent = () => {
        setMode('');
        const eventsString = localStorage.getItem('events');
        const events = eventsString ? JSON.parse(eventsString) : [];
        const starttime = dayjs(`${dayjs(date).format('YYYY-MM-DD')}T${dayjs(startTime).format('HH:mm')}`).format('llll')
        const endtime = dayjs(`${dayjs(date).format('YYYY-MM-DD')}T${dayjs(endTime).format('HH:mm')}`).format('llll')
        // console.log(files)
        // const filesArray = files.map((item) => {
        //     const obj = {}
        //     for (const key in item) {
        //         obj[key] = item[key]
        //     }
        //     return obj
        // })
        const obj = {
            id: Math.random(),
            title: eventname,
            start: starttime,
            end: endtime,
            color: getColor(color),
            subject: subject,
            type: type,
            favorite: isFavorite,
            // files: filesArray
            files: files,
        }
        events.push(obj)
        setCalendarEvents(events);
        setEventsInListFunction(events)
        // console.log(JSON.stringify(filesArray))
        localStorage.setItem('events', JSON.stringify(events));
        setEventname('');
        clearAll()
    }

    const editEvent = (id, title, type, favorite, color, subject, start, end, date, files) => {
        setMode('');
        const eventsString = localStorage.getItem('events');
        const events = eventsString ? JSON.parse(eventsString) : [];
        const starttime = dayjs(`${dayjs(date).format('YYYY-MM-DD')}T${dayjs(start).format('HH:mm')}`).format('llll')
        const endtime = dayjs(`${dayjs(date).format('YYYY-MM-DD')}T${dayjs(end).format('HH:mm')}`).format('llll')

        const newEvent = {
            id: Math.random(),
            title: title,
            start: starttime,
            end: endtime,
            color: getColor(color),
            subject: subject,
            type: type,
            favorite: favorite,
            files: files
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
        if (e.length > 3 && !errorDate) {
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
        // document.addEventListener('click', (event) => {
        //     if ((event.target as any)?.classList.contains('rbc-button-link')) {
        //         const eventsString = localStorage.getItem('events');
        //         const events = eventsString ? JSON.parse(eventsString) : [];
        //         const eventsToday2 = events.filter((item: any) => {
        //             return +(dayjs(item.start).format('DD')) == +(event.target as any)?.textContent
        //         })
        //         setEventsInList(eventsToday2)
        //         setCountDay((event.target as any)?.textContent)
        //     }
        // });
        return () => {
            document.removeEventListener('keydown', (event: KeyboardEvent) => {
                if (event.key === 'Escape') {
                    clearAll()
                }
            });
        };
    }, []);


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const array = e.target.files
        // const narray = array && array.map((item) => item.fileLink = URL.createObjectURL(item))
        const fileEls = array;

        if (fileEls?.length) {
            setFiles(fileEls)
        }
    };

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
    
    const deleteFile = (index) => {
        const array = [...files]
        array.splice(index, 1)
        setFiles(array)
    }

    const handleChangeTimeEnd = (value) => {
        setEndTime(value)
        if (startTime.diff(value) > 0) {
            setErrorDate(true);
            setIsDisabled(true)
        } else if (eventname.length > 3) {
            setErrorDate(false)
            setIsDisabled(false)
        } else {
            setErrorDate(false)
            setIsDisabled(true)
        }
    }

    const handleChangeTimeStart = (value) => {
        setStartTime(value)
        if (value.diff(endTime) > 0) {
            setErrorDate(true);
            setIsDisabled(true)
        } else if (eventname.length > 3) {
            setErrorDate(false)
            setIsDisabled(false)
        } else {
            setErrorDate(false)
            setIsDisabled(true)
        }
    }

    return (
        <div className={`${styles.calendar} df jcc aic`}>
            <div className={`${styles.container} df jcsb aic`}>
                <CalendarComponent array={calendarEvents} modeEdit={mode} setModeEdit={setMode} deleteEvent={deleteEvent} editEvent={editEvent} colors={colors} subjects={subjects} getAntiColor={getAntiColor} eventsInList={eventsInList} />
                <div className={`${styles.eventscontainer} df fdc jcfe`}>
                    <div className={styles.events}>
                        <div className={`${styles.title} df jcsb aic`}>
                            <div className={styles.toolbar}>
                                <ChevronLeftIcon className={styles.arrow} onClick={() => navigate('prev')} />
                                <div
                                    onClick={() => navigate('today')}
                                    className={styles.titleName}
                                >
                                    {countDay !== 0 ? `${moment(Date.now()).add('days', countDay).format('DD/MM')}` : 'События сегодня'}
                                </div>
                                <ChevronRightIcon className={styles.arrow} onClick={() => navigate('next')} />
                            </div>
                            <div
                                className={`${styles.circle} df aic jcc cp`}
                                onClick={() => setMode('create')}
                            >
                                <Image src={PlusIcon} alt='icon' />
                            </div>
                        </div>
                        <div className={styles.eventlist}>
                            {eventsInList.length ? eventsInList.map((item: any) => (
                                <EventToday key={Math.random()} event={item} mode={mode} setMode={setMode} deleteEvent={deleteEvent} editEvent={editEvent} colors={colors} subjects={subjects} getAntiColor={getAntiColor} />
                            ))
                                :
                                <div className={styles.noEvents}><span>Нет событий</span></div>
                            }
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
                            maxLength={80}
                            value={eventname}
                            onChange={e => inputHandler(e.target.value)}
                        />
                        <div className={`${styles.mid} df jcsb aic`}>
                            <div className={`${styles.midleft} df aic`}>
                                <div onClick={() => setType('event')} className={`${type === 'event' ? styles.tagChecked : styles.tag} df jcc aic`}>Событие</div>
                                <div onClick={() => setType('task')} className={`${type === 'task' ? styles.tagChecked : styles.tag} df jcc aic`}>Задача</div>
                            </div>
                            <div onClick={() => setIsFavorite(prev => !prev)} className={`${styles.midright} df aic jcc`}>
                                {!isFavorite ?
                                    <BookmarkBorderOutlinedIcon style={{ fontSize: `${isMobile ? '25px' : '32px'}`, color: '#222222' }} className='cp' />
                                    :
                                    <BookmarkIcon style={{ fontSize: `${isMobile ? '25px' : '32px'}`, color: '#3579F8' }} className='cp' />
                                }
                            </div>
                        </div>
                        <div className={styles.settings}>
                            <div className={`${styles.time} df jcsb aic`}>
                                <div className={`${styles.timeleft} df aic`}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['MobileDatePicker']}>
                                            <MobileDatePicker
                                                className={styles.datepicker}
                                                value={date}
                                                onChange={(value) => setDate(value)}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    <QueryBuilderIcon fontSize={isMobile ? 'small' : 'medium'} />
                                    <span>{days[date.day()]}, {date.format('DD')} {month[date.month()]}</span>
                                </div>
                                <div className={`${styles.timeright} df aic`}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['MobileTimePicker']}>
                                            <MobileTimePicker
                                                onChange={(value) => handleChangeTimeStart(value)}
                                                defaultValue={dayjs('2022-04-17T14:30')}
                                                value={startTime}
                                                className={styles.timepicker}
                                                ampm={false}
                                            />
                                            <span> - </span>
                                            <MobileTimePicker
                                                onChange={(value) => handleChangeTimeEnd(value)}
                                                defaultValue={dayjs('2022-04-17T15:30')}
                                                value={endTime}
                                                className={styles.timepicker}
                                                ampm={false}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    {errorDate &&
                                        <div className={styles.errorDate}>
                                            Начальное время не может быть больше конечного
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className={`${styles.files} df aic`}>
                                <AttachFileIcon fontSize={isMobile ? 'small' : 'medium'} />
                                <span>Добавить файлы</span>
                                <input
                                    type="file"
                                    multiple={true}
                                    className={styles.fileInput}
                                    onChange={handleFileChange}
                                    ref={fileInputRef}
                                />
                            </div>
                            {files?.length > 0 &&
                                files.map((item, index) =>
                                    <div key={nanoid(6)} className={styles.file}>
                                        <div className={styles.block}>
                                            <SaveOutlinedIcon className={styles.saveIcon} fontSize={isMobile ? 'small' : 'medium'} />
                                            <a target='_blank' href={URL.createObjectURL(item) || ''}>{item.name}</a>
                                        </div>
                                        <DeleteForeverOutlined onClick={() => deleteFile(index)} className={styles.deleteFile} fontSize={isMobile ? 'small' : 'medium'} />
                                    </div>
                                )
                            }
                            <div className={`${styles.selectdiv} df aic`}>
                                <ListIcon fontSize={isMobile ? 'small' : 'medium'} />
                                <Select
                                    className={styles.selectSubject}
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
                                    <MenuItem value={'Математика'} disabled>
                                        <span className={styles.subjectText}>Предмет</span>
                                    </MenuItem>
                                    {subjects.map((item, index) => (
                                        <MenuItem selected={index == 1 ? true : false} key={index} value={item}>{item}</MenuItem>
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
