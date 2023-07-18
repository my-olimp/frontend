import ClipLoader from "@/shared/spinners/btnAuthSpinner/ui";
import { FC, MouseEventHandler, useState } from "react";
import "./ui.scss";

interface props {
  children?: string;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  use?: "active" | "disabled";
  width: string,
  height: string,
  type?: "register" | "auth" // регистрация / войти 
}

export const AuthButton: FC<props> = ({
  children,
  onClick,
  use = "active",
  isLoading,
  width,
  height,
  type,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const buttonClassNameVariant: string = `button button-${use} ${
    hover && use === "active" ? "isHover" : null
  }`;
  const isDisable = (use: string): boolean => {
    return use === "disabled" ? true : false;
  }

const style: any = {
  buttonStyle:{
  
  }
}

  return (
    <>
      <button
        type="button"
        className={buttonClassNameVariant}
        onClick={onClick}
        disabled={isDisable(use)}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {isLoading ? <ClipLoader /> : children}
      </button>
    </>
  );
};
