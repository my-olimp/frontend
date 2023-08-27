'use client';
import styles from './ui.module.scss';
import { Avatar } from '@mui/material';
import Logo from '@/entities/Logo/ui/ui';
import Link from 'next/link';
import { useState } from 'react';
import { Bell } from '@/features/Bell';
import { INotice, Notifications } from '@/features/Notifications';

const navBarData = [
    {
        id: 0,
        title: 'Главная',
        link: '',
    },
    {
        id: 1,
        title: 'Календарь',
        link: '',
    },
    {
        id: 2,
        title: 'Новости',
        link: '',
    },
    {
        id: 3,
        title: 'Библиотека',
        link: '',
    },
];

const notifications: INotice[] = [
    { id: 0, title: 'Пришли результаты ВСОШ по математике', date: '2023-08-27T17:10:54.394Z' },
    { id: 1, title: 'Пришли результаты ВСОШ по математике', date: '2023-08-26T17:10:54.394Z' },
];

export const Header = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <header
            style={{ display: 'flex', justifyContent: 'space-between' }}
            className={styles.header}>
            <div className={styles.linksWrap}>
                <Logo />
                {navBarData.map((data) => (
                    <Link className={styles.element} key={data.id} href={data.link}>
                        {data.title}
                    </Link>
                ))}
            </div>
            <div className={styles.infoWrap}>
                <Bell
                    showPopup={showPopup}
                    clicked={clicked}
                    setShowPopup={setShowPopup}
                    setClicked={setClicked}
                />
                <Avatar></Avatar>
            </div>
            {showPopup && (
                <div className={showPopup ? styles.popupWrap : styles.popupWrapHidden}>
                    <Notifications notifications={notifications} />
                </div>
            )}
        </header>
    );
};
