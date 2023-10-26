"use client";
import React, { EventHandler, FC, useEffect, useRef, useState, MouseEvent } from 'react';
import styles from './ui.module.scss';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CloseIcon from '@mui/icons-material/Close';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/ru';
import { EventToday } from '@/entities/EventToday';

moment.locale('ru');

const localizer = momentLocalizer(moment);

export const CalendarComponent = ({ array, setModeEdit, editEvent, colors, subjects, getAntiColor, eventsInList, modeEdit, deleteEvent }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [mode, setMode] = useState<boolean>(false)

    const getTodayEvents = () => {
        return array?.filter((event: any) => {
            return (+moment(event.start).format('DD') === +moment(Date.now()).format('DD'))
        });
    };

    const handleClickOutSide: EventHandler<MouseEvent<HTMLDivElement>> = (event) => {
        if (event.target === modalRef.current) {
            setMode(false)
        }
    };

    useEffect(() => {
        const x = getTodayEvents();
        localStorage.setItem('eventstoday', JSON.stringify(x));
    }, [])

    const eventStyleGetter = (event: any, start: any, end: any, isSelected: any) => {
        const style: any = {
            backgroundColor: event.color,
        };

        const today = moment().startOf('day');
        const eventStart = moment(event.start);
        const eventEnd = moment(event.end);

        if (eventStart.isSameOrAfter(today) || eventEnd.isSameOrAfter(today)) {
            style.content = today.format('D');
            style.todayEvent = true;
        }

        return {
            style,
        };
    };

    const CustomToolbar = ({ label, onNavigate }) => {
        return (
            <div className={`${styles.cont} rbc-toolbar`}>
                <div className={`${styles.toolbar} rbc-btn-div`}>
                    <ChevronLeftIcon className={`${styles.arrow}`} onClick={() => onNavigate('PREV')} />
                    <span
                        className={`${styles.span} rbc-toolbar-label`}
                        onClick={() => onNavigate('TODAY')}
                    >
                        {label}
                    </span>
                    <ChevronRightIcon className={`${styles.arrow}`} onClick={() => onNavigate('NEXT')} />
                </div>
                <div className={styles.favorites} onClick={() => setMode(prev => !prev)}>
                    {mode ?
                    <BookmarkIcon style={{ fontSize: '34px', color: '#3579F8', paddingTop: '3px'}} className='cp' />
                        :
                    <BookmarkBorderOutlinedIcon style={{ fontSize: '34px', color: '#3579F8', paddingTop: '3px'}} className='cp' />
                    }
                </div>
            </div>
        );
    };

    return (
        <>
            <div className={styles.calendar}>
                <Calendar
                    localizer={localizer}
                    events={array}
                    views={['month']}
                    startAccessor="start"
                    endAccessor="end"
                    className='bigcalendar'
                    eventPropGetter={eventStyleGetter}
                    components={{
                        toolbar: CustomToolbar,
                    }}
                />
            </div>
            {mode &&
                <div
                    className={styles.screen}
                    ref={modalRef}
                    onClick={(event) => handleClickOutSide(event)}
                >
                    <div className={styles.popup}>
                    <div className={styles.icon} onClick={() => setMode(false)}>
                        <CloseIcon className={styles.close}/>
                        </div>
                        <div className={`${styles.eventscontainer} df fdc jcfe`}>
                            <div className={styles.events}>
                                {
                                    array.filter((el) => el?.favorite).length ?
                                        <>
                                            <h4 className={styles.popuptitle}>Избранные события</h4>
                                            <div className={styles.eventlist}>
                                                {array.filter((el) => el?.favorite).map((item: any) => (
                                                    <EventToday key={Math.random()} event={item} mode={modeEdit} setMode={setModeEdit} deleteEvent={deleteEvent} editEvent={editEvent} colors={colors} subjects={subjects} getAntiColor={getAntiColor} />
                                                ))}
                                            </div>
                                        </>
                                        :
                                        <div className={styles.filler}>
                                            Избранные события не найдены
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
