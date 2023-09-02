'use client';
import { FC, useEffect, useLayoutEffect, useState } from 'react';
import { INotice } from '@/features/Notifications';
import { NavBarDesktop } from '@/features/NavbarDesktop/';
import { NavBarMobile } from '@/features/NavbarMobile';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CampaignIcon from '@mui/icons-material/Campaign';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { RootState } from '@/store/store';
import { ThunkDispatch } from 'redux-thunk';

interface props {}

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
        link: '/main/calendar',
        icon: <CalendarTodayIcon />,
    },
    {
        id: 2,
        title: 'Новости',
        link: '/main/news',
        icon: <CampaignIcon />,
    },
    {
        id: 3,
        title: 'Библиотека',
        link: '/main/library',
        icon: <AutoStoriesOutlinedIcon />,
    },
];

const notifications: INotice[] = [
    { id: 0, title: 'Пришли результаты ВСОШ по математике', date: '2023-08-28T11:13:55.395Z' },
    { id: 1, title: 'Пришли результаты ВСОШ по математике', date: '2023-08-28T11:12:55.395Z' },
];

export const Header: FC<props> = ({}) => {
    const [mobile, setMobile] = useState(false);
    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    useLayoutEffect(() => {
        if (window.innerWidth < 900) {
            setMobile(true);
        }
    }, []);

    useEffect(() => {}, [dispatch]);

    return (
        <>
            {mobile ? (
                <NavBarMobile notifications={notifications} navBarData={navBarData} />
            ) : (
                <NavBarDesktop notifications={notifications} navBarData={navBarData} />
            )}
        </>
    );
};
