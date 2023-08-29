import React, { FC, useEffect, useState } from 'react';
import styles from './ui.module.scss';
import Logo from '@/entities/Logo/ui/ui';
import { Bell } from '@/entities/Bell';
import { Avatar } from '@mui/material';
import { HamburgerMenu } from '@/entities/hamburgerMenu/ui/ui';
import { INotice, Notifications } from '@/features/Notifications';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

interface props {
    notifications: INotice[];
    navBarData: any;
    activeId: number;
}
export const NavBarMobile: FC<props> = ({ notifications, navBarData, activeId }) => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [clicked, setClicked] = useState<boolean>(false);
    const [showSideBar, setShowSideBar] = useState<boolean>(false);

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
                            animate={{ width: '60vw' }}
                            exit={{ width: 0 }}>
                            <div className={styles.elements}>
                                {navBarData.map((navbarEL) => {
                                    return (
                                        <Link
                                            href={navbarEL.link}
                                            className={
                                                navbarEL.id === activeId
                                                    ? styles.activeElement
                                                    : styles.element
                                            }
                                            key={navbarEL.id}>
                                            {navbarEL.icon}
                                            <h2>{navbarEL.title}</h2>
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                        <span className={styles.blur} onClick={() => setShowSideBar(false)}></span>
                    </>
                )}
            </AnimatePresence>
            <div className={styles.wrap}>
                <span onClick={() => setShowSideBar(!showSideBar)}>
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
                                <Notifications notifications={notifications} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};
