import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';
import { match } from 'ts-pattern';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

interface props {
    showPopup: boolean;
    clicked: boolean;
    setShowPopup: Dispatch<SetStateAction<boolean>>;
    setClicked: Dispatch<SetStateAction<boolean>>;
}
export const Bell: FC<props> = ({ showPopup, setShowPopup, clicked, setClicked }) => {
    return (
        <>
            {match(showPopup)
                .with(true, () => (
                    <div
                        className={styles.bellWrap}
                        onClick={() => {
                            setClicked(true);
                            setShowPopup(!showPopup);
                            setTimeout(() => {
                                setClicked(false);
                            }, 2500);
                        }}>
                        <NotificationsIcon
                            fontSize="medium"
                            className={clicked ? styles.bellClicked : styles.bell}
                        />
                    </div>
                ))
                .with(false, () => (
                    <div
                        className={styles.bellWrap}
                        onClick={() => {
                            setClicked(true);
                            setShowPopup(!showPopup);
                            setTimeout(() => {
                                setClicked(false);
                            }, 2500);
                        }}>
                        <NotificationsOutlinedIcon
                            fontSize="medium"
                            className={clicked ? styles.bellClicked : styles.bell}
                        />
                    </div>
                ))
                .run()}
        </>
    );
};
