import React, { FC, useState } from 'react';
import styles from './ui.module.scss';
import Logo from '@/entities/Logo/ui/ui';
import { Bell } from '@/entities/Bell';
import { Avatar } from '@mui/material';
import { HamburgerMenu } from '@/entities/hamburgerMenu/ui/ui';
import { INotice, Notifications } from '@/features/Notifications';
import { AnimatePresence, motion } from 'framer-motion';

interface props {
    notifications: INotice[];
    navBarData: any;
}
export const NavBarMobile: FC<props> = ({ notifications, navBarData }) => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <div className={styles.wrap}>
            <HamburgerMenu />
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
    );
};
