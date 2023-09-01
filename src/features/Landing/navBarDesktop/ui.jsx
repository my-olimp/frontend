'use client';

import { NavBarButton } from '@/entities/Landing/navBarButton/ui';
import { NavBarLogo } from '@/entities/Landing/navBarLogo/ui';
import { NavBarText } from '@/entities/Landing/navBarText/ui';
import './ui.scss';

export const NavBarDesktop = ({ }) => {

    return (
        <div className="layout">
            <header id="navbar" className="wrap">
                <div className="container">
                    <div className="blockLeft">
                        <NavBarLogo />
                        <NavBarText>Преимущества</NavBarText>
                        <NavBarText>О проекте</NavBarText>
                    </div>
                    <div className="blockRight">
                        <NavBarText link="/signin">Войти</NavBarText>
                        <NavBarButton>Присоединиться</NavBarButton>
                    </div>
                </div>
            </header>
        </div>
    );
};
