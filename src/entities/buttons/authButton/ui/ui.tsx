import ClipLoader from "@/shared/spinners/btnAuthSpinner/ui";
import { FC, MouseEventHandler, useState } from "react";
import "./ui.scss";

interface props {
  children?: string;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  use?: "active" | "disabled";
  width?: string,
  height?: string,
  type?: "signUp" | "signIn"
}

export const AuthButton: FC<props> = ({
  children,
  onClick,
  use = "active",
  isLoading,
  width='398px',
  height='40px',
  type,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const buttonClassNameVariant: string = `button button-${use} ${
    hover && use === "active" ? "isHover" : null
  }`;
  const isDisable = (use: string): boolean => {
    return use === "disabled";
  }

  const style = {
    button: {
      width: width,
      height: height
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
        style={style.button}
      >
        {isLoading ? <ClipLoader /> : children}
      </button>
    </>
  );
};
