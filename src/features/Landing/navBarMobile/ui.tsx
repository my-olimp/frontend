import { HamburgerMenu } from '@/entities/hamburgerMenu/';
import { NavBarLogo } from '@/entities/Landing/navBarLogo/ui';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from './ui.module.scss';

interface props {
    handleClickSide: () => void;
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}

export const NavBarMobile: FC<props> = ({ handleClickSide, show, setShow }) => {
    return (
        <div className={styles.wrap} id="navbar">
            <div className={styles.blockLeft}>
                <NavBarLogo />
            </div>
            <div className={styles.switchNavbar} onClick={() => handleClickSide()}>
                <div className={styles.blockRight}>
                    <HamburgerMenu strokeColor={'white'} setOpen={setShow} isOpen={show} />
                </div>
            </div>
        </div>
    );
};
