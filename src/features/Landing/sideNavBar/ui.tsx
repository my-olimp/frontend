import { NavBarButton } from "@/entities/Landing/navBarButton/ui";
import { SideBarElement } from "@/entities/Landing/navSideBarElements/ui";
import { FC } from "react";
import styles from "./ui.module.scss";

interface props {
  show: boolean;
}

export const SideNavBar: FC<props> = ({ show }) => {
  const style = {
    wrap: {
      maxHeight: show ? "100vh" : "0", 
      height: show ? "100vh" : "0", 
      display: show ? "flex" : "none",
    },
  };
  return (
    <div className={styles.wrap} style={style.wrap}>
      <SideBarElement>Преимущества</SideBarElement>
      <SideBarElement>О Проекте</SideBarElement>
      <SideBarElement>Войти</SideBarElement>
      <NavBarButton>Присоединиться</NavBarButton>
    </div>
  );
};
