'use client';

import { NavBarMobile } from '@/features/Landing/navBarMobile/ui';
import { NavBarDesktop } from '@/features/Landing/navBarDesktop/ui';
import { SideNavBar } from '@/features/Landing/sideNavBar/ui';
import { FC, useEffect, useRef, useState } from 'react';

interface props {}

export const NavBar: FC<props> = () => {
    const [mobile, setMobile] = useState(false);
    const width = useRef(0);

    useEffect(() => {
        width.current = window && window.innerWidth;
        if (width.current < 900) {
            setMobile(true);
        }
    }, []);

    const [show, setShow] = useState<boolean>(false);
    const handleClickSide = () => {
        setShow(!show);
    };

    return (
        <>
            {mobile ? (
                <>
                    <NavBarMobile handleClickSide={handleClickSide} />
                    <SideNavBar show={show} />
                </>
            ) : (
                <NavBarDesktop />
            )}
        </>
    );
};
