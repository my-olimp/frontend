import { HamburgerMenu } from "./../../shared/hamburgerMenu/hamMenu";
import { NavBarLogo } from "./../../entities/navBarLogo/navBarLogo";
import { FC } from "react";
import styles from "./navBarMobile.module.scss";

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
