import { HamburgerMenu } from '@/entities/hamburgerMenu/';
import { NavBarLogo } from '@/entities/Landing/navBarLogo/ui';
import { FC } from 'react';
import styles from './ui.module.scss';

interface props {
    handleClickSide: () => void;
}

export const NavBarMobile: FC<props> = ({ handleClickSide }) => {
    return (
        <div className={styles.wrap} id="navbar">
            <div className={styles.blockLeft}>
                <NavBarLogo />
            </div>
            <div className={styles.switchNavbar} onClick={() => handleClickSide()}>
                <div className={styles.blockRight}>
                    <HamburgerMenu />
                </div>
            </div>
        </div>
    );
};
