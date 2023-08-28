import React, { FC, useState } from 'react';
import styles from './ui.module.scss';
import Logo from '@/entities/Logo/ui/ui';
import Link from 'next/link';
import { Avatar } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { INotice, Notifications } from '@/features/Notifications';
import { Bell } from '@/entities/Bell';

interface props {
    navBarData: any;
    notifications: INotice[];
    activeId: number;
}
export const NavBarDesktop: FC<props> = ({ navBarData, notifications, activeId }) => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <header
            style={{ display: 'flex', justifyContent: 'space-between' }}
            className={styles.header}>
            <div className={styles.linksWrap}>
                <Logo />
                {navBarData.map((data) => (
                    <Link
                        className={styles.element}
                        key={data.id}
                        href={data.link}
                        style={{ color: activeId === data.id ? '#3579f8' : 'black' }}>
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
        </header>
    );
};