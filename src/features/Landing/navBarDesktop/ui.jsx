'use client';

import { NavBarButton } from '@/entities/Landing/navBarButton/ui';
import { NavBarLogo } from '@/entities/Landing/navBarLogo/ui';
import { NavBarText } from '@/entities/Landing/navBarText/ui';
import './ui.scss';

export const NavBarDesktop = ({}) => {
    // const onScroll = () => {
    //     const scroll = document.documentElement.scrollTop;
    //
    //     if (navbar) {
    //         if (scroll > 0) {
    //             console.log(navbar);
    //             navbar.classList.add('scrolled');
    //         } else if (scroll <= 0) {
    //             navbar.classList.remove('scrolled');
    //         }
    //     }
    // };
    //
    // if (typeof window !== 'undefined' && navbar) {
    //     window.addEventListener('scroll', onScroll);
    // }
    return (
        <div className="layout">
            <header id="navbar" className="wrap">
                <div className="blockLeft">
                    <NavBarLogo />
                    <NavBarText>Преимущества</NavBarText>
                    <NavBarText>О проекте</NavBarText>
                </div>
                <div className="blockRight">
                    <NavBarText link="/signin">Войти</NavBarText>
                    <NavBarButton>Присоединиться</NavBarButton>
                </div>
            </header>
        </div>
    );
};
