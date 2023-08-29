'use client';

import { NavBarButton } from '@/entities/Landing/navBarButton/ui';
import { NavBarLogo } from '@/entities/Landing/navBarLogo/ui';
import { NavBarText } from '@/entities/Landing/navBarText/ui';
import './ui.scss';
import { useRef } from 'react';

export const NavBarDesktop = ({}) => {
    const navbar = useRef(null);
    const SCROLLED_STATE_CLASS = 'scrolled';

    const onScroll = () => {
        const scroll = document.documentElement.scrollTop;
        if (navbar) {
            if (scroll > 0) {
                navbar.current.classList.add(SCROLLED_STATE_CLASS);
            } else if (scroll <= 0) {
                navbar.current.classList.remove(SCROLLED_STATE_CLASS);
            }
        }
    };
    if (typeof window !== 'undefined' && navbar) {
        window.addEventListener('scroll', onScroll);
    }
    return (
        <div className="layout">
            <header id="navbar" className="wrap" ref={navbar}>
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
