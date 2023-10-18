'use client';

import { NavBarButton } from '@/entities/Landing/navBarButton/ui';
import { NavBarLogo } from '@/entities/Landing/navBarLogo/ui';
import { NavBarText } from '@/entities/Landing/navBarText/ui';
import Link from 'next/link';
import './ui.scss';

export const NavBarDesktop = ({}) => {
    return (
        <div className="layout">
            <header id="navbar" className="wrap">
                <div className="container">
                    <div className="blockLeft">
                        <NavBarLogo />
                        {/* <Link href="#landing__advantages">
                            <NavBarText>Преимущества</NavBarText>
                        </Link>
                        <Link href="#landing__about">
                            <NavBarText>О проекте</NavBarText>
                        </Link> */}
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
