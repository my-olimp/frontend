'use client';
import { FC, useLayoutEffect, useState } from 'react';
import { INotice } from '@/features/Notifications';
import { NavBarDesktop } from '@/features/NavbarDesktop/';
import { NavBarMobile } from '@/features/NavbarMobile';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CampaignIcon from '@mui/icons-material/Campaign';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

interface props {
    activeId: number;
}

const navBarData = [
    {
        id: 0,
        title: 'Главная',
        link: '/main',
        icon: <HomeIcon />,
    },
    {
        id: 1,
        title: 'Календарь',
        link: '',
        icon: <CalendarTodayIcon />,
    },
    {
        id: 2,
        title: 'Новости',
        link: '',
        icon: <CampaignIcon />,
    },
    {
        id: 3,
        title: 'Библиотека',
        link: '/library',
        icon: <AutoStoriesOutlinedIcon />,
    },
];

const notifications: INotice[] = [
    { id: 0, title: 'Пришли результаты ВСОШ по математике', date: '2023-08-28T11:13:55.395Z' },
    { id: 1, title: 'Пришли результаты ВСОШ по математике', date: '2023-08-28T11:12:55.395Z' },
];

export const Header: FC<props> = ({ activeId }) => {
    const [mobile, setMobile] = useState(false);

    useLayoutEffect(() => {
        if (window.innerWidth < 900) {
            setMobile(true);
        }
    }, []);

    return (
        <>
            {mobile ? (
                <NavBarMobile
                    notifications={notifications}
                    navBarData={navBarData}
                    activeId={activeId}
                />
            ) : (
                <NavBarDesktop
                    notifications={notifications}
                    navBarData={navBarData}
                    activeId={activeId}
                />
            )}
        </>
    );
};
