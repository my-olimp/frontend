'use client';
import { NavBarDesktop } from '@/features/NavbarDesktop/';
import { NavBarMobile } from '@/features/NavbarMobile';
import { INotice } from '@/features/Notifications';
import useIsMobile from '@/hooks/UseIsMobile';
import { RootState } from '@/store/store';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CampaignIcon from '@mui/icons-material/Campaign';
import PersonIcon from '@mui/icons-material/Person';
import { FC, useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

interface props {
    profile?: boolean;
    userdata?: any;
}

const navBarData = [
    {
        id: 0,
        title: 'Главная',
        link: '/main',
        icon: <PersonIcon />,
        active: false,
    },
    {
        id: 1,
        title: 'Календарь',
        link: '/main/calendar',
        icon: <CalendarTodayIcon />,
        active: false,
    },
    {
        id: 2,
        title: 'Новости',
        link: '/main/news',
        icon: <CampaignIcon />,
        active: false,
    },
    {
        id: 3,
        title: 'Библиотека',
        link: '/main/library',
        icon: <AutoStoriesOutlinedIcon />,
        active: false,
    },
];

const notifications: INotice[] = [
    { id: 0, title: 'Пришли результаты ВСОШ по математике', date: '2023-08-28T11:13:55.395Z' },
    { id: 1, title: 'Пришли результаты ВСОШ по математике', date: '2023-08-28T11:12:55.395Z' },
];

export const Header: FC<props> = ({ profile = false }) => {
    const isMobile = useIsMobile(900)
    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();


    useEffect(() => {}, [dispatch]);

    return (
        <>
            {isMobile ? (
                <NavBarMobile notifications={notifications} navBarData={navBarData} profile={profile} />
            ) : (
                <NavBarDesktop
                    notifications={notifications}
                    navBarData={navBarData}
                    profile={profile}
                />
            )}
        </>
    );
};
