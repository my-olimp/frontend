import { Bell } from '@/entities/Bell';
import Logo from '@/entities/Logo/ui/ui';
import { NavbarAvatar } from '@/entities/NavbarAvatar';
import { HamburgerMenu } from '@/entities/hamburgerMenu/ui/ui';
import { INotice, Notifications } from '@/features/Notifications';
import { Logout } from '@/store/features/auth-slice';
import { RootState } from '@/store/store';
import LogoutIcon from '@mui/icons-material/Logout';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import styles from './ui.module.scss';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import SchoolIcon from '@mui/icons-material/School';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { PopupPages } from '@/features/PopupPages';
import { ArrowHeader } from '@/entities/ArrowHeader';
import useIsMobile from '@/hooks/UseIsMobile';

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

interface props {
    notifications: INotice[];
    navBarData: any;
    profile: Boolean;
    userdata?: any;
}
export const NavBarMobile: FC<props> = ({ notifications, navBarData, profile, userdata }) => {
    const wrapRef = useRef(null);
    const isMobile = useIsMobile(420)
    const [showPopupNotifications, setShowPopupNotifications] = useState<boolean>(false);
    const [showPopupPages, setShowPopupPages] = useState<boolean>(false);
    const [clicked, setClicked] = useState<boolean>(false);
    const [showSideBar, setShowSideBar] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState<number>(0);
    const [activeId, setActiveId] = useState<number>(0);


    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    const { push } = useRouter();

    useEffect(() => {
        if (showSideBar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [showSideBar]);

    const linksHandler = (id: number) => {
        setActiveId(id)
        setIsOpen(false)
    }

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if (wrapRef.current && !(wrapRef.current as HTMLDivElement).contains(event.target as HTMLDivElement)) {
                setIsOpen(false);
                setShowSideBar(false);
            }
        });
        return function cleanup() {
            document.body.removeEventListener('click', (event) => {
                if (wrapRef.current && !(wrapRef.current as HTMLDivElement).contains(event.target as HTMLDivElement)) {
                    setIsOpen(false);
                    setShowSideBar(false);
                }
            });
        };
    }, [setIsOpen, setShowSideBar]);


    return (
        <div ref={wrapRef}>
            <AnimatePresence>
                {!profile ? (showSideBar && (
                    <>
                        <motion.div
                            className={styles.sideBar}
                            initial={{ width: 0 }}
                            animate={{ width: '70vw' }}
                            exit={{ width: 0 }}>
                            <div className={styles.elements}>
                                {navBarData.map((navbarEL) => {
                                    return (
                                        <Link
                                            href={navbarEL.link}
                                            className={
                                                location && location.pathname === navbarEL.link
                                                    ? styles.activeElement
                                                    : styles.element
                                            }
                                            onClick={() => {setActive(navbarEL.id); setShowSideBar(false)}}
                                            key={navbarEL.id}>
                                            {navbarEL.icon}
                                            <h2>{navbarEL.title}</h2>
                                        </Link>
                                    );
                                })}
                            </div>
                            <div
                                className={styles.logoutWrap}
                                onClick={() => {
                                    dispatch(Logout());
                                    push('/signin');
                                }}>
                                <span className={styles.logout}>
                                    <LogoutIcon />
                                    <p>Выйти из аккаунта</p>
                                </span>
                            </div>
                        </motion.div>
                        <span className={styles.blur} onClick={() => setShowSideBar(false)}></span>
                    </>
                )) : (
                    <span
                        className={isOpen ? styles.sideBarProfileOpen : styles.sideBarProfile}
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
                                    style={isOpen ? {} : { opacity: '0', fontWeight: '' }}
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
                    </span>)}
            </AnimatePresence>
            <header className={styles.wrap}>
                {profile ? (
                    <div className={styles.logoWrap}>
                        <div
                            className={styles.burgerMenu}
                            onClick={() => setIsOpen(prev => !prev)}
                        >
                            <div
                                className={`${styles.burgerIcon} ${isOpen ? styles.open : ''}`}
                            >
                                <div className={styles.bar}></div>
                                <div className={styles.bar}></div>
                                <div className={styles.bar}></div>
                            </div>
                        </div>
                        {!isMobile ? <Logo /> : <Logo small={true} />}
                    </div>
                ) :
                    (<>
                        <span onClick={() => setShowSideBar(!showSideBar)} className={styles.hamburgerWrap}>
                            <HamburgerMenu
                                strokeColor={showSideBar ? '#99A2AD' : '#3579F8'}
                                setOpen={setShowSideBar}
                                isOpen={showSideBar}
                            />
                        </span>
                        <Logo />
                    </>)
                }
                <div className={styles.infoWrap}>
                    <Bell
                        showPopup={showPopupNotifications}
                        clicked={clicked}
                        setShowPopup={setShowPopupNotifications}
                        setClicked={setClicked}
                        setShowPopupPages={setShowPopupPages}
                    />

                    <ArrowHeader
                        showPopup={showPopupPages}
                        setShowPopup={setShowPopupPages}
                    />

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
            </header>
        </div>
    );
};
