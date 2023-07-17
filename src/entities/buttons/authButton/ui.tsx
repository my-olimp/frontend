import "./ui.scss";
import { FC, useState } from "react";
import ClipLoader from "@/shared/spinners/btnAuthSpinner/ui";

interface Props {
  children?: string;
  isLoading?: boolean;
  onClick?: any; // не знаю, что может приходить
  use?: "active" | "disabled";
}

export const AuthButton: FC<Props> = ({
  children,
  onClick,
  use = "active",
  isLoading,
}) => {
  const [hover, setHover] = useState(false);
  const ButtonClassNameVariant: string = `button button-${use} ${
    hover && use === "active" ? "isHover" : null
  }`;
  function isDisable(use: string): boolean {
    return use === "disabled" ? true : false;
  }

  return (
    <>
      <button
        type="button"
        className={ButtonClassNameVariant}
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
