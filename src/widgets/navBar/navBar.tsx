import { NavBarMobile } from "./../../features/navBarMobile/navBarMobile";
import { NavBarDesktop } from "./../../features/navBarDesktop/navBar";
import { SideNavBar } from "@/features/sideNavBar/sideNavBar";
import { FC, useState } from "react";

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
