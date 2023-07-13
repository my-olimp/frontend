import { SideBarElement } from "@/entities/sideBarElements/sideBarElements";
import { FC } from "react";
import styles from "./sideNavBar.module.scss";
import { NavbarButton } from "@/entities/navBarButton/navBarButton";

interface props {
  show: boolean;
}

export const SideNavBar: FC<props> = ({ show }) => {
  const sideWidth = "100%";
  const style = {
    wrap: {
      width: !show ? "0" : sideWidth,
      display: !show ? "none" : "flex",
    },
  };
  return (
    <div className={styles.wrap} style={style.wrap}>
      <SideBarElement>Преимущества</SideBarElement>
      <SideBarElement>О Проекте</SideBarElement>
      <SideBarElement>Войти</SideBarElement>
      <NavbarButton>Присоединиться</NavbarButton>
    </div>
  );
};
