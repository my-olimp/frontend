"use client";

import { NavBarButton } from "@/entities/Landing/navBarButton/ui";
import { NavBarLogo } from "@/entities/Landing/navBarLogo/ui";
import { NavBarText } from "@/entities/Landing/navBarText/ui";
import "./ui.scss";

export const NavBarDesktop = ({ show }) => {
  const SCROLLED_STATE_CLASS = "scrolled";

  const onScroll = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 0) {
      navbar.classList.add(SCROLLED_STATE_CLASS);
    } else if (scroll <= 0) {
      navbar.classList.remove(SCROLLED_STATE_CLASS);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", onScroll);
  }
  //В этом случае лучше не использовать moduleCSS, т.к. классы не добавляются

  return (
    <div className="layout">
      <header id="navbar" className="wrap">
        <div className="blockLeft">
          <NavBarLogo />
          <NavBarText>Преимущества</NavBarText>
          <NavBarText>О проекте</NavBarText>
        </div>
        <div className="blockRight">
          <NavBarText>Войти</NavBarText>
          <NavBarButton>Присоедениться</NavBarButton>
        </div>
      </header>
    </div>
  );
};
