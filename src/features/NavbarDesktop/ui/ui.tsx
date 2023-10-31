'use client';
import { Bell } from '@/entities/Bell';
import Logo from '@/entities/Logo/ui/ui';
import { NavbarAvatar } from '@/entities/NavbarAvatar';
import { INotice, Notifications } from '@/features/Notifications';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Logout } from '@/store/features/auth-slice';
import { RootState } from '@/store/store';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import SchoolIcon from '@mui/icons-material/School';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import styles from './ui.module.scss';
import { PopupPages } from '@/features/PopupPages';
import { ArrowHeader } from '@/entities/ArrowHeader';

interface props {
    navBarData: any[];
    notifications: INotice[];
    profile: boolean;
    userdata?: any;
}

const sideBarElements = [
    { id: 0, name: 'Главная', icon: <AccountCircleOutlinedIcon />, rout: 'main', active: true },
    { id: 1, name: 'Успеваемость', icon: <InsertChartOutlinedRoundedIcon />, rout: '/grade', active: false },
    { id: 2, name: 'Избранное', icon: <FavoriteBorderOutlinedIcon />, rout: '/favourites', active: false },
    { id: 3, name: 'Хочу посмотреть', icon: <VisibilityOutlinedIcon />, rout: '/watchlater', active: false },
    { id: 4, name: 'Достижения', icon: <WorkspacePremiumOutlinedIcon />, rout: '/achievments', active: false },
];

const sideBarElementsComitet = [
    { id: 0, name: 'Главная', icon: <AccountCircleOutlinedIcon />, rout: 'main', active: true },
    { id: 1, name: 'Олимпиады', icon: <SchoolIcon />, rout: '/olympiads', active: false },
    { id: 2, name: 'Избранное', icon: <FavoriteBorderOutlinedIcon />, rout: '/favouritesComitet', active: false },
    { id: 3, name: 'Редакция', icon: <EditCalendarIcon />, rout: '/redaction', active: false },
];

export const NavBarDesktop: FC<props> = ({ navBarData, notifications, profile, userdata }) => {
    const wrapRef = useRef(null);
    const [windowInMain, setWindowInMain] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState<number>(0);
    const [showPopupNotifications, setShowPopupNotifications] = useState<boolean>(false);
    const [showPopupPages, setShowPopupPages] = useState<boolean>(false);
    const pathname = usePathname();
    const [clicked, setClicked] = useState<boolean>(false);

    const [active, setActive] = useState<number>(0);

    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    const { user } = useAppSelector((state: any) => state.auth);

    const { push } = useRouter();

    useEffect(() => {
        setWindowInMain(window.location.href.includes('main'))
        for (const element of sideBarElements) {
            element.active = false
            if (pathname.includes(element.rout)) setActiveId(element.id)
        }
    }, []);

    const linksHandler = (id: number) => {
        setActiveId(id)
        setIsOpen(false)
    }

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if (wrapRef.current && !(wrapRef.current as HTMLDivElement).contains(event.target as HTMLDivElement)) {
                setIsOpen(false);
            }
        });
        return function cleanup() {
            document.body.removeEventListener('click', (event) => {
                if (wrapRef.current && !(wrapRef.current as HTMLDivElement).contains(event.target as HTMLDivElement)) {
                    setIsOpen(false);
                }
            });
        };
    }, [setIsOpen]);

    return (
        <header
            ref={wrapRef}
            style={{ display: 'flex', justifyContent: 'space-between' }}
            className={styles.header}>
            <div className={styles.linksWrap}>
                <div
                    className={styles.burgerMenu}
                    style={windowInMain ? { opacity: '0' } : {}}
                >
                    <div
                        className={`${styles.burgerIcon} ${isOpen ? styles.open : ''}`}
                        onClick={() => setIsOpen(prev => !prev)}
                        style={windowInMain ? { cursor: 'default' } : {}}
                    >
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                </div>
                <Logo main={true}/>
                {!profile &&
                    navBarData.map((data) => (
                        <Link
                            className={styles.element}
                            key={data.id}
                            href={data.link}
                            onClick={() => setActive(data.id)}
                            style={{
                                color: data.id === active ? '#3579f8' : 'black',
                            }}>
                            {data.title}
                        </Link>
                    ))}
            </div>
            <div className={styles.infoWrap}>
                <Bell
                    showPopup={showPopupNotifications}
                    clicked={clicked}
                    setShowPopup={setShowPopupNotifications}
                    setClicked={setClicked}
                    setShowPopupPages={setShowPopupPages}
                />
                {user ? (
                    <>
                        <ArrowHeader
                            showPopup={showPopupPages}
                            setShowPopup={setShowPopupPages}
                        />
                    </>
                ) : (
                    <button className={styles.login} onClick={() => push('/signin')}>
                        Войти
                    </button>
                )}
            </div>
            <AnimatePresence>
                {showPopupNotifications && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: '252px' }}
                        exit={{ height: 0 }}
                        className={styles.popupWrapNotivications}>
                        <Notifications notifications={notifications} setShow={setShowPopupNotifications} />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {showPopupPages && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: '250px' }}
                        exit={{ height: 0 }}
                        className={styles.popupWrapPages}>
                        <PopupPages setShow={setShowPopupPages} />
                    </motion.div>
                )}
            </AnimatePresence>
            {profile && (
                <span
                    className={isOpen ? styles.sideBarOpen : styles.sideBar}
                    style={isOpen ? { transition: 'all .2s ease-in-out', width: '15rem' } : { transition: 'all .2s ease-in-out' }}
                >
                    <span style={{ display: 'flex' }}>

                        {(userdata?.account_type == 'c' ? sideBarElementsComitet : sideBarElements).map((element: any) => (
                            <Link
                                href={element.rout === 'main' ? '/profile' : `/profile${element.rout}`}
                                key={element.id}
                                className={styles.sideBarElement}
                                title={element.name}
                                style={{
                                    backgroundColor:
                                        activeId === element.id ? '#F3F3F3' : 'transparent',
                                    width:
                                        isOpen ? '175px' : '40px'
                                }}
                                onClick={() => linksHandler(element.id)}
                            >
                                {element.icon}
                                <p
                                    className={`${styles.baritemtext} ${element.id === activeId ? styles.baritemtext_open : ''}`}
                                    style={isOpen ? {} : { opacity: '0' }}
                                >
                                    {element.name}
                                </p>
                            </Link>
                        ))}
                    </span>
                    <div
                        className={styles.sideBarLogout}
                        title="Выйти"
                        onClick={() => {
                            dispatch(Logout());
                            push('/signin');
                        }}>
                        <LogoutOutlinedIcon />
                        <p
                            className={styles.baritemtext}
                            style={isOpen ? { color: '#D55F5A' } : { opacity: '0' }}
                        >
                            Выйти из аккаунта
                        </p>
                    </div>
                </span>
            )}
        </header>
    );
};
