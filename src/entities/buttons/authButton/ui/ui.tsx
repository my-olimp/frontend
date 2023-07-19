import ClipLoader from "@/shared/spinners/btnAuthSpinner/ui";
import { FC, MouseEventHandler, useState } from "react";
import "./ui.scss";

interface props {
  children?: string;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  use?: "active" | "disabled";
  width: "small" | "medium" | "large"; // 320px | 368px | 412px
  height: "small" | "medium" | "large"; // 32 | 40 px | 44 px
  type?: "auth" | "register" | "next"; // black | black | blue (colors)
}

export const AuthButton: FC<props> = ({
  children,
  onClick,
  use = "active",
  isLoading,
  width='100%',
  height='40px',
  type,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const isDisable = (use: string): boolean => {
    return use === "disabled";
  };
  const buttonClassNameVariant: string = `button button-${use} ${
    hover && use === "active" && type !== "next"
      ? "isHover"
      : hover && use && type === "next" && !isDisable(use)
      ? "next-isHover"
      : null
  }`;

  const style: any = {
    buttonStyle: {
      width:
        width === "small"
          ? "320px"
          : width === "medium"
          ? "368px"
          : width === "large"
          ? "412px"
          : null,
      height:
        height === "small"
          ? "32px"
          : height === "medium"
          ? "40px"
          : height === "large"
          ? "44px"
          : null,
      background:
        type === "auth" || (type === "register" && !isDisable(use))
          ? "#3D3D3D"
          : type === "next" && !isDisable(use)
          ? "#3579F8"
          : type === "next" && isDisable(use)
          ? "#8CB2FB"
          : null,
      color:
        type === "auth" || type === "register"
          ? "#FFF"
          : type === "next"
          ? "#FFF"
          : null,
      cursor:
        isDisable(use) ? "default" : "pointer"
    },
  };

  return (
    <>
      <button
        type="button"
        className={buttonClassNameVariant}
        onClick={onClick}
        disabled={isDisable(use)}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        style={style.buttonStyle}
      >
        {isLoading ? <ClipLoader /> : children}
      </button>
    </>
  );
};
