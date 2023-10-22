import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';
import Arrow from '../../../../public/arrows/right.svg';
import { NavbarAvatar } from '@/entities/NavbarAvatar';


interface props {
    showPopup: boolean;
    setShowPopup: Dispatch<SetStateAction<boolean>>;
}

export const ArrowHeader: FC<props> = ({ showPopup, setShowPopup }) => {
    return (
        <>
            <div onClick={() => setShowPopup(!showPopup)} className={styles.container}>
            <NavbarAvatar />
                <div className={`${styles.arrow} ${showPopup ? `${styles._active}` : ''}`}>
                    <img src={Arrow.src} alt="arrow down" />
                </div>
            </div>
        </>
    )
};
