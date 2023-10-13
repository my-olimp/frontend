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
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import styles from './ui.module.scss';

interface props {
    navBarData: any[];
    notifications: INotice[];
    profile: boolean;
}

const sideBarElements = [
    { id: 0, name: 'Главная', icon: <AccountCircleOutlinedIcon />, rout: 'main', active: true },
    { id: 1, name: 'Успеваемость', icon: <InsertChartOutlinedRoundedIcon />, rout: '/grade', active: false },
    { id: 2, name: 'Избранное', icon: <FavoriteBorderOutlinedIcon />, rout: '/favourites', active: false },
    { id: 3, name: 'Хочу посмотреть', icon: <VisibilityOutlinedIcon />, rout: '/watchlater', active: false },
    { id: 4, name: 'Достижения', icon: <WorkspacePremiumOutlinedIcon />, rout: '/achievments', active: false },
];

export const NavBarDesktop: FC<props> = ({ navBarData, notifications, profile }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState<number>(0);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const pathname = usePathname();
    const [clicked, setClicked] = useState<boolean>(false);

    const [active, setActive] = useState<number>(0);

    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    const { user } = useAppSelector((state: any) => state.auth);

    const { push } = useRouter();

    useEffect(() => {
        for (const element of sideBarElements) {
            element.active = false
            if (pathname.includes(element.rout)) setActiveId(element.id)
        }
    }, []);

    const linksHandler = (id: number) => {
        setActiveId(id)
    }

    return (
        <header
            style={{ display: 'flex', justifyContent: 'space-between' }}
            className={styles.header}>
            <div className={styles.linksWrap}>
                <div
                    className={styles.burgerMenu}
                    style={window.location.href.includes('main') ? {opacity: '0'} : {}}
                >
                    <div
                        className={`${styles.burgerIcon} ${isOpen ? styles.open : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        style={window.location.href.includes('main') ? {cursor: 'default'} : {}}
                    >
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                </div>
                <Logo />
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
                    showPopup={showPopup}
                    clicked={clicked}
                    setShowPopup={setShowPopup}
                    setClicked={setClicked}
                />
                {user ? (
                    <NavbarAvatar />
                ) : (
                    <button className={styles.login} onClick={() => push('/signin')}>
                        Войти
                    </button>
                )}
            </div>
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: '252px' }}
                        exit={{ height: 0 }}
                        className={styles.popupWrap}>
                        <Notifications notifications={notifications} setShow={setShowPopup} />
                    </motion.div>
                )}
            </AnimatePresence>
            {profile && (
                <span
                    className={isOpen ? styles.sideBarOpen : styles.sideBar}
                    style={isOpen ? {transition: 'all .2s ease-in-out', width: '15rem'} : {transition: 'all .2s ease-in-out'}}
                >
                    <span style={{display: 'flex'}}>
                        {sideBarElements.map((element: any) => (
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
                                    className={styles.baritemtext}
                                    style={isOpen ? {} : {opacity: '0'}}
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
                    </div>
                </span>
            )}
        </header>
    );
};
