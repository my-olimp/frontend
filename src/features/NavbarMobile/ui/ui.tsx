import { Bell } from '@/entities/Bell';
import Logo from '@/entities/Logo/ui/ui';
import { HamburgerMenu } from '@/entities/hamburgerMenu/ui/ui';
import { INotice, Notifications } from '@/features/Notifications';
import { Logout } from '@/store/features/auth-slice';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import styles from './ui.module.scss';

interface props {
    notifications: INotice[];
    navBarData: any;
}
export const NavBarMobile: FC<props> = ({ notifications, navBarData }) => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [clicked, setClicked] = useState<boolean>(false);
    const [showSideBar, setShowSideBar] = useState<boolean>(false);
    const [active, setActive] = useState<number>(0);
    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();

    useEffect(() => {
        if (showSideBar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [showSideBar]);

    return (
        <>
            <AnimatePresence>
                {showSideBar && (
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
                                                navbarEL.id === active
                                                    ? styles.activeElement
                                                    : styles.element
                                            }
                                            onClick={() => setActive(navbarEL.id)}
                                            key={navbarEL.id}>
                                            {navbarEL.icon}
                                            <h2>{navbarEL.title}</h2>
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className={styles.logoutWrap} onClick={() => dispatch(Logout())}>
                                <span className={styles.logout}>
                                    <LogoutIcon />
                                    <p>Выйти из аккаунта</p>
                                </span>
                            </div>
                        </motion.div>
                        <span className={styles.blur} onClick={() => setShowSideBar(false)}></span>
                    </>
                )}
            </AnimatePresence>
            <header className={styles.wrap}>
                <span onClick={() => setShowSideBar(!showSideBar)} className={styles.hamburgerWrap}>
                    <HamburgerMenu
                        strokeColor={showSideBar ? '#99A2AD' : '#3579F8'}
                        setOpen={setShowSideBar}
                        isOpen={showSideBar}
                    />
                </span>
                <Logo />
                <div className={styles.profileWrap}>
                    <Bell
                        showPopup={showPopup}
                        clicked={clicked}
                        setShowPopup={setShowPopup}
                        setClicked={setClicked}
                    />
                    <Avatar></Avatar>
                    <AnimatePresence>
                        {showPopup && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: '252px' }}
                                exit={{ height: 0 }}
                                className={styles.popupWrap}>
                                <Notifications
                                    notifications={notifications}
                                    setShow={setShowPopup}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </header>
        </>
    );
};
