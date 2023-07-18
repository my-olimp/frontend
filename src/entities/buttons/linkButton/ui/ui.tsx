import styles from "./ui.module.scss";
import { FC, useState, MouseEventHandler } from "react";

interface PropsType {
  children: string;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  textSize?: string;
}

export const LinkButton: FC<PropsType> = ({
  children,
  color,
  textSize,
  onClick,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const style = {
    buttonStyle: {
      color: hover ? "#3579F8" : color ? color : "#222",
      fontSize: textSize ? textSize : "14px",
    },
  };

  return (
    <>
      <button
        type="button"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        className={styles.button}
        style={style.buttonStyle}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
