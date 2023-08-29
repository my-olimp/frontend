'use client';

import { NavBarMobile } from '@/features/Landing/navBarMobile/ui';
import { NavBarDesktop } from '@/features/Landing/navBarDesktop/ui';
import { SideNavBar } from '@/features/Landing/sideNavBar/ui';
import { FC, useEffect, useState } from 'react';

interface props {}

export const NavBar: FC<props> = () => {
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 900) {
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
                    <NavBarMobile handleClickSide={handleClickSide} setShow={setShow} show={show} />
                    <SideNavBar show={show} />
                </>
            ) : (
                <NavBarDesktop />
            )}
        </>
    );
};
