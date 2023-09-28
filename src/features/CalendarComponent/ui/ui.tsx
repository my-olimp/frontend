"use client";
import React, { FC, useEffect } from 'react';
import styles from './ui.module.scss';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

const localizer = momentLocalizer(moment);

export const CalendarComponent = ({ array }) => {

    const getTodayEvents = () => {
        const today = moment().startOf('day');
        return array?.filter((event: any) => {
            const eventStart = moment(event.start);
            const eventEnd = moment(event.end);
            return eventStart.isSameOrAfter(today) || eventEnd.isSameOrAfter(today);
        });
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
            <div className="rbc-toolbar" style={{ height: '50px' }}>
                <div className='rbc-btn-div' style={{ display: 'flex', alignItems: 'center' }}>
                    <ChevronLeftIcon style={{ fontSize: '28px' }} onClick={() => onNavigate('PREV')} />
                    <span
                        className="rbc-toolbar-label"
                        onClick={() => onNavigate('TODAY')}
                        style={{ fontSize: '18px', fontWeight: '600' }}
                    >
                        {label}
                    </span>
                    <ChevronRightIcon style={{ fontSize: '28px' }} onClick={() => onNavigate('NEXT')} />
                </div>
            </div>
        );
    };

    return (
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
    );
}
