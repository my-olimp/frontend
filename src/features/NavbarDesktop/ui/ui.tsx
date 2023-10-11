import { Bell } from '@/entities/Bell';
import Logo from '@/entities/Logo/ui/ui';
import { NavbarAvatar } from '@/entities/NavbarAvatar';
import { INotice, Notifications } from '@/features/Notifications';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Logout } from '@/store/features/auth-slice';
import { RootState } from '@/store/store';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
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
}

const sideBarElements = [
    { id: 0, name: 'Главная', icon: <HomeOutlinedIcon />, active: true },
    { id: 1, name: 'Избранное', icon: <FavoriteBorderOutlinedIcon />, active: false },
    { id: 2, name: 'Достижения', icon: <WorkspacePremiumOutlinedIcon />, active: false },
];

export const NavBarDesktop: FC<props> = ({ navBarData, notifications, profile }) => {
    const [activeId, setActiveId] = useState<number>(0);
    const [showPopupNotifications, setShowPopupNotifications] = useState<boolean>(false);
    const [showPopupPages, setShowPopupPages] = useState<boolean>(false);
    const pathname = usePathname();
    const [clicked, setClicked] = useState<boolean>(false);

    const [active, setActive] = useState<number>(0);

    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    const { user } = useAppSelector((state) => state.auth);

    const { push } = useRouter();

    useEffect(() => {
        for (const element of sideBarElements) {
            element.active = false;
            if (element.id === activeId) {
                element.active = true;
            }
        }
    }, [activeId]);

    useEffect(() => {
        for (const element of navBarData) {
            if (element.link === pathname) {
                setActive(element.id);
            }
        }
    }, [pathname]);

    return (
        <header
            style={{ display: 'flex', justifyContent: 'space-between' }}
            className={styles.header}>
            <div className={styles.linksWrap}>
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
                    showPopup={showPopupNotifications}
                    clicked={clicked}
                    setShowPopup={setShowPopupNotifications}
                    setClicked={setClicked}
                />
                {user ? (
                    <>
                        <NavbarAvatar />
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
                <span className={styles.sideBar}>
                    <span>
                        {sideBarElements.map((element) => (
                            <div
                                key={element.id}
                                className={styles.sideBarElement}
                                title={element.name}
                                style={{
                                    backgroundColor:
                                        activeId === element.id ? '#F3F3F3' : 'transparent',
                                }}
                                onClick={() => setActiveId(element.id)}>
                                {element.icon}
                            </div>
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
