import { NavbarButton } from "../../entities/navBarButton/navBarButton";
import { NavBarLogo } from "../../entities/navBarLogo/navBarLogo";
import { NavBarText } from "../../entities/navBarText/navBarText";
import "./navBar.scss";

export const NavBarDesktop = () => {
  const SCROLLED_STATE_CLASS = "scrolled";
  const NAVBAR_ID = "navbar";
  const navBar = document.querySelector(".wrap");

  const onScroll = () => {
    //Получить значение прокрутки
    const scroll = document.documentElement.scrollTop;
    // Если значение прокрутки больше 0 - означает, что страница прокручивается,
    if (scroll > 0) {
      navbar.classList.add(SCROLLED_STATE_CLASS);
    } else {
      navbar.classList.remove(SCROLLED_STATE_CLASS);
    }
  };
  window.addEventListener("scroll", onScroll);
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
          <NavbarButton>Присоеденится</NavbarButton>
        </div>
      </header>
    </div>
  );
};
