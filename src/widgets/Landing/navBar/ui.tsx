'use client';

import { NavBarMobile } from '@/features/Landing/navBarMobile/ui';
import { NavBarDesktop } from '@/features/Landing/navBarDesktop/ui';
import { SideNavBar } from '@/features/Landing/sideNavBar/ui';
import { FC, useState } from 'react';

interface props {
    mobile: boolean;
}

export const NavBar: FC<props> = ({ mobile }) => {
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
